import { mkdir, readFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const outputDir = path.join(root, "public", "obs");
const logoPath = path.join(root, "public", "logo-mark.png");

const width = 1920;
const height = 1080;

const brand = {
  background: "#07111f",
  foreground: "#f4f8ff",
  muted: "#aebbd0",
  blue: "#0060c0",
  surface: "#0a203a",
  surfaceRaised: "#0f2b4d",
  yellow: "#f4c542",
};

function svgShell(content) {
  return `
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <defs>
    <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
      <path d="M 32 0 L 0 0 0 32" fill="none" stroke="${brand.blue}" stroke-opacity="0.18" stroke-width="1"/>
    </pattern>
    <filter id="softShadow" x="-20%" y="-80%" width="140%" height="260%">
      <feDropShadow dx="0" dy="-10" stdDeviation="12" flood-color="#000000" flood-opacity="0.38"/>
    </filter>
    <filter id="cardShadow" x="-20%" y="-20%" width="140%" height="160%">
      <feDropShadow dx="0" dy="14" stdDeviation="18" flood-color="#000000" flood-opacity="0.36"/>
    </filter>
  </defs>
  ${content}
</svg>`;
}

function pixelGrid({ x, y, size = 8, gap = 7 }) {
  const cells = Array.from({ length: 12 }, (_, index) => {
    const col = index % 4;
    const row = Math.floor(index / 4);
    const fill = index % 5 === 0 ? brand.yellow : brand.surfaceRaised;

    return `<rect x="${x + col * (size + gap)}" y="${y + row * (size + gap)}" width="${size}" height="${size}" fill="${fill}"/>`;
  });

  return `<g opacity="0.92">${cells.join("")}</g>`;
}

function taskbarMaskSvg({ logoHref, barHeight }) {
  const barTop = height - barHeight;
  const logoSize = barHeight >= 64 ? 36 : 28;
  const logoBox = barHeight >= 64 ? 42 : 34;
  const logoY = barTop + Math.round((barHeight - logoBox) / 2);
  const textY = barTop + Math.round(barHeight / 2) + 6;
  const siteY = textY;

  return svgShell(`
  <g filter="url(#softShadow)">
    <rect x="0" y="${barTop}" width="${width}" height="${barHeight}" fill="${brand.background}"/>
    <rect x="0" y="${barTop}" width="${width}" height="${barHeight}" fill="url(#grid)" opacity="0.62"/>
    <rect x="0" y="${barTop - 7}" width="${width}" height="4" fill="${brand.blue}" opacity="0.88"/>
    <rect x="0" y="${barTop - 3}" width="${width}" height="3" fill="${brand.yellow}"/>
    <rect x="0" y="${barTop}" width="6" height="${barHeight}" fill="${brand.yellow}"/>
    <rect x="${width - 6}" y="${barTop}" width="6" height="${barHeight}" fill="${brand.blue}"/>
  </g>

  <rect x="24" y="${logoY}" width="${logoBox}" height="${logoBox}" rx="5" fill="${brand.surface}" stroke="${brand.yellow}" stroke-opacity="0.5"/>
  <image href="${logoHref}" x="${24 + Math.round((logoBox - logoSize) / 2)}" y="${logoY + Math.round((logoBox - logoSize) / 2)}" width="${logoSize}" height="${logoSize}" preserveAspectRatio="xMidYMid meet"/>
  <text x="${24 + logoBox + 16}" y="${textY}" fill="${brand.foreground}" font-family="Arial, sans-serif" font-size="${barHeight >= 64 ? 20 : 17}" font-weight="700">Game Dev Glory</text>
  <text x="${width - 28}" y="${siteY}" text-anchor="end" fill="${brand.muted}" font-family="Arial, sans-serif" font-size="${barHeight >= 64 ? 18 : 15}" font-weight="700">gamedevglory.com</text>`);
}

function lowerThirdSvg({ logoHref }) {
  return svgShell(`
  <g filter="url(#cardShadow)">
    <rect x="40" y="846" width="1040" height="150" rx="8" fill="${brand.background}"/>
    <rect x="40" y="846" width="1040" height="150" rx="8" fill="url(#grid)" opacity="0.7"/>
    <rect x="40" y="846" width="8" height="150" fill="${brand.yellow}"/>
    <rect x="48" y="846" width="1032" height="4" fill="${brand.blue}"/>
    <rect x="48" y="850" width="1032" height="4" fill="${brand.yellow}"/>
  </g>

  <rect x="76" y="882" width="76" height="76" rx="7" fill="${brand.surface}" stroke="${brand.yellow}" stroke-opacity="0.58"/>
  <rect x="81" y="887" width="76" height="76" rx="7" fill="none" stroke="${brand.blue}" stroke-width="5"/>
  <image href="${logoHref}" x="88" y="894" width="52" height="52" preserveAspectRatio="xMidYMid meet"/>

  <text x="184" y="904" fill="${brand.yellow}" font-family="Arial, sans-serif" font-size="16" font-weight="700" letter-spacing="2.6">GAME PROGRAMMING FUNDAMENTALS</text>
  <text x="184" y="950" fill="${brand.foreground}" font-family="Arial, sans-serif" font-size="42" font-weight="700">Game Dev Glory</text>
  <text x="184" y="975" fill="${brand.muted}" font-family="Arial, sans-serif" font-size="18" font-weight="700">Portfolio-first game programming coaching</text>

  ${pixelGrid({ x: 960, y: 896, size: 9, gap: 8 })}`);
}

function cornerBugSvg({ logoHref }) {
  return svgShell(`
  <g filter="url(#cardShadow)">
    <rect x="1716" y="28" width="168" height="56" rx="8" fill="${brand.background}"/>
    <rect x="1716" y="28" width="168" height="3" fill="${brand.yellow}"/>
    <rect x="1716" y="31" width="168" height="3" fill="${brand.blue}"/>
  </g>
  <image href="${logoHref}" x="1730" y="38" width="36" height="36" preserveAspectRatio="xMidYMid meet"/>
  <text x="1776" y="62" fill="${brand.foreground}" font-family="Arial, sans-serif" font-size="16" font-weight="700">Game Dev Glory</text>`);
}

const assets = [
  {
    filename: "taskbar-mask-64px-1920x1080.png",
    render: ({ logoHref }) => taskbarMaskSvg({ logoHref, barHeight: 64 }),
  },
  {
    filename: "taskbar-mask-48px-1920x1080.png",
    render: ({ logoHref }) => taskbarMaskSvg({ logoHref, barHeight: 48 }),
  },
  {
    filename: "lower-third-title-1920x1080.png",
    render: ({ logoHref }) => lowerThirdSvg({ logoHref }),
  },
  {
    filename: "corner-logo-bug-1920x1080.png",
    render: ({ logoHref }) => cornerBugSvg({ logoHref }),
  },
];

await mkdir(outputDir, { recursive: true });

const logo = await readFile(logoPath);
const logoHref = `data:image/png;base64,${logo.toString("base64")}`;

for (const asset of assets) {
  const outputPath = path.join(outputDir, asset.filename);

  await sharp(Buffer.from(asset.render({ logoHref }))).png().toFile(outputPath);
  console.log(`Wrote ${path.relative(root, outputPath)}`);
}
