/**
 * ═══════════════════════════════════════════════════════
 *  404 PAGE ENTRY POINT
 *  Sets the page state to "404" and spawns a single
 *  confused Semoji4 bouncing emoji.
 * ═══════════════════════════════════════════════════════
 */

import { PetalRenderer } from "./petals";
import { EmojiBouncerRenderer, setPageState, EMOJI_CONFIG } from "./bouncingEmojis";

document.addEventListener("DOMContentLoaded", () => {
  // Set page state BEFORE starting emojis
  setPageState("404");

  // Override config for 404: just 1 lonely emoji
  EMOJI_CONFIG.count = 1;

  // Start falling petals
  const petals = new PetalRenderer("petal-canvas");
  petals.start();

  // Start bouncing emojis (will spawn 1 Semoji4)
  const emojis = new EmojiBouncerRenderer("emoji-bouncer", {
    forceSrc: "assets/emojis/Semoji4.png",
  });
  emojis.start();

  // ── Sparkle hover effect ──────────────────────────
  const SPARKLE_EMOJIS = ["✧", "★", "💜", "💖", "✨", "☆", "⋆", "♡"];

  const particleBox = document.getElementById("celeste-particles");
  if (particleBox) {
    document.querySelectorAll(".sparkle-hover").forEach((el) => {
      el.addEventListener("mousemove", (ev) => {
        if (Math.random() > 0.35) return;
        const me = ev as MouseEvent;
        const span = document.createElement("span");
        span.className = "celeste-particle";
        span.textContent = SPARKLE_EMOJIS[Math.floor(Math.random() * SPARKLE_EMOJIS.length)];
        span.style.left = `${me.clientX + (Math.random() - 0.5) * 30}px`;
        span.style.top = `${me.clientY}px`;
        span.style.setProperty("--drift", `${(Math.random() - 0.5) * 60}px`);
        span.style.setProperty("--spin", `${(Math.random() - 0.5) * 180}deg`);
        particleBox.appendChild(span);
        setTimeout(() => span.remove(), 2000);
      });
    });
  }

  // ── Credits: hovering Celeste name → spawns Celeste bouncing emojis ──
  const creditsName = document.getElementById("credits-name");
  if (creditsName) {
    let lastCelesteSpawn = 0;
    creditsName.addEventListener("mousemove", (ev) => {
      const now = Date.now();
      if (now - lastCelesteSpawn < 800) return;
      lastCelesteSpawn = now;
      const message = Math.random() < 0.1 ? "Taking over the world" : undefined;
      emojis.spawnSpecific(
        "assets/emojis/Cemoji1.webp",
        ev.clientX, ev.clientY,
        "https://celeste.red/",
        "celeste",
        message,
      );
    });
  }
});
