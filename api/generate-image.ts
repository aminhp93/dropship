/**
 * Vercel Serverless Function — POST /api/generate-image
 *
 * Đây là nơi DUY NHẤT chạm vào OPENAI_API_KEY. Client gọi endpoint này,
 * không bao giờ gọi thẳng api.openai.com, nên key không đi ra trình duyệt.
 *
 * ⚠️ Endpoint hiện CHƯA CÓ XÁC THỰC: ai biết URL cũng gọi được và tiêu credit
 *    của bạn. Chấp nhận được khi còn dev/preview. Trước khi cho public thật,
 *    thêm 1 lớp auth (session, hoặc header bí mật đối chiếu env).
 */
import { generateImage, ImageGenError } from './_openai';

export const config = { runtime: 'edge' };

function json(body: unknown, status: number) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== 'POST') {
    return json({ error: 'Chỉ hỗ trợ POST.' }, 405);
  }

  try {
    const body = await req.json().catch(() => ({}));
    const result = await generateImage(body, {
      apiKey: process.env.OPENAI_API_KEY,
      defaultModel: process.env.OPENAI_IMAGE_MODEL,
    });
    return json(result, 200);
  } catch (err) {
    const status = err instanceof ImageGenError ? err.status : 500;
    const message =
      err instanceof Error ? err.message : 'Lỗi không xác định phía server.';
    return json({ error: message }, status);
  }
}
