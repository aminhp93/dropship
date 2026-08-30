import { defineConfig, loadEnv, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";
import path from "path";
import { generateImage, ImageGenError } from "./api/_openai";

/**
 * `vite dev` không chạy được Vercel Serverless Function, nên plugin này dựng lại
 * đúng endpoint /api/generate-image cho môi trường local — dùng chung lõi
 * `api/_openai.ts` với bản production để hai bên không lệch nhau.
 *
 * Key đọc từ .env qua loadEnv với prefix rỗng => biến KHÔNG có tiền tố VITE_
 * chỉ sống ở tiến trình Node của dev server, không lọt vào bundle client.
 */
function devApiPlugin(env: Record<string, string>): Plugin {
  return {
    name: "dev-api-generate-image",
    configureServer(server) {
      server.middlewares.use("/api/generate-image", (req, res) => {
        const send = (body: unknown, status: number) => {
          res.statusCode = status;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify(body));
        };

        if (req.method !== "POST") {
          send({ error: "Chỉ hỗ trợ POST." }, 405);
          return;
        }

        let raw = "";
        req.on("data", (chunk) => {
          raw += chunk;
        });
        req.on("end", () => {
          void (async () => {
            try {
              let parsed: unknown = {};
              try {
                parsed = raw ? JSON.parse(raw) : {};
              } catch {
                send({ error: "Body không phải JSON hợp lệ." }, 400);
                return;
              }

              const result = await generateImage(parsed as object, {
                apiKey: env.OPENAI_API_KEY,
                defaultModel: env.OPENAI_IMAGE_MODEL,
              });
              send(result, 200);
            } catch (err) {
              const status = err instanceof ImageGenError ? err.status : 500;
              const message =
                err instanceof Error ? err.message : "Lỗi không xác định.";
              send({ error: message }, status);
            }
          })();
        });
      });
    },
  };
}

export default defineConfig(({ mode }) => {
  // Prefix rỗng = nạp tất cả biến trong .env, kể cả biến không có tiền tố VITE_.
  // Các biến này chỉ dùng trong tiến trình Node bên dưới, không expose ra client.
  const env = loadEnv(mode, process.cwd(), "");

  return {
    base: process.env.VITE_BASE ?? "/dropship/",
    plugins: [react(), TanStackRouterVite(), devApiPlugin(env)],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    server: {
      port: 3002,
    },
  };
});
