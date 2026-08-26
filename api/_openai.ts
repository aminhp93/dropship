/**
 * Lõi gọi OpenAI Images API — dùng chung cho Vercel serverless function
 * (`api/generate-image.ts`) và middleware dev của Vite (`vite.config.ts`).
 *
 * File này CHỈ chạy phía server. API key không bao giờ đi ra client.
 */

/** Model được phép gọi. Chặn client truyền model tuỳ ý vào tài khoản OpenAI. */
export const ALLOWED_IMAGE_MODELS = [
  'gpt-image-1-mini',
  'gpt-image-1',
  'dall-e-3',
  'dall-e-2',
] as const;

export type AllowedImageModel = (typeof ALLOWED_IMAGE_MODELS)[number];

export const DEFAULT_IMAGE_MODEL: AllowedImageModel = 'gpt-image-1-mini';

/** Giới hạn độ dài prompt để 1 request hỏng không đốt hết credit. */
const MAX_PROMPT_LENGTH = 4000;

export type GenerateImageRequest = {
  prompt?: unknown;
  model?: unknown;
  size?: unknown;
};

export type GenerateImageResult = {
  imageUrl: string;
  model: AllowedImageModel;
};

/** Lỗi có kèm HTTP status để handler trả đúng mã, không nuốt thành 500 hết. */
export class ImageGenError extends Error {
  status: number;
  constructor(message: string, status = 500) {
    super(message);
    this.name = 'ImageGenError';
    this.status = status;
  }
}

function isAllowedModel(value: unknown): value is AllowedImageModel {
  return (
    typeof value === 'string' &&
    (ALLOWED_IMAGE_MODELS as readonly string[]).includes(value)
  );
}

/**
 * Gọi OpenAI Images API và trả về URL ảnh (hoặc data: URL nếu API trả base64).
 * `gpt-image-1*` luôn trả b64_json, `dall-e-*` trả url — xử lý cả hai.
 */
export async function generateImage(
  body: GenerateImageRequest,
  env: { apiKey?: string; defaultModel?: string },
): Promise<GenerateImageResult> {
  const apiKey = env.apiKey?.trim();
  if (!apiKey) {
    throw new ImageGenError(
      'Server chưa cấu hình OPENAI_API_KEY. Thêm biến này vào .env (local) hoặc Vercel → Settings → Environment Variables.',
      500,
    );
  }

  const prompt = typeof body.prompt === 'string' ? body.prompt.trim() : '';
  if (!prompt) {
    throw new ImageGenError('Thiếu "prompt" trong request body.', 400);
  }
  if (prompt.length > MAX_PROMPT_LENGTH) {
    throw new ImageGenError(
      `Prompt quá dài (${prompt.length} ký tự, tối đa ${MAX_PROMPT_LENGTH}).`,
      400,
    );
  }

  // Ưu tiên model client chọn (nếu hợp lệ) → model mặc định của server → fallback cứng.
  const model: AllowedImageModel = isAllowedModel(body.model)
    ? body.model
    : isAllowedModel(env.defaultModel)
      ? env.defaultModel
      : DEFAULT_IMAGE_MODEL;

  const size = typeof body.size === 'string' ? body.size : '1024x1024';

  const res = await fetch('https://api.openai.com/v1/images/generations', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({ model, prompt, n: 1, size }),
  });

  const data = (await res.json().catch(() => null)) as {
    error?: { message?: string };
    data?: Array<{ url?: string; b64_json?: string }>;
  } | null;

  if (!res.ok) {
    // Chuyển nguyên văn lỗi OpenAI ra ngoài để debug được, nhưng không kèm key.
    throw new ImageGenError(
      data?.error?.message || `OpenAI API lỗi ${res.status}: ${res.statusText}`,
      res.status,
    );
  }

  const first = data?.data?.[0];
  if (first?.url) return { imageUrl: first.url, model };
  if (first?.b64_json) {
    return { imageUrl: `data:image/png;base64,${first.b64_json}`, model };
  }

  throw new ImageGenError('OpenAI trả về phản hồi không chứa dữ liệu ảnh.', 502);
}
