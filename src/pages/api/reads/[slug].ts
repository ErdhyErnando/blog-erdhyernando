import type { APIRoute } from "astro";
import { env } from "cloudflare:workers";

export const GET: APIRoute = async ({ params }) => {
  const { slug } = params;
  const kv = env.BLOG_READS;

  if (!kv || !slug) {
    return new Response(JSON.stringify({ count: 0 }), { status: 400 });
  }

  const key = `reads:${slug}`;
  const value = await kv.get(key);
  const count = value ? parseInt(value, 10) : 0;

  return new Response(JSON.stringify({ count }), {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const POST: APIRoute = async ({ params }) => {
  const { slug } = params;
  const kv = env.BLOG_READS;

  if (!kv || !slug) {
    return new Response(JSON.stringify({ count: 0 }), { status: 400 });
  }

  const key = `reads:${slug}`;
  const value = await kv.get(key);
  const currentCount = value ? parseInt(value, 10) : 0;
  const newCount = currentCount + 1;

  await kv.put(key, newCount.toString());

  return new Response(JSON.stringify({ count: newCount }), {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
