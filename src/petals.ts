/**
 * ═══════════════════════════════════════════════════════
 *  FALLING PETALS SYSTEM
 *
 *  HOW TO EDIT:
 *  1. Drop your PNG images into  public/assets/petals/
 *  2. Add the filenames to the PETAL_IMAGES array below.
 *  3. Tweak the CONFIG values to change density, speed,
 *     size, drift, rotation, etc.
 *  That's it — the script picks a random petal PNG each
 *  time it spawns a new particle.
 * ═══════════════════════════════════════════════════════
 */

// ── EDIT: Petal image paths (relative to public/) ────────
// Add as many as you like — each falling petal randomly
// picks one from this list.
export const PETAL_IMAGES: string[] = [
  "assets/images/ufo1.png",
  "assets/images/ufo2.png",
];

// ── EDIT: Behaviour knobs ────────────────────────────────
export const CONFIG = {
  /** Max petals alive at once */
  maxPetals: 35,
  /** New petal every N ms */
  spawnInterval: 320,
  /** Min / max fall speed (px / frame) */
  speedMin: 0.6,
  speedMax: 1.8,
  /** Horizontal drift amplitude (px) — gentle sway */
  driftAmount: 40,
  /** How fast the sway oscillates */
  driftSpeed: 0.008,
  /** Min / max rendered size (px) */
  sizeMin: 18,
  sizeMax: 42,
  /** Rotation speed range (radians / frame) */
  rotateMin: -0.02,
  rotateMax: 0.02,
  /** Opacity range */
  opacityMin: 0.55,
  opacityMax: 0.95,
};

// ── Internal types ───────────────────────────────────────
interface Petal {
  x: number;
  y: number;
  size: number;
  speed: number;
  drift: number;
  driftPhase: number;
  driftSpeed: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
  img: HTMLImageElement;
}

// ── Helpers ──────────────────────────────────────────────
function rand(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

// ── Core class ───────────────────────────────────────────
export class PetalRenderer {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private petals: Petal[] = [];
  private images: HTMLImageElement[] = [];
  private spawnTimer = 0;
  private running = false;
  private lastTime = 0;

  // Adaptive performance
  private frameTimes: number[] = [];
  private fpsCheckTimer = 0;
  private targetMaxPetals = CONFIG.maxPetals;

  constructor(canvasId: string) {
    const el = document.getElementById(canvasId);
    if (!el || !(el instanceof HTMLCanvasElement)) {
      throw new Error(`Canvas element "#${canvasId}" not found.`);
    }
    this.canvas = el;
    this.ctx = el.getContext("2d")!;
    this.resize();
    window.addEventListener("resize", () => this.resize());
  }

  /** Preload all images, then start the animation loop. */
  async start(): Promise<void> {
    this.images = await this.loadImages(PETAL_IMAGES);
    if (this.images.length === 0) {
      console.warn("[petals] No petal images loaded — drawing circles as fallback.");
    }
    this.running = true;
    this.lastTime = performance.now();
    requestAnimationFrame((t) => this.loop(t));
  }

  stop(): void {
    this.running = false;
  }

  // ── Private ──────────────────────────────────────────

  private resize(): void {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  private async loadImages(paths: string[]): Promise<HTMLImageElement[]> {
    const loaded: HTMLImageElement[] = [];
    for (const src of paths) {
      try {
        const img = await this.loadImage(src);
        loaded.push(img);
      } catch {
        console.warn(`[petals] Could not load "${src}" — skipping.`);
      }
    }
    return loaded;
  }

  private loadImage(src: string): Promise<HTMLImageElement> {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = src;
    });
  }

  private spawn(): void {
    if (this.petals.length >= this.targetMaxPetals) return;

    const size = rand(CONFIG.sizeMin, CONFIG.sizeMax);
    const petal: Petal = {
      x: rand(-size, this.canvas.width + size),
      y: -size - rand(0, 40),
      size,
      speed: rand(CONFIG.speedMin, CONFIG.speedMax),
      drift: rand(-CONFIG.driftAmount, CONFIG.driftAmount),
      driftPhase: rand(0, Math.PI * 2),
      driftSpeed: rand(CONFIG.driftSpeed * 0.6, CONFIG.driftSpeed * 1.4),
      rotation: rand(0, Math.PI * 2),
      rotationSpeed: rand(CONFIG.rotateMin, CONFIG.rotateMax),
      opacity: rand(CONFIG.opacityMin, CONFIG.opacityMax),
      img: this.images.length > 0 ? pick(this.images) : new Image(),
    };
    this.petals.push(petal);
  }

  private loop(time: number): void {
    if (!this.running) return;

    const delta = time - this.lastTime;
    this.lastTime = time;

    // ── Adaptive FPS tracking ──────────────────────────
    if (delta > 0 && delta < 500) {
      this.frameTimes.push(delta);
      if (this.frameTimes.length > 60) this.frameTimes.shift();

      this.fpsCheckTimer += delta;
      if (this.fpsCheckTimer >= 2000) {
        this.fpsCheckTimer = 0;
        const avgDelta = this.frameTimes.reduce((a, b) => a + b, 0) / this.frameTimes.length;
        const avgFps = 1000 / avgDelta;

        if (avgFps < 20 && this.targetMaxPetals > 5) {
          this.targetMaxPetals = Math.max(5, this.targetMaxPetals - 8);
        } else if (avgFps < 30 && this.targetMaxPetals > 5) {
          this.targetMaxPetals = Math.max(5, this.targetMaxPetals - 3);
        } else if (avgFps > 45 && this.targetMaxPetals < CONFIG.maxPetals) {
          this.targetMaxPetals = Math.min(CONFIG.maxPetals, this.targetMaxPetals + 2);
        }
      }
    }

    // Spawn logic
    this.spawnTimer += delta;
    if (this.spawnTimer >= CONFIG.spawnInterval) {
      this.spawnTimer -= CONFIG.spawnInterval;
      this.spawn();
    }

    // Clear
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // Update & draw
    for (let i = this.petals.length - 1; i >= 0; i--) {
      const p = this.petals[i];

      // Physics
      p.y += p.speed;
      p.driftPhase += p.driftSpeed;
      p.x += Math.sin(p.driftPhase) * (p.drift * 0.015);
      p.rotation += p.rotationSpeed;

      // Remove if off-screen
      if (p.y > this.canvas.height + p.size + 20) {
        this.petals.splice(i, 1);
        continue;
      }

      // Draw
      this.ctx.save();
      this.ctx.globalAlpha = p.opacity;
      this.ctx.translate(p.x, p.y);
      this.ctx.rotate(p.rotation);

      if (this.images.length > 0 && p.img.complete && p.img.naturalWidth > 0) {
        this.ctx.drawImage(p.img, -p.size / 2, -p.size / 2, p.size, p.size);
      } else {
        // Fallback: draw a pastel circle petal
        this.ctx.beginPath();
        this.ctx.ellipse(0, 0, p.size / 2, p.size / 3, 0, 0, Math.PI * 2);
        this.ctx.fillStyle = `hsla(${rand(300, 340)}, 70%, 82%, ${p.opacity})`;
        this.ctx.fill();
      }

      this.ctx.restore();
    }

    requestAnimationFrame((t) => this.loop(t));
  }
}
