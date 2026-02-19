/**
 * ═══════════════════════════════════════════════════════
 *  BOUNCING EMOJIS — DVD Screensaver Style
 *
 *  HOW TO EDIT:
 *  1. Drop your emoji PNGs into  public/assets/emojis/
 *  2. Add the filenames to the EMOJI_IMAGES array below.
 *  3. Tweak EMOJI_CONFIG for size, speed, count, etc.
 *  4. Add links to EMOJI_LINKS — clicking any emoji
 *     opens a random link from this list.
 *
 *  - Emojis fade in on spawn, fade out when their
 *    lifespan expires, then respawn as a new random emoji.
 *  - Wiggly sine movement layered on top of the bounce.
 *  - Mouse proximity slows them down smoothly.
 *  - Hovering pauses the lifespan timer (unless already
 *    fading out — then it's too late).
 *  - Hovered emojis get a cartoony outline + scale up.
 *  - Hold-click to grab, drag, and THROW them!
 * ═══════════════════════════════════════════════════════
 */

// ── EDIT: Sylve emoji image paths (relative to public/) ───
export const SYLVE_EMOJI_IMAGES: string[] = [
  "assets/emojis/Semoji1.png",
  "assets/emojis/Semoji2.png",
  "assets/emojis/Semoji3.png",
  "assets/emojis/Semoji4.png",
  "assets/emojis/Semoji5.png",
  "assets/emojis/Semoji6.png",
  "assets/emojis/Semoji7.png",
  "assets/emojis/Semoji8.png",
  "assets/emojis/Semoji9.png",
  "assets/emojis/Semoji10.png",
];

// ── EDIT: Celeste emoji image paths (relative to public/) ──
export const CELESTE_EMOJI_IMAGES: string[] = [
  "assets/emojis/Cemoji1.webp",
  "assets/emojis/Cemoji2.webp",
];

// ── EDIT: Random links — clicking any emoji opens one ────
export const EMOJI_LINKS: string[] = [
  "https://www.roblox.com/users/290467810/profile",
  "https://discord.gg/n6zhPBnd26",
  "https://www.youtube.com/@SylveLove",
  "https://tracker.gg/valorant/profile/riot/Hachi%23Love/overview?platform=pc&playlist=swiftplay&season=3ea2b318-423b-cf86-25da-7cbb0eefbe2d",
  "https://namemc.com/profile/luvsylve.1",
  "https://www.youtube.com/watch?v=MZTlbDgpqW8",
  "",
];

// ── EDIT: Sylve chat bubble messages ─────────────────────
//   Supports light markdown: **bold**, *italic*, ~~strike~~, `code`
export const SYLVE_MESSAGES: string[] = [
  "hewwo~!",
  "*notices you*",
  "*spike collar?*",
  "✿ so pretty ✿",
  "owo what's this?",
  "**kawaii!!**",
  "~nyaa~",
  "✧ sparkle ✧",
  "sorry~ sorry~ ...sorry~",
  "hit your shots *next time* ✧",
  "hi hi hi~",
  "take me to your leader! ╰（‵□′）╯",
];

// ── EDIT: Sylve messages when held / dragged ─────────────
export const SYLVE_HELD_MESSAGES: string[] = [
  "let me go!!",
  "hey stop that!",
  "*squeaks*",
  "unhand me!!",
  "**AAAA!!**",
  "too tight!!",
  "put me down~",
  "nuuuuu!",
];

// ── EDIT: Celeste chat bubble messages ───────────────────
export const CELESTE_MESSAGES: string[] = [
  "taking over the **world**",
  "celeste.red btw",
  "I made this~",
  "✧ *coding noises* ✧",
  "**world domination**",
  "hi from the *creator*!",
  "i love sylve so much",
  "i miss my *wife*~ ಥ_ಥ",
  "give *her* the **world**! ᕦ(ò_óˇ)ᕤ",
];

// ── EDIT: Celeste messages when held / dragged ───────────
export const CELESTE_HELD_MESSAGES: string[] = [
  "I made you!!",
  "you can't hold the creator!",
  "**bugs incoming**",
  "ctrl+z ctrl+z!!",
  "this wasn't in the code!",
  "**YOU WILL REGRET THIS!**",
  "watch where that hand is going **bud**",
  "do you know **WHO** I am?",
];

// ── EDIT: Behaviour knobs ────────────────────────────────
export const EMOJI_CONFIG = {
  /** How many emojis alive at once */
  count: 10,
  /** Rendered size in px */
  size: 64,
  /** Min / max speed (px per frame at 60fps) */
  speedMin: 1.2,
  speedMax: 2.5,
  /** Peak opacity (during the alive phase) */
  opacity: 0.85,
  /** Outer radius — slowdown starts ramping here */
  influenceRadius: 200,
  /** Inner radius — full minSlowdown inside this zone */
  deadZoneRadius: 30,
  /** Minimum speed multiplier inside the dead zone (0 = fully stopped) */
  minSlowdown: 0,

  // ── Squish & rotate (when near cursor) ────────────────
  squishRadius: 60,
  squishRotation: 12,
  squishAmount: 0.9,
  squishSpeed: 0.12,

  // ── Lifespan ──────────────────────────────────────────
  lifespanMin: 10,
  lifespanMax: 60,
  fadeInTime: 0.6,
  fadeOutTime: 4,

  // ── Hover highlight ───────────────────────────────────
  hoverRadius: 80,
  hoverScale: 1.25,
  hoverOutlineSize: 3,
  hoverOutlineColor: "rgba(255,255,255,1)",
  /** Blur radius for the outline (0 = sharp, 1-2 = soft edges) */
  hoverOutlineBlur: 1,

  // ── Throw ─────────────────────────────────────────────
  /** How much the throw velocity is multiplied (higher = yeet harder) */
  throwMultiplier: 0.4,
  /** Max throw speed cap (px/frame) */
  throwMaxSpeed: 12,
  /** Friction per frame after a throw (0.98 = slows down, 1 = never) */
  throwFriction: 0.985,
  /** Speed below which friction stops and normal bounce resumes */
  throwFrictionCutoff: 3,

  // ── Wiggle (sine overlay) ─────────────────────────────
  wiggleAmount: 2,
  wiggleSpeed: 0.02,

  // ── Chat Bubbles ────────────────────────────────────────
  /** Min seconds between random chat bubbles */
  bubbleIntervalMin: 5,
  /** Max seconds between random chat bubbles */
  bubbleIntervalMax: 15,
  /** Min seconds a bubble stays visible */
  bubbleDurationMin: 2,
  /** Max seconds a bubble stays visible */
  bubbleDurationMax: 4,
};

// ── Internal types ───────────────────────────────────────
interface BouncingEmoji {
  el: HTMLImageElement;
  x: number;
  y: number;
  vx: number;
  vy: number;
  livedTime: number;
  lifespan: number;
  lastTick: number;
  wigglePhase: number;
  wiggleClock: number;
  squishClock: number;
  link: string;
  emojiType: "sylve" | "celeste";
  dragging: boolean;
  thrown: boolean;
  // Chat bubble state
  bubbleEl: HTMLDivElement;
  bubbleTimer: number;
  bubbleShowTime: number;
  bubbleDuration: number;
  bubbleActive: boolean;
  wasDragging: boolean;
}

// ── Helpers ──────────────────────────────────────────────
function rand(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randSpeed(): number {
  const speed = rand(EMOJI_CONFIG.speedMin, EMOJI_CONFIG.speedMax);
  return Math.random() > 0.5 ? speed : -speed;
}

function clamp(v: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, v));
}

function parseMarkdown(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/~~(.+?)~~/g, "<s>$1</s>")
    .replace(/`(.+?)`/g, "<code>$1</code>")
    .replace(/__(.+?)__/g, "<u>$1</u>");
}

// ── Core class ───────────────────────────────────────────
export class EmojiBouncerRenderer {
  private container: HTMLElement;
  private emojis: BouncingEmoji[] = [];
  private running = false;
  private mouseX = -9999;
  private mouseY = -9999;
  private validSylveSrcs: string[] = [];
  private validCelesteSrcs: string[] = [];

  // Drag state
  private dragTarget: BouncingEmoji | null = null;
  private dragOffsetX = 0;
  private dragOffsetY = 0;
  private dragStartX = 0;
  private dragStartY = 0;
  private dragTrail: { x: number; y: number; t: number }[] = [];

  constructor(containerId: string) {
    const el = document.getElementById(containerId);
    if (!el) {
      throw new Error(`Container "#${containerId}" not found.`);
    }
    this.container = el;
  }

  async start(): Promise<void> {
    this.validSylveSrcs = await this.validateImages(SYLVE_EMOJI_IMAGES);
    this.validCelesteSrcs = await this.validateImages(CELESTE_EMOJI_IMAGES);
    if (this.validSylveSrcs.length === 0) {
      console.warn("[emoji-bouncer] No Sylve emoji images loaded — skipping.");
      return;
    }

    window.addEventListener("mousemove", (e) => {
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;
      this.onDragMove(e);
    });
    window.addEventListener("mouseleave", () => {
      this.mouseX = -9999;
      this.mouseY = -9999;
      this.onDragEnd();
    });
    window.addEventListener("mouseup", () => {
      this.onDragEnd();
    });

    for (let i = 0; i < EMOJI_CONFIG.count; i++) {
      this.spawnEmoji(pick(this.validSylveSrcs));
    }

    this.running = true;
    requestAnimationFrame(() => this.loop());
  }

  stop(): void {
    this.running = false;
  }

  /** Spawn an emoji with a specific image, position, and link.
   *  Use this to create emojis from outside (e.g. hover effects). */
  spawnSpecific(
    src: string, x: number, y: number,
    link: string, type: "sylve" | "celeste" = "sylve",
    message?: string,
  ): void {
    const size = EMOJI_CONFIG.size;
    const img = document.createElement("img");
    img.src = src;
    img.width = size;
    img.height = size;
    img.style.opacity = "0";
    img.draggable = false;

    const now = performance.now();

    const bubbleEl = document.createElement("div");
    bubbleEl.className = "emoji-bubble";
    bubbleEl.style.opacity = "0";

    const emoji: BouncingEmoji = {
      el: img,
      bubbleEl,
      link,
      emojiType: type,
      x: x - size / 2,
      y: y - size / 2,
      vx: randSpeed(),
      vy: randSpeed(),
      livedTime: 0,
      lifespan: rand(EMOJI_CONFIG.lifespanMin, EMOJI_CONFIG.lifespanMax) * 1000,
      lastTick: now,
      wigglePhase: rand(0, Math.PI * 2),
      wiggleClock: 0,
      squishClock: rand(0, Math.PI * 2),
      dragging: false,
      thrown: false,
      bubbleTimer: rand(EMOJI_CONFIG.bubbleIntervalMin, EMOJI_CONFIG.bubbleIntervalMax) * 1000,
      bubbleShowTime: 0,
      bubbleDuration: 0,
      bubbleActive: false,
      wasDragging: false,
    };

    if (message) {
      emoji.bubbleEl.innerHTML = parseMarkdown(message);
      emoji.bubbleEl.style.opacity = "1";
      emoji.bubbleActive = true;
      emoji.bubbleShowTime = 0;
      emoji.bubbleDuration = rand(EMOJI_CONFIG.bubbleDurationMin, EMOJI_CONFIG.bubbleDurationMax) * 1000;
    }

    img.addEventListener("mousedown", (e) => {
      this.onDragStart(e, emoji);
    });

    img.style.left = `${emoji.x}px`;
    img.style.top = `${emoji.y}px`;
    this.container.appendChild(img);
    this.container.appendChild(bubbleEl);
    this.emojis.push(emoji);
  }

  // ── Drag handlers ─────────────────────────────────────

  private onDragStart(e: MouseEvent, emoji: BouncingEmoji): void {
    e.preventDefault();
    emoji.dragging = true;
    emoji.thrown = false;
    this.dragTarget = emoji;
    this.dragOffsetX = e.clientX - emoji.x;
    this.dragOffsetY = e.clientY - emoji.y;
    this.dragStartX = e.clientX;
    this.dragStartY = e.clientY;
    this.dragTrail = [{ x: e.clientX, y: e.clientY, t: performance.now() }];
  }

  private onDragMove(e: MouseEvent): void {
    if (!this.dragTarget) return;
    const emoji = this.dragTarget;
    emoji.x = e.clientX - this.dragOffsetX;
    emoji.y = e.clientY - this.dragOffsetY;

    const now = performance.now();
    this.dragTrail.push({ x: e.clientX, y: e.clientY, t: now });
    while (this.dragTrail.length > 1 && now - this.dragTrail[0].t > 80) {
      this.dragTrail.shift();
    }
  }

  private onDragEnd(): void {
    if (!this.dragTarget) return;
    const emoji = this.dragTarget;
    emoji.dragging = false;

    // Calculate throw velocity from mouse trail
    if (this.dragTrail.length >= 2) {
      const first = this.dragTrail[0];
      const last = this.dragTrail[this.dragTrail.length - 1];
      const dt = last.t - first.t;
      if (dt > 0) {
        const rawVx = (last.x - first.x) / dt;
        const rawVy = (last.y - first.y) / dt;
        const mult = EMOJI_CONFIG.throwMultiplier;
        const cap = EMOJI_CONFIG.throwMaxSpeed;
        emoji.vx = clamp(rawVx * 16 * mult, -cap, cap);
        emoji.vy = clamp(rawVy * 16 * mult, -cap, cap);
        emoji.thrown = true;
      }
    }

    // Only open link if barely moved (click, not throw)
    const movedDist = Math.sqrt(
      (this.mouseX - this.dragStartX) ** 2 +
      (this.mouseY - this.dragStartY) ** 2
    );
    if (movedDist < 5 && emoji.link) {
      window.open(emoji.link, "_blank", "noopener");
    }

    this.dragTarget = null;
    this.dragTrail = [];
  }

  // ── Private ──────────────────────────────────────────

  private async validateImages(paths: string[]): Promise<string[]> {
    const valid: string[] = [];
    for (const src of paths) {
      const ok = await this.probe(src);
      if (ok) valid.push(src);
      else console.warn(`[emoji-bouncer] Could not load "${src}" — skipping.`);
    }
    return valid;
  }

  private probe(src: string): Promise<boolean> {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
      img.src = src;
    });
  }

  private spawnEmoji(src: string): void {
    const size = EMOJI_CONFIG.size;
    const img = document.createElement("img");
    img.src = src;
    img.width = size;
    img.height = size;
    img.style.opacity = "0";
    img.draggable = false;

    const maxX = window.innerWidth - size;
    const maxY = window.innerHeight - size;
    const now = performance.now();

    // Create chat bubble element
    const bubbleEl = document.createElement("div");
    bubbleEl.className = "emoji-bubble";
    bubbleEl.style.opacity = "0";

    const emoji: BouncingEmoji = {
      el: img,
      bubbleEl,
      link: EMOJI_LINKS.length > 0 ? pick(EMOJI_LINKS) : "",
      emojiType: "sylve",
      x: rand(0, Math.max(maxX, 1)),
      y: rand(0, Math.max(maxY, 1)),
      vx: randSpeed(),
      vy: randSpeed(),
      livedTime: 0,
      lifespan: rand(EMOJI_CONFIG.lifespanMin, EMOJI_CONFIG.lifespanMax) * 1000,
      lastTick: now,
      wigglePhase: rand(0, Math.PI * 2),
      wiggleClock: 0,
      squishClock: rand(0, Math.PI * 2),
      dragging: false,
      thrown: false,
      bubbleTimer: rand(EMOJI_CONFIG.bubbleIntervalMin, EMOJI_CONFIG.bubbleIntervalMax) * 1000,
      bubbleShowTime: 0,
      bubbleDuration: 0,
      bubbleActive: false,
      wasDragging: false,
    };

    img.addEventListener("mousedown", (e) => {
      this.onDragStart(e, emoji);
    });

    img.style.left = `${emoji.x}px`;
    img.style.top = `${emoji.y}px`;
    this.container.appendChild(img);
    this.container.appendChild(bubbleEl);
    this.emojis.push(emoji);
  }

  private respawn(index: number): void {
    const old = this.emojis[index];
    old.el.remove();
    old.bubbleEl.remove();
    this.emojis.splice(index, 1);
    this.spawnEmoji(pick(this.validSylveSrcs));
  }

  private loop(): void {
    if (!this.running) return;

    const now = performance.now();
    const w = window.innerWidth;
    const h = window.innerHeight;
    const size = EMOJI_CONFIG.size;
    const fadeInMs = EMOJI_CONFIG.fadeInTime * 1000;
    const fadeOutMs = EMOJI_CONFIG.fadeOutTime * 1000;

    for (let i = this.emojis.length - 1; i >= 0; i--) {
      const e = this.emojis[i];
      const dt = now - e.lastTick;
      e.lastTick = now;

      // ── If being dragged, skip normal movement ────────
      if (e.dragging) {
        e.el.style.left = `${e.x}px`;
        e.el.style.top = `${e.y}px`;
        e.el.style.opacity = String(EMOJI_CONFIG.opacity);
        const d = EMOJI_CONFIG.hoverOutlineSize;
        const c = EMOJI_CONFIG.hoverOutlineColor;
        const b = EMOJI_CONFIG.hoverOutlineBlur;
        e.el.style.filter = [
          `drop-shadow(${d}px 0 ${b}px ${c})`,   `drop-shadow(${-d}px 0 ${b}px ${c})`,
          `drop-shadow(0 ${d}px ${b}px ${c})`,    `drop-shadow(0 ${-d}px ${b}px ${c})`,
          `drop-shadow(${d}px ${d}px ${b}px ${c})`,  `drop-shadow(${-d}px ${d}px ${b}px ${c})`,
          `drop-shadow(${d}px ${-d}px ${b}px ${c})`, `drop-shadow(${-d}px ${-d}px ${b}px ${c})`,
        ].join(" ");
        e.el.style.transform = `scale(${EMOJI_CONFIG.hoverScale})`;

        // ── Held chat bubble ────────────────────────────
        const heldMsgs = e.emojiType === "celeste" ? CELESTE_HELD_MESSAGES : SYLVE_HELD_MESSAGES;
        if (!e.wasDragging && heldMsgs.length > 0) {
          e.bubbleEl.innerHTML = parseMarkdown(pick(heldMsgs));
          e.bubbleEl.style.opacity = "1";
          e.bubbleActive = true;
          e.bubbleShowTime = 0;
          e.bubbleDuration = rand(EMOJI_CONFIG.bubbleDurationMin, EMOJI_CONFIG.bubbleDurationMax) * 1000;
        } else if (e.bubbleActive) {
          e.bubbleShowTime += dt;
          if (e.bubbleShowTime >= e.bubbleDuration && heldMsgs.length > 0) {
            e.bubbleEl.innerHTML = parseMarkdown(pick(heldMsgs));
            e.bubbleShowTime = 0;
            e.bubbleDuration = rand(EMOJI_CONFIG.bubbleDurationMin, EMOJI_CONFIG.bubbleDurationMax) * 1000;
          }
        }
        e.wasDragging = true;

        // Position bubble above dragged emoji
        e.bubbleEl.style.left = `${e.x + size / 2}px`;
        e.bubbleEl.style.top = `${e.y - 8}px`;
        continue;
      }

      // ── Throw friction ────────────────────────────────
      if (e.thrown) {
        e.vx *= EMOJI_CONFIG.throwFriction;
        e.vy *= EMOJI_CONFIG.throwFriction;
        const spd = Math.sqrt(e.vx * e.vx + e.vy * e.vy);
        if (spd < EMOJI_CONFIG.throwFrictionCutoff) {
          e.thrown = false;
          const angle = Math.atan2(e.vy, e.vx);
          const newSpd = rand(EMOJI_CONFIG.speedMin, EMOJI_CONFIG.speedMax);
          e.vx = Math.cos(angle) * newSpd;
          e.vy = Math.sin(angle) * newSpd;
        }
      }

      // ── Mouse proximity ─────────────────────────────
      const cx = e.x + size / 2;
      const cy = e.y + size / 2;
      const dx = cx - this.mouseX;
      const dy = cy - this.mouseY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      const outer = EMOJI_CONFIG.influenceRadius;
      const inner = EMOJI_CONFIG.deadZoneRadius;
      let speed: number;

      if (e.thrown) {
        speed = 1;
      } else if (dist <= inner) {
        speed = EMOJI_CONFIG.minSlowdown;
      } else if (dist >= outer) {
        speed = 1;
      } else {
        const t = (dist - inner) / (outer - inner);
        speed = EMOJI_CONFIG.minSlowdown + t * (1 - EMOJI_CONFIG.minSlowdown);
      }

      const isHovered = dist < outer;

      // ── Lifespan timer ────────────────────────────────
      const fadeOutStart = e.lifespan - fadeOutMs;
      const isFadingOut = e.livedTime >= fadeOutStart;

      if (isFadingOut || !isHovered) {
        e.livedTime += dt;
      }

      if (e.livedTime >= e.lifespan) {
        this.respawn(i);
        continue;
      }

      // ── Fade opacity ──────────────────────────────────
      let opacity = EMOJI_CONFIG.opacity;
      if (e.livedTime < fadeInMs) {
        opacity = EMOJI_CONFIG.opacity * (e.livedTime / fadeInMs);
      } else if (e.livedTime >= fadeOutStart) {
        const remaining = e.lifespan - e.livedTime;
        opacity = EMOJI_CONFIG.opacity * (remaining / fadeOutMs);
      }

      // ── Hover highlight (cartoony outline + scale) ─────
      const hoverR = EMOJI_CONFIG.hoverRadius;
      const hoverProximity = dist < hoverR ? 1 - (dist / hoverR) : 0;
      const hoverScaleVal = 1 + (EMOJI_CONFIG.hoverScale - 1) * hoverProximity;
      const outlineT = EMOJI_CONFIG.hoverOutlineSize * hoverProximity;
      const color = EMOJI_CONFIG.hoverOutlineColor;

      let filterStr = "";
      if (outlineT > 0.2) {
        const d = outlineT;
        const blur = EMOJI_CONFIG.hoverOutlineBlur * hoverProximity;
        filterStr = [
          `drop-shadow(${d}px 0 ${blur}px ${color})`,   `drop-shadow(${-d}px 0 ${blur}px ${color})`,
          `drop-shadow(0 ${d}px ${blur}px ${color})`,    `drop-shadow(0 ${-d}px ${blur}px ${color})`,
          `drop-shadow(${d}px ${d}px ${blur}px ${color})`,  `drop-shadow(${-d}px ${d}px ${blur}px ${color})`,
          `drop-shadow(${d}px ${-d}px ${blur}px ${color})`, `drop-shadow(${-d}px ${-d}px ${blur}px ${color})`,
        ].join(" ");
      }

      e.el.style.opacity = String(Math.max(0, opacity));
      e.el.style.filter = filterStr;

      // ── Wiggle ────────────────────────────────────────
      e.wiggleClock += speed;
      const wiggleOffset = Math.sin(e.wigglePhase + e.wiggleClock * EMOJI_CONFIG.wiggleSpeed)
                         * EMOJI_CONFIG.wiggleAmount * speed;

      // ── Squish & rotate ───────────────────────────────
      const squishR = EMOJI_CONFIG.squishRadius;
      const squishProximity = dist < squishR ? 1 - (dist / squishR) : 0;

      e.squishClock += EMOJI_CONFIG.squishSpeed;
      const squishWave = Math.sin(e.squishClock);
      const rotation = squishWave * EMOJI_CONFIG.squishRotation * squishProximity;
      const scaleX = (1 - (1 - EMOJI_CONFIG.squishAmount) * squishProximity * Math.abs(squishWave)) * hoverScaleVal;
      const scaleY = (1 + (1 - EMOJI_CONFIG.squishAmount) * squishProximity * Math.abs(squishWave) * 0.5) * hoverScaleVal;
      e.el.style.transform = `rotate(${rotation}deg) scaleX(${scaleX}) scaleY(${scaleY})`;

      // ── Movement ──────────────────────────────────────
      if (e.thrown) {
        e.x += e.vx;
        e.y += e.vy;
      } else {
        e.x += e.vx * speed + wiggleOffset;
        e.y += e.vy * speed;
      }

      // Bounce off edges
      if (e.x + size >= w) {
        e.x = w - size;
        e.vx = -Math.abs(e.vx);
      } else if (e.x <= 0) {
        e.x = 0;
        e.vx = Math.abs(e.vx);
      }
      if (e.y + size >= h) {
        e.y = h - size;
        e.vy = -Math.abs(e.vy);
      } else if (e.y <= 0) {
        e.y = 0;
        e.vy = Math.abs(e.vy);
      }

      e.el.style.left = `${e.x}px`;
      e.el.style.top = `${e.y}px`;

      // ── Chat bubble (idle state) ───────────────────────
      if (e.wasDragging) {
        // Just released from drag
        e.wasDragging = false;
        e.bubbleEl.style.opacity = "0";
        e.bubbleActive = false;
        e.bubbleTimer = rand(EMOJI_CONFIG.bubbleIntervalMin, EMOJI_CONFIG.bubbleIntervalMax) * 1000;
      }

      if (e.bubbleActive) {
        e.bubbleShowTime += dt;
        if (e.bubbleShowTime >= e.bubbleDuration) {
          e.bubbleEl.style.opacity = "0";
          e.bubbleActive = false;
          e.bubbleTimer = rand(EMOJI_CONFIG.bubbleIntervalMin, EMOJI_CONFIG.bubbleIntervalMax) * 1000;
        }
      } else {
        e.bubbleTimer -= dt;
        const idleMsgs = e.emojiType === "celeste" ? CELESTE_MESSAGES : SYLVE_MESSAGES;
        if (e.bubbleTimer <= 0 && idleMsgs.length > 0) {
          e.bubbleEl.innerHTML = parseMarkdown(pick(idleMsgs));
          e.bubbleEl.style.opacity = "1";
          e.bubbleActive = true;
          e.bubbleShowTime = 0;
          e.bubbleDuration = rand(EMOJI_CONFIG.bubbleDurationMin, EMOJI_CONFIG.bubbleDurationMax) * 1000;
        }
      }

      // Position bubble above emoji
      e.bubbleEl.style.left = `${e.x + size / 2}px`;
      e.bubbleEl.style.top = `${e.y - 8}px`;
    }

    requestAnimationFrame(() => this.loop());
  }
}
