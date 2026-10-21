import type { WadaColor, WadaCombination } from '../data/wadaData';
import { COLOR_BY_SLUG } from '../data/wadaData';

export type CopyFormat = 'HEX' | 'HEX_NO_HASH' | 'RGB' | 'CMYK' | 'HSL' | 'CSS' | 'TAILWIND' | 'JSON';

export function formatColorValue(color: WadaColor, format: CopyFormat): string {
  switch (format) {
    case 'HEX':
      return color.hex.toUpperCase();
    case 'HEX_NO_HASH':
      return color.hex.replace('#', '').toUpperCase();
    case 'RGB':
      return `rgb(${color.rgb[0]}, ${color.rgb[1]}, ${color.rgb[2]})`;
    case 'CMYK':
      return `cmyk(${color.cmyk[0]}%, ${color.cmyk[1]}%, ${color.cmyk[2]}%, ${color.cmyk[3]}%)`;
    case 'HSL':
      return `hsl(${color.hsl[0]}, ${color.hsl[1]}%, ${color.hsl[2]}%)`;
    case 'CSS':
      return `--wada-${color.slug.replace(/[^a-z0-9-]/g, '-')}: ${color.hex.toUpperCase()};`;
    case 'TAILWIND':
      return `'${color.slug.replace(/[^a-z0-9-]/g, '-')}': '${color.hex.toUpperCase()}'`;
    case 'JSON':
      return JSON.stringify({
        name: color.name,
        ja: color.ja,
        romaji: color.romaji,
        hex: color.hex.toUpperCase(),
        rgb: color.rgb,
        cmyk: color.cmyk
      });
  }
}

export function formatCombinationExport(combo: WadaCombination, format: CopyFormat): string {
  const colors = combo.colors.map((s) => COLOR_BY_SLUG[s]).filter(Boolean);
  switch (format) {
    case 'HEX':
      return colors.map((c) => c.hex.toUpperCase()).join(', ');
    case 'HEX_NO_HASH':
      return colors.map((c) => c.hex.replace('#', '').toUpperCase()).join(', ');
    case 'RGB':
      return colors.map((c) => `rgb(${c.rgb.join(', ')})`).join('\n');
    case 'CMYK':
      return colors.map((c) => `${c.name}: cmyk(${c.cmyk.join('%, ')}%)`).join('\n');
    case 'HSL':
      return colors.map((c) => `hsl(${c.hsl[0]}, ${c.hsl[1]}%, ${c.hsl[2]}%)`).join('\n');
    case 'CSS':
      return `:root {\n  /* Sanzo Wada Vol. ${combo.volume} #${combo.number} — ${combo.title} */\n${colors
        .map((c, i) => `  --wada-v${combo.volume}-${combo.number}-${i + 1}-${c.slug.replace(/[^a-z0-9-]/g, '-')}: ${c.hex.toUpperCase()};`)
        .join('\n')}\n}`;
    case 'TAILWIND':
      return `// Sanzo Wada Vol. ${combo.volume} #${combo.number} (${combo.titleJa})\ncolors: {\n${colors
        .map((c) => `  '${c.slug.replace(/[^a-z0-9-]/g, '-')}': '${c.hex.toUpperCase()}', // ${c.name} (${c.ja})`)
        .join('\n')}\n}`;
    case 'JSON':
      return JSON.stringify(
        {
          id: combo.id,
          volume: combo.volume,
          number: combo.number,
          title: combo.title,
          titleJa: combo.titleJa,
          section: combo.section,
          colors: colors.map((c) => ({
            name: c.name,
            ja: c.ja,
            romaji: c.romaji,
            hex: c.hex.toUpperCase(),
            rgb: c.rgb,
            cmyk: c.cmyk
          }))
        },
        null,
        2
      );
  }
}

// Relative luminance per WCAG 2.1
export function getLuminance(rgb: [number, number, number]): number {
  const [r, g, b] = rgb.map((v) => {
    const s = v / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

export function getContrastRatio(rgb1: [number, number, number], rgb2: [number, number, number]): number {
  const l1 = getLuminance(rgb1);
  const l2 = getLuminance(rgb2);
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return Number(((lighter + 0.05) / (darker + 0.05)).toFixed(2));
}

export function getWcagBadge(ratio: number): { label: string; passAA: boolean; passAAA: boolean } {
  if (ratio >= 7) return { label: 'AAA', passAA: true, passAAA: true };
  if (ratio >= 4.5) return { label: 'AA', passAA: true, passAAA: false };
  if (ratio >= 3.0) return { label: 'AA Large', passAA: false, passAAA: false };
  return { label: 'Decorative', passAA: false, passAAA: false };
}

export function generateComboSvg(combo: WadaCombination): string {
  const colors = combo.colors.map((s) => COLOR_BY_SLUG[s]).filter(Boolean);
  const width = 800;
  const height = 520;
  const pad = 40;
  const swatchAreaW = width - pad * 2;
  const swatchAreaH = 320;
  const colW = swatchAreaW / colors.length;

  const rects = colors
    .map((c, i) => {
      const x = pad + i * colW;
      const textColor = c.isBright ? '#1A1816' : '#FAF7F0';
      return `
    <g>
      <rect x="${x}" y="${pad}" width="${colW}" height="${swatchAreaH}" fill="${c.hex}" />
      <text x="${x + 16}" y="${pad + swatchAreaH - 42}" fill="${textColor}" font-family="monospace" font-size="15" font-weight="600">${c.hex}</text>
      <text x="${x + 16}" y="${pad + swatchAreaH - 20}" fill="${textColor}" font-family="serif" font-size="13" opacity="0.85">${c.name}</text>
    </g>`;
    })
    .join('');

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">
  <rect width="${width}" height="${height}" fill="#F6F2E9" />
  <rect x="${pad - 1}" y="${pad - 1}" width="${swatchAreaW + 2}" height="${swatchAreaH + 2}" fill="none" stroke="#1E1C1A" stroke-opacity="0.15" />
  ${rects}
  <text x="${pad}" y="${pad + swatchAreaH + 48}" fill="#1E1C1A" font-family="serif" font-size="22" font-weight="600">Vol. ${combo.volume} · No. ${combo.number} — ${combo.title.replace(/&/g, '&amp;')}</text>
  <text x="${pad}" y="${pad + swatchAreaH + 78}" fill="#6E675F" font-family="sans-serif" font-size="14">${combo.titleJa}  |  ${combo.section.replace(/&/g, '&amp;')}  |  Sanzo Wada Dictionary of Color Combinations</text>
  <rect x="${width - pad - 36}" y="${pad + swatchAreaH + 30}" width="36" height="36" rx="3" fill="#B8332A" />
  <text x="${width - pad - 18}" y="${pad + swatchAreaH + 54}" fill="#FAF7F0" font-family="serif" font-size="15" text-anchor="middle" font-weight="700">和田</text>
</svg>`;
}
