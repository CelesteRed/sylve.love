# sylve.love

A pastel alien kawaii card website for **Sylve** — featuring bouncing emoji characters, falling petals, sparkle effects, and a dreamy video background.

## Features

- **Bouncing Emojis** — DVD screensaver-style emoji characters that bounce around the screen, wiggle, squish near your cursor, and can be grabbed and thrown
- **Chat Bubbles** — Emojis randomly say things with markdown-styled speech bubbles, with different messages when held vs idle
- **Falling Petals** — Canvas-rendered petal particles drifting across the background
- **Sparkle Hover** — Add the `sparkle-hover` class to any element for a mouse-follow particle effect
- **Celeste Emojis** — Hovering the credits spawns special Celeste emoji characters that link to [celeste.red](https://celeste.red/)
- **Responsive** — Stacks cleanly on mobile with the profile on top

## Project Structure

```
public/
  index.html          — Main HTML (card layout, video bg, footer)
  styles.css          — All styling (pastel pink/purple palette)
  assets/emojis/      — Emoji images (Semoji = Sylve, Cemoji = Celeste)
src/
  main.ts             — Entry point, boots renderers, wires UI
  bouncingEmojis.ts   — Bouncing emoji system (config, messages, physics)
  petals.ts           — Falling petal canvas renderer
```

## Setup

```bash
npm install
npm run build       # outputs public/bundle.js
```

Open `public/index.html` in a browser (or serve with any static server).

## Customization

Almost everything is controlled by clearly marked `// EDIT:` comments and config objects:

- **Emoji images** — `SYLVE_EMOJI_IMAGES` and `CELESTE_EMOJI_IMAGES` arrays in `bouncingEmojis.ts`
- **Chat messages** — `SYLVE_MESSAGES`, `SYLVE_HELD_MESSAGES`, `CELESTE_MESSAGES`, `CELESTE_HELD_MESSAGES`
- **Links** — `EMOJI_LINKS` array (random link assigned per emoji on spawn)
- **Behaviour** — `EMOJI_CONFIG` object (count, size, speed, influence radius, lifespan, throw physics, wiggle, bubble timing, etc.)
- **Colors** — CSS custom properties in `:root` (`--pink`, `--purple`, `--text`, etc.)

## License

All Rights Reserved. See [LICENSE](LICENSE) for details. All code and artwork are copyrighted — do not copy, modify, or redistribute without permission.
