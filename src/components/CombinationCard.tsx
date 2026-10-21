import React from 'react';
import { Copy, Check, Heart, Maximize2 } from 'lucide-react';
import type { WadaColor, WadaCombination } from '../data/wadaData';
import { COLOR_BY_SLUG } from '../data/wadaData';
import type { CopyFormat } from '../utils/colorUtils';
import { formatColorValue, formatCombinationExport } from '../utils/colorUtils';

interface CombinationCardProps {
  combo: WadaCombination;
  copyFormat: CopyFormat;
  layoutMode: 'vertical' | 'horizontal' | 'overlap';
  isFavorite: boolean;
  copiedKey: string | null;
  onCopy: (text: string, label: string, key: string, colorHex?: string) => void;
  onToggleFavorite: (id: string) => void;
  onOpenDetail: (combo: WadaCombination) => void;
  onFilterByColor: (slug: string) => void;
}

export const CombinationCard: React.FC<CombinationCardProps> = ({
  combo,
  copyFormat,
  layoutMode,
  isFavorite,
  copiedKey,
  onCopy,
  onToggleFavorite,
  onOpenDetail,
  onFilterByColor
}) => {
  const colors: WadaColor[] = combo.colors.map((s) => COLOR_BY_SLUG[s]).filter(Boolean);
  const allCopyKey = `combo-all-${combo.id}`;
  const isAllCopied = copiedKey === allCopyKey;

  const handleCopySingle = (e: React.MouseEvent, c: WadaColor) => {
    e.stopPropagation();
    const val = formatColorValue(c, copyFormat);
    onCopy(val, `${c.name} (${c.ja}) — ${val}`, `swatch-${combo.id}-${c.slug}`, c.hex);
  };

  const handleCopyAll = (e: React.MouseEvent) => {
    e.stopPropagation();
    const val = formatCombinationExport(combo, copyFormat);
    onCopy(val, `Vol. ${combo.volume} #${combo.number} (${colors.length} colors)`, allCopyKey, colors[0]?.hex);
  };

  return (
    <article
      className="combo-card"
      onClick={() => onOpenDetail(combo)}
      aria-label={`Volume ${combo.volume} Combination ${combo.number}: ${combo.title}`}
    >
      {/* Card Header */}
      <header className="combo-card__header">
        <div className="combo-card__meta">
          <span className={`vol-badge vol-badge--v${combo.volume}`}>
            Vol.{combo.volume}
          </span>
          <span className="combo-card__number">
            No. {String(combo.number).padStart(3, '0')}
          </span>
          {combo.volume === 2 && combo.month && (
            <span className="combo-card__tag combo-card__tag--season" title={combo.note}>
              {combo.month} · {combo.monthJa?.split(' ')[0]}
            </span>
          )}
          {combo.volume === 2 && combo.category && (
            <span className="combo-card__tag combo-card__tag--applied" title={combo.note}>
              {combo.category}
            </span>
          )}
          {combo.volume === 1 && (
            <span className="combo-card__tag">
              {colors.length} {colors.length === 1 ? 'Color' : 'Colors'}
            </span>
          )}
        </div>

        <div className="combo-card__actions">
          <button
            type="button"
            className={`icon-btn ${isAllCopied ? 'icon-btn--copied' : ''}`}
            onClick={handleCopyAll}
            title={`Copy all ${colors.length} colors (${copyFormat})`}
            aria-label={`Copy all colors in ${combo.title}`}
          >
            {isAllCopied ? <Check size={14} /> : <Copy size={14} />}
            <span className="icon-btn__label">{isAllCopied ? 'Copied' : 'Copy All'}</span>
          </button>
          <button
            type="button"
            className={`icon-btn icon-btn--fav ${isFavorite ? 'is-active' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              onToggleFavorite(combo.id);
            }}
            title={isFavorite ? 'Remove from favorites' : 'Save to favorites'}
            aria-label="Toggle favorite"
          >
            <Heart size={14} fill={isFavorite ? 'currentColor' : 'none'} />
          </button>
          <button
            type="button"
            className="icon-btn"
            onClick={(e) => {
              e.stopPropagation();
              onOpenDetail(combo);
            }}
            title="Inspect combination & contrast"
            aria-label="Inspect combination"
          >
            <Maximize2 size={14} />
          </button>
        </div>
      </header>

      {/* Swatch Strip */}
      <div className={`combo-swatch-group combo-swatch-group--${layoutMode}`}>
        {colors.map((c) => {
          const swatchKey = `swatch-${combo.id}-${c.slug}`;
          const isCopied = copiedKey === swatchKey;
          const formatted = formatColorValue(c, copyFormat);
          return (
            <button
              key={c.slug}
              type="button"
              className={`combo-swatch ${c.isBright ? 'combo-swatch--bright' : 'combo-swatch--dark'} ${
                isCopied ? 'is-copied' : ''
              }`}
              style={{ backgroundColor: c.hex }}
              onClick={(e) => handleCopySingle(e, c)}
              title={`Click to copy ${c.name} (${c.ja}): ${formatted}`}
            >
              <div className="combo-swatch__overlay">
                <span className="combo-swatch__code">
                  {isCopied ? '✓ COPIED' : c.hex}
                </span>
                <span className="combo-swatch__ja">{c.ja}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Swatch Legend / Individual Copyable Rows */}
      <div className="combo-card__legend">
        {combo.volume === 2 && (
          <div className="combo-card__vol2-title">
            <span className="combo-card__vol2-en">{combo.title}</span>
            <span className="combo-card__vol2-ja">{combo.titleJa}</span>
          </div>
        )}
        <ul className="combo-chip-list">
          {colors.map((c) => {
            const chipKey = `chip-${combo.id}-${c.slug}`;
            const isChipCopied = copiedKey === chipKey || copiedKey === `swatch-${combo.id}-${c.slug}`;
            const formatted = formatColorValue(c, copyFormat);
            return (
              <li key={c.slug} className="combo-chip-item">
                <button
                  type="button"
                  className="combo-chip-filter"
                  onClick={(e) => {
                    e.stopPropagation();
                    onFilterByColor(c.slug);
                  }}
                  title={`Filter combinations containing ${c.name} (${c.ja})`}
                >
                  <span
                    className="combo-chip-dot"
                    style={{ backgroundColor: c.hex }}
                  />
                  <span className="combo-chip-name">{c.name}</span>
                  <span className="combo-chip-ja">{c.ja}</span>
                </button>
                <button
                  type="button"
                  className={`combo-chip-hex ${isChipCopied ? 'is-copied' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    onCopy(formatted, `${c.name} (${c.ja}) — ${formatted}`, chipKey, c.hex);
                  }}
                  title={`Click to copy ${formatted}`}
                >
                  {isChipCopied ? (
                    <>
                      <Check size={11} /> Copied
                    </>
                  ) : (
                    c.hex
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </article>
  );
};
