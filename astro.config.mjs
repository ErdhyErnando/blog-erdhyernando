// @ts-check
import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  i18n: {
    locales: ["en", "id"],
    defaultLocale: "en",
    routing: {
      prefixDefaultLocale: true,
    },
  },
  output: "server",
  adapter: cloudflare({
    imageService: "passthrough",
  }),
  site: "https://blog.erdhyernando.xyz",
});
