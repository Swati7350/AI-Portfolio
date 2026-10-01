# assets/

Place project screenshot images here.

## Naming convention

Name each image to match the `"image"` field in `projects.json`:

| projects.json entry         | File to place here              |
|-----------------------------|---------------------------------|
| `"assets/document-ai.png"` | `assets/document-ai.png`       |
| `"assets/crm-automation.png"` | `assets/crm-automation.png` |
| `"assets/ai-assistant.png"` | `assets/ai-assistant.png`     |

## Recommended specs

- **Format:** PNG or WebP (WebP is smaller and loads faster)
- **Size:** 1280 × 720 px (16:9 ratio matches the card aspect ratio)
- **Max file size:** ~300 KB per image — compress with [Squoosh](https://squoosh.app) or [TinyPNG](https://tinypng.com)

## What happens without an image?

If the `"image"` field is empty (`""`) or the file is missing, the card
automatically shows a subtle placeholder graphic. No broken-image icons.

## Adding a new project

1. Drop the screenshot here.
2. Add a new entry to `../projects.json` — that's all you need to do.
