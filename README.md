# PixelPerfect Image Resizer — Chrome Extension

Right-click any image on the web and resize it instantly with **[PixelPerfectResizer](https://pixelperfectresizer.com/)** — a free, browser-based image and photo resizer. Images are processed **100% client-side**: nothing is uploaded to a server.

## Features

- **Right-click to resize** — choose **"Resize with PixelPerfect"** on any image to open it in the [online image resizer](https://pixelperfectresizer.com/).
- **Quick popup** — click the toolbar icon to:
  - **Open Web Resizer** — jump straight to [pixelperfectresizer.com](https://pixelperfectresizer.com/).
  - **Quick Resize Image URL** — paste an image URL and send it to the resizer in one click.
- **Privacy first** — no tracking, no data collection, minimal permissions (`contextMenus`, `activeTab`).
- **Manifest V3** — built on Chrome's current extension platform.

## Install

### From the Chrome Web Store

_Coming soon._

### From source (developer mode)

1. Clone this repository:
   ```bash
   git clone https://github.com/ValunLabs/pixel-perfect-resizer-extension.git
   ```
2. Open `chrome://extensions` in Chrome.
3. Turn on **Developer mode** (top right).
4. Click **Load unpacked** and select the cloned folder.

## Project structure

```
├── manifest.json   # Manifest V3 config
├── background.js   # Context menu + tab opening (service worker)
├── popup.html      # Toolbar popup UI
├── popup.js        # Popup button logic
├── styles.css      # Popup styles (light + dark)
└── icons/          # 16, 32, 48, 128 px icons
```

## How it works

The extension never reads or processes images itself. It opens
`https://pixelperfectresizer.com/?imgUrl=<image URL>` in a new tab, and the site loads and resizes the image locally in your browser.

## Related tools

All free at [PixelPerfectResizer](https://pixelperfectresizer.com/):

- [Image Resizer](https://pixelperfectresizer.com/) — resize images and photos to any size
- [Bulk Image Resizer](https://pixelperfectresizer.com/bulk-resize) — resize many photos at once
- [Image Compressor](https://pixelperfectresizer.com/compress) — shrink file size without visible quality loss
- [Image Converter](https://pixelperfectresizer.com/image-converter) — convert between JPG, PNG, WebP and more
- [Crop Image](https://pixelperfectresizer.com/crop-image) — crop photos in your browser

## License

[MIT](LICENSE)
