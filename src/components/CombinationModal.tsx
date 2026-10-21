import React, { useState, useEffect } from 'react';
import {
  X,
  Copy,
  Check,
  Heart,
  Download,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  RefreshCw
} from 'lucide-react';
import type { WadaColor, WadaCombination } from '../data/wadaData';
import { COLOR_BY_SLUG } from '../data/wadaData';
import type { CopyFormat } from '../utils/colorUtils';
import {
  formatColorValue,
  formatCombinationExport,
  getContrastRatio,
  getWcagBadge,
  generateComboSvg
} from '../utils/colorUtils';

interface CombinationModalProps {
  combo: WadaCombination | null;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
  copiedKey: string | null;
  onCopy: (text: string, label: string, key: string, colorHex?: string) => void;
  onFilterByColor: (slug: string) => void;
}

const EXPORT_FORMATS: { id: CopyFormat; label: string }[] = [
  { id: 'HEX', label: 'HEX (#RRGGBB)' },
  { id: 'HEX_NO_HASH', label: 'HEX (Raw)' },
  { id: 'RGB', label: 'RGB()' },
  { id: 'CMYK', label: 'CMYK' },
  { id: 'HSL', label: 'HSL()' },
  { id: 'CSS', label: 'CSS Variables' },
  { id: 'TAILWIND', label: 'Tailwind Config' },
  { id: 'JSON', label: 'JSON Object' }
];

export const CombinationModal: React.FC<CombinationModalProps> = ({
  combo,
  onClose,
  onPrev,
  onNext,
  isFavorite,
  onToggleFavorite,
  copiedKey,
  onCopy,
  onFilterByColor
}) => {
  const [activeExportTab, setActiveExportTab] = useState<CopyFormat>('HEX');
  const [roleOffset, setRoleOffset] = useState(0);

  useEffect(() => {
    setRoleOffset(0);
  }, [combo?.id]);

  useEffect(() => {
    if (!combo) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
      if (e.key === 'ArrowRight' && onNext) onNext();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [combo, onClose, onPrev, onNext]);

  if (!combo) return null;

  const colors: WadaColor[] = combo.colors.map((s) => COLOR_BY_SLUG[s]).filter(Boolean);
  const rotatedColors = colors.map((_, idx) => colors[(idx + roleOffset) % colors.length]);
  const bgCol = rotatedColors[0] || colors[0];
  const primaryCol = rotatedColors[1] || colors[0];
  const accentCol = rotatedColors[2] || rotatedColors[0];
  const secondaryCol = rotatedColors[3] || rotatedColors[1] || colors[0];

  const exportCode = formatCombinationExport(combo, activeExportTab);
  const exportCopyKey = `modal-export-${combo.id}-${activeExportTab}`;
  const isExportCopied = copiedKey === exportCopyKey;

  const handleDownloadSvg = () => {
    const svgContent = generateComboSvg(combo);
    const blob = new Blob([svgContent], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `wada-sanzo-v${combo.volume}-${String(combo.number).padStart(3, '0')}.svg`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-sheet" onClick={(e) => e.stopPropagation()}>
        {/* Top Navigation Bar */}
        <header className="modal-header">
          <div className="modal-header__titles">
            <div className="modal-header__badges">
              <span className={`vol-badge vol-badge--v${combo.volume}`}>
                Volume {combo.volume}
              </span>
              <span className="modal-header__number">
                Plate No. {String(combo.number).padStart(3, '0')}
              </span>
              <span className="modal-header__section">
                {combo.section} · {combo.sectionJa}
              </span>
            </div>
            <h2 className="modal-header__title">{combo.title}</h2>
            <p className="modal-header__subtitle">
              {combo.titleJa}
              {combo.note ? ` — ${combo.note}` : ''}
            </p>
          </div>

          <div className="modal-header__controls">
            {onPrev && (
              <button
                type="button"
                className="modal-nav-btn"
                onClick={onPrev}
                title="Previous combination (←)"
              >
                <ChevronLeft size={18} />
              </button>
            )}
            {onNext && (
              <button
                type="button"
                className="modal-nav-btn"
                onClick={onNext}
                title="Next combination (→)"
              >
                <ChevronRight size={18} />
              </button>
            )}
            <button
              type="button"
              className={`modal-nav-btn ${isFavorite ? 'is-fav' : ''}`}
              onClick={() => onToggleFavorite(combo.id)}
              title={isFavorite ? 'Remove from favorites' : 'Save to favorites'}
            >
              <Heart size={18} fill={isFavorite ? 'currentColor' : 'none'} />
            </button>
            <button
              type="button"
              className="modal-nav-btn"
              onClick={handleDownloadSvg}
              title="Download SVG Swatch Card"
            >
              <Download size={18} />
            </button>
            <button
              type="button"
              className="modal-nav-btn modal-nav-btn--close"
              onClick={onClose}
              title="Close (Esc)"
            >
              <X size={18} />
            </button>
          </div>
        </header>

        <div className="modal-body">
          {/* Interactive Large Swatch Plates */}
          <div className="modal-swatch-stage">
            {colors.map((c) => {
              const key = `modal-stage-${c.slug}`;
              const isCopied = copiedKey === key;
              return (
                <button
                  key={c.slug}
                  type="button"
                  className={`modal-stage-bar ${c.isBright ? 'is-bright' : 'is-dark'}`}
                  style={{ backgroundColor: c.hex }}
                  onClick={() =>
                    onCopy(c.hex, `${c.name} (${c.ja}) — ${c.hex}`, key, c.hex)
                  }
                  title={`Click to copy ${c.hex}`}
                >
                  <div className="modal-stage-bar__top">
                    <span className="modal-stage-bar__ja">{c.ja}</span>
                    <span className="modal-stage-bar__romaji">{c.romaji}</span>
                  </div>
                  <div className="modal-stage-bar__bottom">
                    <span className="modal-stage-bar__name">{c.name}</span>
                    <span className="modal-stage-bar__hex">
                      {isCopied ? '✓ COPIED' : c.hex}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detailed Swatch Breakdown Table */}
          <div className="modal-section">
            <div className="modal-section__head">
              <h3>Pigment Specifications & One-Click Copy</h3>
              <span>Click any value to copy directly to clipboard</span>
            </div>
            <div className="modal-pigment-list">
              {colors.map((c) => (
                <div key={c.slug} className="modal-pigment-row">
                  <div className="modal-pigment-row__identity">
                    <span
                      className="modal-pigment-row__swatch"
                      style={{ backgroundColor: c.hex }}
                    />
                    <div>
                      <div className="modal-pigment-row__title">
                        <strong>{c.name}</strong>
                        <span className="modal-pigment-row__ja">
                          {c.ja} ({c.romaji})
                        </span>
                      </div>
                      <div className="modal-pigment-row__meaning">
                        Swatch #{String(c.index).padStart(3, '0')} · {c.meaning} ·{' '}
                        <button
                          type="button"
                          className="inline-link-btn"
                          onClick={() => {
                            onClose();
                            onFilterByColor(c.slug);
                          }}
                        >
                          Filter all {c.vol1Combos.length + c.vol2Combos.length} palettes
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="modal-pigment-row__codes">
                    {(['HEX', 'RGB', 'CMYK', 'HSL'] as CopyFormat[]).map((fmt) => {
                      const val = formatColorValue(c, fmt);
                      const cellKey = `modal-cell-${c.slug}-${fmt}`;
                      const isCellCopied = copiedKey === cellKey;
                      return (
                        <button
                          key={fmt}
                          type="button"
                          className={`code-copy-pill ${isCellCopied ? 'is-copied' : ''}`}
                          onClick={() =>
                            onCopy(val, `${c.name} ${fmt}: ${val}`, cellKey, c.hex)
                          }
                        >
                          <span className="code-copy-pill__fmt">{fmt}</span>
                          <span className="code-copy-pill__val">
                            {isCellCopied ? '✓ Copied!' : val}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Two-Column Bottom: Copy/Export Block + Applied Live Preview & Contrast */}
          <div className="modal-two-col">
            {/* Left: Multi-Format Export */}
            <div className="modal-section">
              <div className="modal-section__head">
                <h3>Copy & Export Combination</h3>
              </div>
              <div className="export-tabs">
                {EXPORT_FORMATS.map((f) => (
                  <button
                    key={f.id}
                    type="button"
                    className={`export-tab ${activeExportTab === f.id ? 'is-active' : ''}`}
                    onClick={() => setActiveExportTab(f.id)}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
              <div className="export-code-box">
                <pre>{exportCode}</pre>
                <button
                  type="button"
                  className={`export-copy-btn ${isExportCopied ? 'is-copied' : ''}`}
                  onClick={() =>
                    onCopy(
                      exportCode,
                      `Copied Vol.${combo.volume} #${combo.number} (${activeExportTab})`,
                      exportCopyKey,
                      colors[0]?.hex
                    )
                  }
                >
                  {isExportCopied ? <Check size={15} /> : <Copy size={15} />}
                  <span>{isExportCopied ? 'Copied to Clipboard!' : `Copy ${activeExportTab}`}</span>
                </button>
              </div>
            </div>

            {/* Right: Live Design Application & Contrast Matrix */}
            <div className="modal-section">
              <div className="modal-section__head">
                <h3>
                  <Sparkles size={15} style={{ display: 'inline', marginRight: 6 }} />
                  Applied Harmony & WCAG Contrast
                </h3>
                <button
                  type="button"
                  className="rotate-roles-btn"
                  onClick={() => setRoleOffset((p) => (p + 1) % colors.length)}
                >
                  <RefreshCw size={12} /> Rotate Color Roles
                </button>
              </div>

              {/* Poster / Editorial Mockup */}
              <div
                className="harmony-preview-card"
                style={{
                  backgroundColor: bgCol.hex,
                  color: primaryCol.hex,
                  borderColor: secondaryCol.hex
                }}
              >
                <div className="harmony-preview-card__top">
                  <span
                    className="harmony-preview-pill"
                    style={{
                      backgroundColor: accentCol.hex,
                      color: accentCol.isBright ? '#1A1816' : '#FAF7F0'
                    }}
                  >
                    配色総鑑 · Vol.{combo.volume} #{combo.number}
                  </span>
                  <span className="harmony-preview-ja" style={{ color: primaryCol.hex }}>
                    {combo.titleJa}
                  </span>
                </div>
                <h4 style={{ color: primaryCol.hex }}>{combo.title}</h4>
                <p style={{ color: primaryCol.hex, opacity: 0.88 }}>
                  Sanzo Wada’s color theory balances chroma and value across {colors.length} distinct tones.
                </p>
                <div className="harmony-preview-bars">
                  {colors.map((c) => (
                    <span
                      key={c.slug}
                      style={{ backgroundColor: c.hex }}
                      className="harmony-preview-bar"
                    />
                  ))}
                </div>
              </div>

              {/* Pairwise Contrast Ratios */}
              <div className="contrast-list">
                {colors.map((c1, i) =>
                  colors.slice(i + 1).map((c2) => {
                    const ratio = getContrastRatio(c1.rgb, c2.rgb);
                    const badge = getWcagBadge(ratio);
                    return (
                      <div key={`${c1.slug}-${c2.slug}`} className="contrast-pair">
                        <div className="contrast-pair__swatches">
                          <span style={{ backgroundColor: c1.hex }} />
                          <span style={{ backgroundColor: c2.hex }} />
                          <span className="contrast-pair__names">
                            {c1.name} / {c2.name}
                          </span>
                        </div>
                        <div className="contrast-pair__score">
                          <strong>{ratio}:1</strong>
                          <span
                            className={`wcag-tag ${
                              badge.passAAA
                                ? 'wcag-tag--aaa'
                                : badge.passAA
                                ? 'wcag-tag--aa'
                                : 'wcag-tag--low'
                            }`}
                          >
                            {badge.label}
                          </span>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
