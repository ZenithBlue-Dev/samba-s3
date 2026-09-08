import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// GitHub Pages project site: https://zenithblue-oss.github.io/samba-s3/
// All in-page asset URLs are relative (no leading slash) so the build works
// both locally and under the /samba-s3 subpath. `dist/` is the publishable
// folder — upload its contents as-is (plus .nojekyll) to the Pages source.
export default defineConfig({
  site: "https://zenithblue-oss.github.io/samba-s3",
  base: "/samba-s3",
  output: "static",
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
