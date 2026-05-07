# Repository Guidelines

## Project Structure & Module Organization

This is an Astro 6 blog deployed through the Cloudflare adapter. Source lives in `src/`: reusable UI components are in `src/components`, shared page shells are in `src/layouts`, route files are in `src/pages`, and global CSS is in `src/styles/global.css`. Blog posts are Markdown files in `src/contents/blog`; their schema is defined in `src/content.config.ts`. Static assets live in `public`, with blog thumbnails under `public/images/blog`. Generated folders such as `.astro`, `dist`, `.wrangler`, and `node_modules` should not be edited directly.

## Build, Test, and Development Commands

Use pnpm for package management because this repository includes `pnpm-lock.yaml`.

- `pnpm install`: install dependencies using the lockfile.
- `pnpm dev`: start the local Astro development server.
- `pnpm build`: create a production build and run Astro validation.
- `pnpm preview`: preview the built site locally.
- `pnpm astro check`: run Astro type and template checks.
- `pnpm cf-types`: regenerate Cloudflare Worker types in `worker-configuration.d.ts`.

## Coding Style & Naming Conventions

Use TypeScript and Astro component patterns already present in the repository. Prefer two-space indentation in `.astro`, `.ts`, `.css`, and `.json` files. Name components and layouts with PascalCase, for example `BlogList.astro` or `BaseLayout.astro`. Route files should follow Astro routing conventions, such as `src/pages/blog/[slug].astro` and `src/pages/api/reads/[slug].ts`. Blog post filenames should be lowercase kebab-case, for example `writing-every-singleday.md`.

## Content Guidelines

Every blog post must include frontmatter matching the content collection schema: `title`, `subtitle`, `date`, `thumbnail`, and optional `draft`. Store referenced thumbnails in `public/images/blog` and use paths that the site can serve from `public`, for example `/images/blog/baki.webp`.

## Testing Guidelines

There is no dedicated test script yet. For now, treat `pnpm build` and `pnpm astro check` as required validation before opening a pull request. When adding behavior that warrants tests, add the test framework and an explicit `pnpm test` script in the same change.

## Commit & Pull Request Guidelines

Recent history uses short conventional-style subjects such as `feat: add analytics, update favicon` and `fix: global style import`. Keep commits scoped and use prefixes like `feat:`, `fix:`, or `chore:`. Pull requests should include a brief summary, validation commands run, linked issues when relevant, and screenshots for visible layout or content changes.

## Security & Configuration Tips

Do not commit secrets or Cloudflare credentials. Keep deployment settings in `wrangler.jsonc` and Astro site settings in `astro.config.mjs`; update both deliberately when changing production URLs or runtime behavior.
