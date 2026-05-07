import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ site }) => {
  const posts = await getCollection(
    "blog",
    ({ data, id }) => !data.draft && id.startsWith("en/"),
  );

  return rss({
    title: "Erdhy Ernando's Blog",
    description:
      "Writing about code, fitness, and life without AI slop. and to hopefully safe enough to buy gpu(s)",
    site: site!,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.subtitle,
      pubDate: post.data.date,
      link: `/en/blog/${post.id.replace(/^en\//, "")}/`,
    })),
    customData: "<language>en-us</language>",
  });
};
