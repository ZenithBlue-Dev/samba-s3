<div align="center">

<img src="website/public/screenshots/hero-bg.jpg" alt="SambaS3 banner" width="100%" />

# SambaS3

PS3 emulator for Android, based on RPCSX/RPCS3.

[Download Free (GitHub Releases)](https://github.com/ZenithBlue-Dev/samba-s3/releases) · [Get Pro (Google Play)](https://play.google.com/store/apps/details?id=com.zenithblue.sambas3) · [Website](https://zenithblue-dev.github.io/samba-s3/)

<img src="website/public/screenshots/device-framed.webp" alt="SambaS3 game library running on a phone" width="100%" />

</div>

> SambaS3 ships with no games, no firmware and no keys. Please don't ask for game or firmware links. Use only dumps of games and firmware you own.

## Download

| Edition | Where | Package |
|---|---|---|
| **SambaS3 Free** | [GitHub Releases](https://github.com/ZenithBlue-Dev/samba-s3/releases) (APK) | `com.zenithblue.sambas3.free` |
| **SambaS3 Pro** | [Google Play](https://play.google.com/store/apps/details?id=com.zenithblue.sambas3) | `com.zenithblue.sambas3` |

Free and Pro use different package names, so they install side by side.

To install Free, download the APK from the latest release and allow installs from unknown sources. Free does not update automatically; check the Releases page for new versions. Each release lists the APK's SHA-256 checksum.

## Free vs Pro

| Feature | Free | Pro |
|---|---|---|
| Core emulation | Yes | Yes |
| Game library | Yes | Yes |
| Firmware install | Yes | Yes |
| Bundled GPU drivers (Turnip for Adreno 6xx/7xx/8xx, PanVK rc3 for Mali) | Yes | Yes |
| GPU driver page | Yes | Yes |
| Patch manager | Yes | Yes |
| Controller overlay | Yes | Yes |
| Basic performance overlay | Yes | Yes |
| Aspect ratios 4:3 and 16:9 | Yes | Yes |
| Per-game compatibility fixes | Yes | Yes |
| Save states (save, load, continue) | No | Yes |
| Performance tuning presets and Fast Mode | No | Yes |
| Advanced performance overlay settings | No | Yes |
| Extra aspect ratios (20:9, 21:9, Native) | No | Yes |

## Features

- **Game library** with cover art, serials and per-game settings, fully navigable with a controller.
- **Bundled GPU drivers**: Mesa Turnip for Adreno and PanVK rc3 for Mali, selectable per game.
- **Controllers**: USB and Bluetooth gamepads, plus an editable on-screen touch overlay.
- **Patch manager** for game patches.
- **Performance overlay** showing FPS and frame timing.
- **Pause menu** with quick access to settings and logs while in game.
- **Settings** for emulation, graphics, audio, firmware and logging.

## Requirements

- Android 10 or newer
- An arm64-v8a device
- A Vulkan-capable GPU:
  - Adreno 6xx/7xx/8xx: bundled Mesa Turnip driver
  - Mali Valhall v9 to v13 (for example G57, G615, G925): bundled PanVK rc3 driver
  - Other GPUs: the system Vulkan driver
- PS3 firmware (`PS3UPDAT.PUP`), dumped from your own console
- Your own legally dumped games

## Getting started

1. **Install firmware.** Open settings and install `PS3UPDAT.PUP`.
2. **Import games.** Use the `+` tile to add an ISO, a PKG or a game folder.
3. **Pick a driver.** Open a game's settings and choose a GPU driver. The bundled Turnip (Adreno) or PanVK (Mali) driver is a good default; other GPUs use the system driver.
4. **Play.** Select the game in the library and start it.

If a game does not boot, check the firmware, try another GPU driver, reset that game's settings, and verify your dump. The app has a built-in log viewer.

## Screenshots

| | |
|---|---|
| <img src="website/public/screenshots/tour-home.jpg" alt="Game library" width="100%" /><br/>Game library | <img src="website/public/screenshots/tour-launcher.jpg" alt="Per-game launch settings" width="100%" /><br/>Per-game launch settings |
| <img src="website/public/screenshots/tour-gameplay.jpg" alt="In game with performance overlay" width="100%" /><br/>In game with performance overlay | <img src="website/public/screenshots/tour-menu.jpg" alt="Pause menu" width="100%" /><br/>Pause menu |
| <img src="website/public/screenshots/tour-settings.jpg" alt="Settings" width="100%" /><br/>Settings | <img src="website/public/screenshots/overlay.jpg" alt="Touch overlay editor" width="100%" /><br/>Touch overlay editor |

## Known issues

- God of War III: pressing X to skip the opening cinematic can hang.
- Performance on low-end Mali GPUs (for example G57) is limited.
- Save slots appear greyed out until firmware and PPU preparation are done.
- Compatibility varies by game. Emulation is experimental.

## Credits

- [RPCS3](https://github.com/RPCS3/rpcs3), the PS3 emulator this project builds on
- [RPCSX](https://github.com/RPCSX/rpcsx), the emulator core used by SambaS3
- [Mesa](https://www.mesa3d.org/) Turnip (Adreno) and PanVK (Mali) Vulkan drivers
- [panvk-kbase-android](https://github.com/zenithblue-oss/panvk-kbase-android), PanVK for Android Mali kernel drivers

## License

The emulator core is derived from RPCS3 and RPCSX and is licensed under the GNU General Public License v2.0 (GPL-2.0).

This repository contains this README and the project website (`website/`). It does not contain the app or emulator source code.

Source code for the GPL-licensed emulator core: coming soon.

SambaS3 is not affiliated with Sony Interactive Entertainment. "PS3" is used only to describe compatibility.
