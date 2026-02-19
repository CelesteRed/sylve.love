/**
 * ═══════════════════════════════════════════════════════
 *  MAIN ENTRY POINT
 *  Boots the petal renderer and wires up any small UI
 *  interactions for the card.
 * ═══════════════════════════════════════════════════════
 */

import { PetalRenderer } from "./petals";
import { EmojiBouncerRenderer, setPageState, type PageState } from "./bouncingEmojis";

// ── Boot ─────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  // Start falling petals (above blur, below card)
  const petals = new PetalRenderer("petal-canvas");
  petals.start();

  // Start bouncing emojis (in front of everything, DVD style)
  const emojis = new EmojiBouncerRenderer("emoji-bouncer");
  emojis.start();

  // Wire nav-btn active state toggling + page state
  const PAGE_STATE_MAP: Record<string, PageState> = {
    "Home": "home",
    "References": "references",
    "Lore": "lore",
    "VA Portfolio": "va-portfolio",
    "Gallery": "gallery",
    "Credits": "credits",
  };

  const navBtns = document.querySelectorAll<HTMLAnchorElement>(".nav-btn");
  const contentEl = document.querySelector<HTMLElement>(".card__profile");
  navBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      navBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const state = PAGE_STATE_MAP[btn.textContent?.trim() || ""];
      if (state) {
        setPageState(state);
        if (contentEl) contentEl.dataset.activePage = state;
      }
    });
  });

  // ── EDIT: Sparkle hover effect ──────────────────────────
  //   Add class "sparkle-hover" to any element to get this effect.
  //   Edit the emoji list below to change what sparkles appear.
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

  // ── Social icon tooltips ─────────────────────────────────
  const tooltip = document.createElement("div");
  tooltip.className = "social-tooltip";
  document.body.appendChild(tooltip);
  let tooltipHideTimer = 0;

  function showTooltip(anchor: Element, text: string) {
    clearTimeout(tooltipHideTimer);
    const rect = anchor.getBoundingClientRect();
    tooltip.textContent = text;
    tooltip.style.left = `${rect.left + rect.width / 2}px`;
    tooltip.style.top = `${rect.top - 6}px`;
    tooltip.classList.add("visible");
  }

  function hideTooltip() {
    tooltip.classList.remove("visible");
  }

  // Discord: hover shows tag, click copies to clipboard
  const discordBtn = document.querySelector<HTMLElement>('[data-social="discord"]');
  if (discordBtn) {
    const tag = discordBtn.dataset.tag || "@syluve";
    discordBtn.addEventListener("mouseenter", () => showTooltip(discordBtn, tag));
    discordBtn.addEventListener("mouseleave", () => hideTooltip());
    discordBtn.addEventListener("click", (e) => {
      e.preventDefault();
      navigator.clipboard.writeText(tag).then(() => {
        showTooltip(discordBtn, "Copied!");
        tooltipHideTimer = window.setTimeout(() => hideTooltip(), 1500);
      });
    });
  }

  // Coming soon icons (TikTok, Instagram)
  document.querySelectorAll<HTMLElement>('[data-social="coming-soon"]').forEach((btn) => {
    btn.addEventListener("mouseenter", () => showTooltip(btn, "Coming soon!"));
    btn.addEventListener("mouseleave", () => hideTooltip());
    btn.addEventListener("click", (e) => e.preventDefault());
  });

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
