/**
 * ═══════════════════════════════════════════════════════
 *  MAIN ENTRY POINT
 *  Boots the petal renderer and wires up any small UI
 *  interactions for the card.
 * ═══════════════════════════════════════════════════════
 */

import { PetalRenderer } from "./petals";
import { EmojiBouncerRenderer } from "./bouncingEmojis";

// ── Boot ─────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  // Start falling petals (above blur, below card)
  const petals = new PetalRenderer("petal-canvas");
  petals.start();

  // Start bouncing emojis (in front of everything, DVD style)
  const emojis = new EmojiBouncerRenderer("emoji-bouncer");
  emojis.start();

  // Wire nav-btn active state toggling
  const navBtns = document.querySelectorAll<HTMLAnchorElement>(".nav-btn");
  navBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      navBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
    });
  });

  // ── Credits: Celeste name hover → floating sparkle emojis ──
  const creditsName = document.getElementById("credits-name");
  const particleBox = document.getElementById("celeste-particles");
  if (creditsName && particleBox) {
    const sparkles = ["✧", "★", "💜", "💖", "✨", "☆", "⋆", "♡"];

    creditsName.addEventListener("mousemove", (ev) => {
      if (Math.random() > 0.35) return;
      const span = document.createElement("span");
      span.className = "celeste-particle";
      span.textContent = sparkles[Math.floor(Math.random() * sparkles.length)];
      span.style.left = `${ev.clientX + (Math.random() - 0.5) * 30}px`;
      span.style.top = `${ev.clientY}px`;
      span.style.setProperty("--drift", `${(Math.random() - 0.5) * 60}px`);
      span.style.setProperty("--spin", `${(Math.random() - 0.5) * 180}deg`);
      span.addEventListener("click", () => {
        window.open("https://celeste.red/", "_blank", "noopener");
      });
      particleBox.appendChild(span);
      setTimeout(() => span.remove(), 2000);
    });
  }
});
