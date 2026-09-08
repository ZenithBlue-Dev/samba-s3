<div align="center">

<img src="website/public/screenshots/hero-bg.jpg" alt="SambaS3 golden snake banner" width="100%" />

# SambaS3

*Play PS3 games on Android — a controller-first native UI for the RPCSX emulator.*

[![GPLv2](https://img.shields.io/badge/license-GPLv2-blue.svg)](https://github.com/zenithblue-oss/samba-s3/blob/master/LICENSE)
[![Android](https://img.shields.io/badge/Android-10%2B-3DDC84?logo=android&logoColor=white)](https://github.com/zenithblue-oss/samba-s3/releases)
[![Discord](https://img.shields.io/discord/252023769500090368?color=5865F2&logo=discord&logoColor=white&label=discord)](https://discord.gg/t6dzA4wUdG)
[![Website](https://img.shields.io/website?url=https%3A%2F%2Fzenithblue-oss.github.io%2Fsamba-s3%2F&label=website&up_color=C9A84C)](https://zenithblue-oss.github.io/samba-s3/)

<img src="website/public/screenshots/device-framed.webp" alt="SambaS3 XMB library on a OnePlus 13R in a titanium frame" width="100%" />

*Shot on a OnePlus 13R — live app UI, not a mockup.*

<img src="website/public/screenshots/ps3-console.webp" alt="PS3 slim console" width="270" /> <img src="website/public/screenshots/ps3-pad.webp" alt="PS3 controller" width="270" />

[⬇ Android APK](https://github.com/zenithblue-oss/samba-s3/releases) · [Google Play](https://play.google.com/store/apps/details?id=com.zenithblue.sambas3) · [View Source ↗](https://github.com/zenithblue-oss/samba-s3)

</div>

> **Please don't ask for game or firmware links.** Piracy isn't allowed on our GitHub or Discord. SambaS3 ships with no games, no firmware and no keys — you bring your own dumps from hardware and discs you own.

## Index

- [Why SambaS3](#why-sambas3)
- [App Tour](#app-tour)
- [Setup](#setup)
- [Playable Games](#playable-games)
- [Specs](#specs)
- [Download](#download)
- [FAQ](#faq)

## Why SambaS3

*A console UI, not an emulator shell. Built for the couch and the controller.*

- ◫ **XMB Game Library** — horizontal carousel with cover art, serials and per-game config. Fully D-pad navigable.
- ⚙ **Runtime RPCSX Core** — the emulator core updates without reinstalling the app.
- ▣ **Turnip GPU Drivers** — bundled on Play Store builds; bring your own per game on standard builds.
- ✛ **Controller-First** — USB/Bluetooth pads with per-game mapping, plus a touch-overlay editor with live preview.
- ❚❚ **Save States + Pause Menu** — resume, states with thumbnails, screenshots and settings on Start/Options.
- ≡ **Deep Settings** — emulation, graphics, audio, patches, firmware, logs — every row pad-reachable.

## App Tour

*Real screenshots from a real device. Interactive version on the [website](https://zenithblue-oss.github.io/samba-s3/#showcase).*

| | |
|---|---|
| <img src="website/public/screenshots/tour-home.jpg" alt="Library" width="100%" /><br/>**Library** — Red Dead Redemption focused, PPU state on every card | <img src="website/public/screenshots/tour-launcher.jpg" alt="Launch Profile" width="100%" /><br/>**Launch Profile** — per-game config, Turnip build, saves, START |
| <img src="website/public/screenshots/tour-gameplay.jpg" alt="Gameplay" width="100%" /><br/>**In-Game** — Demon's Souls at 29.9 FPS with overlay + graphs | <img src="website/public/screenshots/tour-demonsouls.jpg" alt="Vista" width="100%" /><br/>**Pad mode** — overlay off, clean fullscreen at 30.1 FPS |
| <img src="website/public/screenshots/tour-menu.jpg" alt="Pause menu" width="100%" /><br/>**Pause Menu** — resume, configure, live logs, all on pad | <img src="website/public/screenshots/tour-settings.jpg" alt="Settings" width="100%" /><br/>**Settings** — system, graphics and tools behind versioned YAML |
| <img src="website/public/screenshots/overlay.jpg" alt="Overlay editor" width="100%" /><br/>**Overlay editor** — drag, scale and preview touch controls | <img src="website/public/screenshots/drivers.jpg" alt="Drivers" width="100%" /><br/>**Drivers** — bundled or imported Turnip, per game |

## Setup

1. **Install firmware** — dump `PS3UPDAT.PUP` from your own console and install it in-app.
2. **Import games** — add your own ISO, PKG or folder dumps with the `+` tile.
3. **Press ✕ and play** — boot from the carousel (✕ confirm · ○ back · △ game info · Start pause menu).

## Playable Games

*Framerates measured on-device, in-game. Cover art taken from inside each game's own disc image.*

| Game | Cover | Result |
|---|---|---|
| **Grand Theft Auto V**<br/>`BLJM61019` | <img src="website/public/screenshots/games/gtav.jpg" alt="GTA V art" width="220" /> | [![GTAV](https://img.shields.io/badge/GTA_V-10_FPS-orange)](https://zenithblue-oss.github.io/samba-s3/#games)<br/>Boots and runs; heavy title, expect low framerates |
| **GTA San Andreas**<br/>`BLUS31584` | <img src="website/public/screenshots/games/gtasa.jpg" alt="GTA SA art" width="220" /> | [![SA](https://img.shields.io/badge/San_Andreas-30_FPS-brightgreen)](https://zenithblue-oss.github.io/samba-s3/#games)<br/>Smooth full-speed play; a great first boot test |
| **Demon's Souls**<br/>`BLUS30443` | <img src="website/public/screenshots/games/demonsouls.jpg" alt="Demon's Souls art" width="220" /> | [![DeS](https://img.shields.io/badge/Demons_Souls-30_FPS-brightgreen)](https://zenithblue-oss.github.io/samba-s3/#games)<br/>Full-speed with touch overlay or a pad |

**Tested on a OnePlus 13R** (CPH2691) — <img src="website/public/screenshots/vendor/hw_soc_snapdragon.png" alt="Snapdragon" width="20" /> Snapdragon 8 Gen 3 · <img src="website/public/screenshots/vendor/hw_gpu_adreno.png" alt="Adreno" width="20" /> Adreno 750 · <img src="website/public/screenshots/vendor/hw_driver_mesa.png" alt="Mesa" width="20" /> Mesa Turnip · 11 GB RAM · Android 16 · FW 4.92.

## Specs

Android 10+ · arm64 recommended (x86_64 works) · Vulkan-capable GPU · 6 GB RAM minimum, 8 GB+ for heavy games · your own ISO/PKG/folder dumps · controller or touch.

▲ Best results: Snapdragon 8-series · Turnip matched to the game · per-game config. Compatibility varies per title — emulation is experimental.

## Download

| Flavor | Good for | Get it |
|---|---|---|
| **Standard** (default) | Tuning your own GPU drivers per game | [⬇ Download APK](https://github.com/zenithblue-oss/samba-s3/releases) |
| **Play Store** | Zero setup, bundled drivers, auto-updates | [Get on Play](https://play.google.com/store/apps/details?id=com.zenithblue.sambas3) |

## FAQ

<details><summary><b>What is SambaS3?</b></summary><br />A native Android frontend for the RPCSX PS3 emulator — library, settings, firmware, drivers, controllers and save states in one controller-first app.</details>
<details><summary><b>Is it free?</b></summary><br />Yes. Open source under GPLv2, no ads, no accounts.</details>
<details><summary><b>Where do games come from?</b></summary><br />Your own dumps, from hardware and discs you own. We can't help with downloads.</details>
<details><summary><b>Which phone runs it best?</b></summary><br />A recent flagship with Vulkan graphics and 8 GB+ RAM — Snapdragon 8-series with Turnip drivers is the sweet spot.</details>
<details><summary><b>Do I need a controller?</b></summary><br />No, but everything is designed for one. USB/Bluetooth pads work, and there's an editable touch overlay.</details>
<details><summary><b>A game won't boot — what now?</b></summary><br />Check firmware, try another GPU driver, reset that game's settings to default, and verify your dump. The app has a built-in log viewer — bring logs to Discord.</details>

---

<div align="center">

**SambaS3** · [Website](https://zenithblue-oss.github.io/samba-s3/) · [Releases](https://github.com/zenithblue-oss/samba-s3/releases) · [GitHub](https://github.com/zenithblue-oss/samba-s3) · [Discord](https://discord.gg/t6dzA4wUdG)

© 2026 SambaS3 contributors · GPLv2 · Not affiliated with Sony Interactive Entertainment

</div>
