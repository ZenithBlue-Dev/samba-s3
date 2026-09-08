# SambaS3 website

Marketing site for **SambaS3** — PS3 emulator UI/launcher for Android (RPCSX frontend).

- Stack: **Astro 5 + Tailwind CSS v4 + TypeScript**, static output, zero-JS by default with a few progressive-enhancement islands (carousel, FAQ, nav, reveal-on-scroll).
- Theme mirrors the app: deep navy `#0A0D1A`, gold `#C9A84C` / `#F0C040`, cream `#F0E8D0`, `Press Start 2P` + `Rajdhani` + `Share Tech Mono`, CRT grain + vignette + scanlines.
- Layout mirrors `gamehub.xiaoji.com`: sticky nav → hero with downloads → trust strip → feature grid → alternating showcase → 3-step setup → XMB carousel → specs → downloads → FAQ → final CTA → footer.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321/samba-s3/
npm run build    # dist/
npm run preview
```

## Deploy to GitHub Pages (zenithblue-oss/samba-s3)

`astro.config.mjs` already sets `site: https://zenithblue-oss.github.io/samba-s3`
and `base: /samba-s3`, all asset URLs are relative, and `public/.nojekyll`
is included so `_astro/` files are served. To publish, upload the contents of
`dist/` as-is to the Pages publishing source (repo root of the `gh-pages`
branch, or a `docs/` folder with Pages set to deploy from `/docs`), then
enable **Settings → Pages → Deploy from a branch**.

## Assets

Screenshots under `public/screenshots/` are copied from the repo root
(`screenshot_library.png`, `screenshot_settings.png`, `screenshot_overlay.png`,
`screenshot_drivers.png`) plus the app launcher icon. Replace with Play Store
carousel art when ready.
