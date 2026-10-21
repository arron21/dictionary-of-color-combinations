import React from 'react';
import { Check, Copy, Filter } from 'lucide-react';
import type { WadaColor } from '../data/wadaData';
import { SWATCH_GROUPS, WADA_COLORS } from '../data/wadaData';
import type { CopyFormat } from '../utils/colorUtils';
import { formatColorValue } from '../utils/colorUtils';

interface ColorIndexViewProps {
  searchQuery: string;
  selectedSwatchGroup: number | null;
  onSelectSwatchGroup: (group: number | null) => void;
  copyFormat: CopyFormat;
  copiedKey: string | null;
  onCopy: (text: string, label: string, key: string, colorHex?: string) => void;
  onFilterByColor: (slug: string) => void;
}

export const ColorIndexView: React.FC<ColorIndexViewProps> = ({
  searchQuery,
  selectedSwatchGroup,
  onSelectSwatchGroup,
  copyFormat,
  copiedKey,
  onCopy,
  onFilterByColor
}) => {
  const q = searchQuery.trim().toLowerCase();

  const filteredColors = WADA_COLORS.filter((c) => {
    if (selectedSwatchGroup !== null && c.swatchGroup !== selectedSwatchGroup) {
      return false;
    }
    if (!q) return true;
    return (
      c.name.toLowerCase().includes(q) ||
      c.ja.toLowerCase().includes(q) ||
      c.romaji.toLowerCase().includes(q) ||
      c.meaning.toLowerCase().includes(q) ||
      c.hex.toLowerCase().includes(q) ||
      String(c.index) === q
    );
  });

  return (
    <section className="color-index-section">
      {/* Swatch Family Filter Pills */}
      <div className="swatch-family-bar">
        <button
          type="button"
          className={`family-pill ${selectedSwatchGroup === null ? 'is-active' : ''}`}
          onClick={() => onSelectSwatchGroup(null)}
        >
          <span>All 171 Pigments</span>
          <span className="family-pill__ja">全色一覧</span>
        </button>
        {Object.entries(SWATCH_GROUPS).map(([key, grp]) => {
          const num = Number(key);
          const count = WADA_COLORS.filter((c) => c.swatchGroup === num).length;
          return (
            <button
              key={key}
              type="button"
              className={`family-pill ${selectedSwatchGroup === num ? 'is-active' : ''}`}
              onClick={() => onSelectSwatchGroup(selectedSwatchGroup === num ? null : num)}
            >
              <span>
                {grp.en} ({count})
              </span>
              <span className="family-pill__ja">{grp.ja}</span>
            </button>
          );
        })}
      </div>

      {/* Swatch Grid */}
      <div className="pigment-grid">
        {filteredColors.map((c: WadaColor) => {
          const copyKey = `pigment-${c.slug}`;
          const isCopied = copiedKey === copyKey;
          const formatted = formatColorValue(c, copyFormat);
          const totalAppearances = c.vol1Combos.length + c.vol2Combos.length;

          return (
            <article key={c.slug} className="pigment-card">
              <button
                type="button"
                className={`pigment-card__swatch ${c.isBright ? 'is-bright' : 'is-dark'}`}
                style={{ backgroundColor: c.hex }}
                onClick={() => onCopy(formatted, `${c.name} (${c.ja}) — ${formatted}`, copyKey, c.hex)}
                title={`Click to copy ${formatted}`}
              >
                <span className="pigment-card__index">#{String(c.index).padStart(3, '0')}</span>
                <span className="pigment-card__kanji">{c.ja}</span>
                <span className="pigment-card__copy-indicator">
                  {isCopied ? (
                    <>
                      <Check size={13} /> Copied!
                    </>
                  ) : (
                    <>
                      <Copy size={13} /> {c.hex}
                    </>
                  )}
                </span>
              </button>

              <div className="pigment-card__body">
                <div className="pigment-card__titles">
                  <h3 className="pigment-card__name">{c.name}</h3>
                  <p className="pigment-card__romaji">
                    {c.ja} · <em>{c.romaji}</em> — {c.meaning}
                  </p>
                </div>

                <div className="pigment-card__specs">
                  <button
                    type="button"
                    className="spec-chip"
                    onClick={() =>
                      onCopy(c.hex, `${c.name} HEX: ${c.hex}`, `${copyKey}-hex`, c.hex)
                    }
                    title="Click to copy HEX"
                  >
                    <span className="spec-chip__label">HEX</span>
                    <span className="spec-chip__val">{c.hex}</span>
                  </button>
                  <button
                    type="button"
                    className="spec-chip"
                    onClick={() =>
                      onCopy(
                        `rgb(${c.rgb.join(', ')})`,
                        `${c.name} RGB`,
                        `${copyKey}-rgb`,
                        c.hex
                      )
                    }
                    title="Click to copy RGB"
                  >
                    <span className="spec-chip__label">RGB</span>
                    <span className="spec-chip__val">{c.rgb.join(', ')}</span>
                  </button>
                  <button
                    type="button"
                    className="spec-chip"
                    onClick={() =>
                      onCopy(
                        `cmyk(${c.cmyk.join('%, ')}%)`,
                        `${c.name} CMYK`,
                        `${copyKey}-cmyk`,
                        c.hex
                      )
                    }
                    title="Click to copy CMYK"
                  >
                    <span className="spec-chip__label">CMYK</span>
                    <span className="spec-chip__val">{c.cmyk.join('·')}</span>
                  </button>
                </div>

                <div className="pigment-card__footer">
                  <span className="pigment-card__usage">
                    Vol.1: <strong>{c.vol1Combos.length}</strong> · Vol.2: <strong>{c.vol2Combos.length}</strong>
                  </span>
                  <button
                    type="button"
                    className="pigment-card__filter-btn"
                    onClick={() => onFilterByColor(c.slug)}
                  >
                    <Filter size={12} /> View {totalAppearances} Palettes →
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
