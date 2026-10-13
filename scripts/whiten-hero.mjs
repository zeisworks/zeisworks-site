#!/usr/bin/env node
// Prep for src/assets/hero-flow.png (Higgsfield line-art render, 2026-10-12).
// Makes the render's paper ground transparent so the line art sits on the page background.
// Usage: node scripts/whiten-hero.mjs <in.png> <out.png>
import sharp from 'sharp';
const [,, inPath, outPath] = process.argv;
const { data, info } = await sharp(inPath).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
let n = 0;
for (let i = 0; i < data.length; i += 4) {
  const r = data[i], g = data[i+1], b = data[i+2];
  const mx = Math.max(r, g, b), mn = Math.min(r, g, b);
  // paper: bright and low-saturation; ink lines and the red tab stay untouched
  if (mn > 222 && (mx - mn) < 22) { data[i+3] = 0; n++; }
  else if (mn > 200 && (mx - mn) < 22) { data[i+3] = Math.round(255 * (222 - mn) / 22); } // soften the edge of anti-aliased strokes
}
// Trim the empty margin, then add a small even border so strokes never touch the edge.
await sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } })
  .trim({ threshold: 1 })
  .extend({ top: 24, bottom: 24, left: 24, right: 24, background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png({ compressionLevel: 9 })
  .toFile(outPath);
console.log(`cleared ${n} of ${info.width * info.height} px -> ${outPath}`);
