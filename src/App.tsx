import { useState, useMemo, useCallback, useEffect } from 'react';
import {
  Search,
  Shuffle,
  Heart,
  BookOpen,
  Calendar,
  Palette,
  Layers,
  X,
  Check,
  Columns,
  Rows,
  Disc
} from 'lucide-react';
import type { WadaCombination } from './data/wadaData';
import {
  VOL1_COMBINATIONS,
  VOL2_COMBINATIONS,
  ALL_COMBINATIONS,
  WADA_COLORS,
  COLOR_BY_SLUG,
  SWATCH_GROUPS,
  MONTHS_META
} from './data/wadaData';
import type { CopyFormat } from './utils/colorUtils';
import { CombinationCard } from './components/CombinationCard';
import { ColorIndexView } from './components/ColorIndexView';
import { CombinationModal } from './components/CombinationModal';
import './App.css';

type ActiveTab = 'vol1' | 'vol2' | 'all' | 'colors' | 'favorites';

interface ToastInfo {
  id: number;
  label: string;
  text: string;
  colorHex?: string;
}

const APPLIED_CATEGORIES = [
  'Kimono',
  'Clothes & Accessories',
  'Tapestry & Carpets',
  'Earthenware & Lacquerware',
  'Book, Poster & Wrapping Paper',
  'Applied Arts & Others'
];

export function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [copyFormat, setCopyFormat] = useState<CopyFormat>('HEX');
  const [layoutMode, setLayoutMode] = useState<'vertical' | 'horizontal' | 'overlap'>('vertical');

  // Vol 1 Filters
  const [vol1CountFilter, setVol1CountFilter] = useState<number | null>(null);

  // Vol 2 Filters
  const [vol2SubType, setVol2SubType] = useState<'all' | 'seasons' | 'applied'>('all');
  const [selectedMonth, setSelectedMonth] = useState<string | null>(null);
  const [selectedAppliedCat, setSelectedAppliedCat] = useState<string | null>(null);

  // Shared Pigment / Family Filters
  const [selectedSwatchGroup, setSelectedSwatchGroup] = useState<number | null>(null);
  const [selectedColorSlug, setSelectedColorSlug] = useState<string | null>(null);

  // Favorites persisted in localStorage
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('wada_sanzo_favorites');
      return saved ? JSON.parse(saved) : ['v1-1', 'v1-125', 'v1-263', 'v2-1', 'v2-73'];
    } catch {
      return ['v1-1', 'v1-125', 'v1-263', 'v2-1', 'v2-73'];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('wada_sanzo_favorites', JSON.stringify(favorites));
    } catch {
      // ignore storage errors
    }
  }, [favorites]);

  // Modal & Clipboard feedback state
  const [selectedCombo, setSelectedCombo] = useState<WadaCombination | null>(null);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [toast, setToast] = useState<ToastInfo | null>(null);

  const handleCopy = useCallback(
    (text: string, label: string, key: string, colorHex?: string) => {
      navigator.clipboard?.writeText(text).catch(() => {
        // Fallback textarea copy
        const ta = document.createElement('textarea');
        ta.value = text;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
      });
      setCopiedKey(key);
      setToast({ id: Date.now(), label, text, colorHex });
    },
    []
  );

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => {
      setToast(null);
      setCopiedKey(null);
    }, 2400);
    return () => clearTimeout(timer);
  }, [toast]);

  const handleToggleFavorite = useCallback((id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  }, []);

  const handleFilterByColor = useCallback((slug: string) => {
    setSelectedColorSlug(slug);
    setActiveTab('all');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const clearAllFilters = () => {
    setSearchQuery('');
    setVol1CountFilter(null);
    setVol2SubType('all');
    setSelectedMonth(null);
    setSelectedAppliedCat(null);
    setSelectedSwatchGroup(null);
    setSelectedColorSlug(null);
  };

  // Filtered Combinations
  const filteredCombinations = useMemo(() => {
    let source: WadaCombination[] = ALL_COMBINATIONS;
    if (activeTab === 'vol1') source = VOL1_COMBINATIONS;
    else if (activeTab === 'vol2') source = VOL2_COMBINATIONS;
    else if (activeTab === 'favorites') {
      source = ALL_COMBINATIONS.filter((c) => favorites.includes(c.id));
    }

    const q = searchQuery.trim().toLowerCase();

    return source.filter((combo) => {
      // Color count filter (applicable in Vol 1 or All)
      if (vol1CountFilter !== null) {
        if (vol1CountFilter === 5) {
          if (combo.colors.length < 5) return false;
        } else if (combo.colors.length !== vol1CountFilter) {
          return false;
        }
      }

      // Volume 2 sub-filters
      if (activeTab === 'vol2') {
        if (vol2SubType !== 'all' && combo.subType !== vol2SubType) return false;
        if (selectedMonth && combo.month !== selectedMonth) return false;
        if (selectedAppliedCat && combo.category !== selectedAppliedCat) return false;
      }

      // Specific pigment filter
      if (selectedColorSlug && !combo.colors.includes(selectedColorSlug)) {
        return false;
      }

      // Swatch hue family filter
      if (selectedSwatchGroup !== null) {
        const hasGroup = combo.colors.some(
          (slug) => COLOR_BY_SLUG[slug]?.swatchGroup === selectedSwatchGroup
        );
        if (!hasGroup) return false;
      }

      // Search query filter
      if (q) {
        const numMatch =
          String(combo.number) === q ||
          `#${combo.number}` === q ||
          combo.id.toLowerCase() === q;
        if (numMatch) return true;

        const textMatch =
          combo.title.toLowerCase().includes(q) ||
          combo.titleJa.toLowerCase().includes(q) ||
          combo.section.toLowerCase().includes(q) ||
          (combo.month && combo.month.toLowerCase().includes(q)) ||
          (combo.category && combo.category.toLowerCase().includes(q));
        if (textMatch) return true;

        const colorMatch = combo.colors.some((slug) => {
          const c = COLOR_BY_SLUG[slug];
          if (!c) return false;
          return (
            c.name.toLowerCase().includes(q) ||
            c.ja.toLowerCase().includes(q) ||
            c.romaji.toLowerCase().includes(q) ||
            c.hex.toLowerCase().includes(q)
          );
        });
        return colorMatch;
      }

      return true;
    });
  }, [
    activeTab,
    favorites,
    searchQuery,
    vol1CountFilter,
    vol2SubType,
    selectedMonth,
    selectedAppliedCat,
    selectedColorSlug,
    selectedSwatchGroup
  ]);

  const handleSurpriseMe = () => {
    const pool = filteredCombinations.length > 0 ? filteredCombinations : ALL_COMBINATIONS;
    const randomCombo = pool[Math.floor(Math.random() * pool.length)];
    if (randomCombo) setSelectedCombo(randomCombo);
  };

  // Modal Next / Prev handlers
  const modalIndex = useMemo(() => {
    if (!selectedCombo) return -1;
    return filteredCombinations.findIndex((c) => c.id === selectedCombo.id);
  }, [selectedCombo, filteredCombinations]);

  const activeColorFilterObj = selectedColorSlug ? COLOR_BY_SLUG[selectedColorSlug] : null;

  return (
    <div className="wada-app">
      {/* Editorial Book Header */}
      <header className="site-header">
        <div className="site-header__inner">
          <div className="brand-identity" onClick={() => setActiveTab('all')}>
            <div className="hanko-seal" aria-hidden="true">
              <span>和田</span>
              <span>三造</span>
            </div>
            <div className="brand-titles">
              <div className="brand-eyebrow">
                <span>SANZO WADA · 配色総鑑 (1933–1937)</span>
                <span className="brand-eyebrow__sep">·</span>
                <span>SEIGENSHA ARCHIVE</span>
              </div>
              <h1 className="brand-title">
                A Dictionary of Color Combinations{' '}
                <span className="brand-title__vols">Vol. 1 &amp; Vol. 2</span>
              </h1>
              <p className="brand-subtitle">
                Interactive swatch archive of Japan’s most iconic color theory books — 450 curated palettes &amp; 171 traditional pigments with one-click HEX, RGB, CMYK &amp; CSS copy.
              </p>
            </div>
          </div>

          <div className="header-quick-actions">
            <div className="format-selector" title="Default format when clicking any swatch">
              <span className="format-selector__label">Click Copies:</span>
              <select
                value={copyFormat}
                onChange={(e) => setCopyFormat(e.target.value as CopyFormat)}
                aria-label="Select copy format"
              >
                <option value="HEX">HEX (#RRGGBB)</option>
                <option value="HEX_NO_HASH">HEX (No #)</option>
                <option value="RGB">RGB (r, g, b)</option>
                <option value="CMYK">CMYK (%)</option>
                <option value="HSL">HSL (h, s, l)</option>
                <option value="CSS">CSS Variable</option>
              </select>
            </div>

            <div className="layout-switcher" role="group" aria-label="Swatch layout">
              <button
                type="button"
                className={`layout-btn ${layoutMode === 'vertical' ? 'is-active' : ''}`}
                onClick={() => setLayoutMode('vertical')}
                title="Vertical Book Columns"
              >
                <Columns size={15} />
              </button>
              <button
                type="button"
                className={`layout-btn ${layoutMode === 'horizontal' ? 'is-active' : ''}`}
                onClick={() => setLayoutMode('horizontal')}
                title="Horizontal Stacked Strips"
              >
                <Rows size={15} />
              </button>
              <button
                type="button"
                className={`layout-btn ${layoutMode === 'overlap' ? 'is-active' : ''}`}
                onClick={() => setLayoutMode('overlap')}
                title="Overlapping Color Chips"
              >
                <Disc size={15} />
              </button>
            </div>

            <button type="button" className="surprise-btn" onClick={handleSurpriseMe}>
              <Shuffle size={15} />
              <span>Random Plate</span>
            </button>
          </div>
        </div>

        {/* Primary Volume & View Navigation Bar */}
        <div className="nav-bar">
          <div className="nav-bar__inner">
            <nav className="main-tabs" aria-label="Dictionary Volumes">
              <button
                type="button"
                className={`main-tab ${activeTab === 'all' ? 'is-active' : ''}`}
                onClick={() => setActiveTab('all')}
              >
                <Layers size={15} />
                <span>All Combinations</span>
                <span className="main-tab__ja">全配色</span>
                <span className="main-tab__count">{ALL_COMBINATIONS.length}</span>
              </button>

              <button
                type="button"
                className={`main-tab ${activeTab === 'vol1' ? 'is-active' : ''}`}
                onClick={() => setActiveTab('vol1')}
              >
                <BookOpen size={15} />
                <span>Volume 1 · Classic</span>
                <span className="main-tab__ja">第一巻</span>
                <span className="main-tab__count">{VOL1_COMBINATIONS.length}</span>
              </button>

              <button
                type="button"
                className={`main-tab ${activeTab === 'vol2' ? 'is-active' : ''}`}
                onClick={() => setActiveTab('vol2')}
              >
                <Calendar size={15} />
                <span>Volume 2 · Seasons &amp; Design</span>
                <span className="main-tab__ja">第二巻</span>
                <span className="main-tab__count">{VOL2_COMBINATIONS.length}</span>
              </button>

              <button
                type="button"
                className={`main-tab ${activeTab === 'colors' ? 'is-active' : ''}`}
                onClick={() => setActiveTab('colors')}
              >
                <Palette size={15} />
                <span>171 Color Swatches</span>
                <span className="main-tab__ja">色見本帳</span>
                <span className="main-tab__count">{WADA_COLORS.length}</span>
              </button>

              <button
                type="button"
                className={`main-tab ${activeTab === 'favorites' ? 'is-active' : ''}`}
                onClick={() => setActiveTab('favorites')}
              >
                <Heart size={15} fill={activeTab === 'favorites' ? 'currentColor' : 'none'} />
                <span>Saved</span>
                <span className="main-tab__count">{favorites.length}</span>
              </button>
            </nav>

            {/* Search Input */}
            <div className="search-box">
              <Search size={15} className="search-box__icon" />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search color, Japanese name (桜, 藍), #hex, or plate #..."
                aria-label="Search combinations and colors"
              />
              {searchQuery && (
                <button
                  type="button"
                  className="search-box__clear"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                >
                  <X size={14} />
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="main-container">
        {activeTab === 'colors' ? (
          <ColorIndexView
            searchQuery={searchQuery}
            selectedSwatchGroup={selectedSwatchGroup}
            onSelectSwatchGroup={setSelectedSwatchGroup}
            copyFormat={copyFormat}
            copiedKey={copiedKey}
            onCopy={handleCopy}
            onFilterByColor={handleFilterByColor}
          />
        ) : (
          <>
            {/* Volume Context & Filter Bar */}
            <section className="filter-panel" aria-label="Palette Filters">
              {/* Volume 1 / All Count & Hue Filters */}
              {(activeTab === 'vol1' || activeTab === 'all' || activeTab === 'favorites') && (
                <div className="filter-row">
                  <div className="filter-group">
                    <span className="filter-group__label">Palette Size:</span>
                    {[
                      { val: null, label: 'All Sizes' },
                      { val: 2, label: '2 Colors (Duos)' },
                      { val: 3, label: '3 Colors (Trios)' },
                      { val: 4, label: '4 Colors (Quads)' },
                      { val: 5, label: '5–7 Colors (Vol. 2)' }
                    ].map((opt) => (
                      <button
                        key={String(opt.val)}
                        type="button"
                        className={`filter-chip ${vol1CountFilter === opt.val ? 'is-active' : ''}`}
                        onClick={() =>
                          setVol1CountFilter(vol1CountFilter === opt.val ? null : opt.val)
                        }
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>

                  <div className="filter-group">
                    <span className="filter-group__label">Hue Family:</span>
                    <button
                      type="button"
                      className={`filter-chip ${selectedSwatchGroup === null ? 'is-active' : ''}`}
                      onClick={() => setSelectedSwatchGroup(null)}
                    >
                      All Hues
                    </button>
                    {Object.entries(SWATCH_GROUPS).map(([k, grp]) => {
                      const num = Number(k);
                      return (
                        <button
                          key={k}
                          type="button"
                          className={`filter-chip ${selectedSwatchGroup === num ? 'is-active' : ''}`}
                          onClick={() =>
                            setSelectedSwatchGroup(selectedSwatchGroup === num ? null : num)
                          }
                        >
                          {grp.en.split(' / ')[0]} · {grp.ja.split('・')[0]}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Volume 2 Specific Sub-Filters (Seasons & Applied Design) */}
              {activeTab === 'vol2' && (
                <div className="vol2-filter-deck">
                  <div className="vol2-banner">
                    <div>
                      <span className="vol2-banner__eyebrow">
                        配色総鑑 B篇 · VOLUME 2 COLLECTION
                      </span>
                      <h2 className="vol2-banner__title">
                        72 Seasonal Monthly Palettes &amp; Applied Design Motifs
                      </h2>
                      <p className="vol2-banner__desc">
                        Volume 2 organizes Wada Sanzo’s 3- to 7-color combinations around the twelve months of the Japanese calendar (6 combinations per month) alongside applied motifs for kimono, fashion, tapestries, lacquerware, and book design.
                      </p>
                    </div>
                    <div className="vol2-subtabs">
                      <button
                        type="button"
                        className={`filter-chip ${vol2SubType === 'all' ? 'is-active' : ''}`}
                        onClick={() => {
                          setVol2SubType('all');
                          setSelectedMonth(null);
                          setSelectedAppliedCat(null);
                        }}
                      >
                        All Vol. 2 (90)
                      </button>
                      <button
                        type="button"
                        className={`filter-chip ${vol2SubType === 'seasons' ? 'is-active' : ''}`}
                        onClick={() => {
                          setVol2SubType('seasons');
                          setSelectedAppliedCat(null);
                        }}
                      >
                        12 Months · Seasons (72)
                      </button>
                      <button
                        type="button"
                        className={`filter-chip ${vol2SubType === 'applied' ? 'is-active' : ''}`}
                        onClick={() => {
                          setVol2SubType('applied');
                          setSelectedMonth(null);
                        }}
                      >
                        Applied Design &amp; Kimono (18)
                      </button>
                    </div>
                  </div>

                  {(vol2SubType === 'all' || vol2SubType === 'seasons') && (
                    <div className="month-grid">
                      {MONTHS_META.map((m) => {
                        const isSelected = selectedMonth === m.en;
                        return (
                          <button
                            key={m.id}
                            type="button"
                            className={`month-card ${isSelected ? 'is-active' : ''}`}
                            onClick={() => {
                              setSelectedAppliedCat(null);
                              setSelectedMonth(isSelected ? null : m.en);
                            }}
                          >
                            <span className="month-card__num">{String(m.num).padStart(2, '0')}月</span>
                            <span className="month-card__en">{m.en}</span>
                            <span className="month-card__ja">{m.ja.split(' ')[0]}</span>
                          </button>
                        );
                      })}
                    </div>
                  )}

                  {(vol2SubType === 'all' || vol2SubType === 'applied') && (
                    <div className="filter-group" style={{ marginTop: 10 }}>
                      <span className="filter-group__label">Applied Crafts:</span>
                      {APPLIED_CATEGORIES.map((cat) => (
                        <button
                          key={cat}
                          type="button"
                          className={`filter-chip ${selectedAppliedCat === cat ? 'is-active' : ''}`}
                          onClick={() => {
                            setSelectedMonth(null);
                            setSelectedAppliedCat(selectedAppliedCat === cat ? null : cat);
                          }}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Active Filter Banner & Results Count */}
              <div className="results-statusbar">
                <div className="results-statusbar__left">
                  <span className="results-count">
                    Showing <strong>{filteredCombinations.length}</strong> color{' '}
                    {filteredCombinations.length === 1 ? 'combination' : 'combinations'}
                  </span>

                  {activeColorFilterObj && (
                    <span className="active-pigment-badge">
                      <span
                        className="active-pigment-badge__dot"
                        style={{ backgroundColor: activeColorFilterObj.hex }}
                      />
                      <span>
                        Pigment: <strong>{activeColorFilterObj.name}</strong> ({activeColorFilterObj.ja}{' '}
                        {activeColorFilterObj.hex})
                      </span>
                      <button
                        type="button"
                        onClick={() => setSelectedColorSlug(null)}
                        aria-label="Remove color filter"
                      >
                        <X size={13} />
                      </button>
                    </span>
                  )}

                  {selectedMonth && (
                    <span className="active-pigment-badge">
                      <span>Month: <strong>{selectedMonth}</strong></span>
                      <button type="button" onClick={() => setSelectedMonth(null)}>
                        <X size={13} />
                      </button>
                    </span>
                  )}

                  {selectedAppliedCat && (
                    <span className="active-pigment-badge">
                      <span>Category: <strong>{selectedAppliedCat}</strong></span>
                      <button type="button" onClick={() => setSelectedAppliedCat(null)}>
                        <X size={13} />
                      </button>
                    </span>
                  )}
                </div>

                {(searchQuery ||
                  vol1CountFilter !== null ||
                  selectedSwatchGroup !== null ||
                  selectedColorSlug !== null ||
                  selectedMonth !== null ||
                  selectedAppliedCat !== null) && (
                  <button type="button" className="reset-filters-btn" onClick={clearAllFilters}>
                    Reset All Filters
                  </button>
                )}
              </div>
            </section>

            {/* Combinations Grid */}
            {filteredCombinations.length === 0 ? (
              <div className="empty-state">
                <p className="empty-state__kanji">空</p>
                <h3>No matching color combinations found</h3>
                <p>Try clearing a filter or searching by another color name or hex value.</p>
                <button type="button" className="surprise-btn" onClick={clearAllFilters}>
                  Reset All Filters
                </button>
              </div>
            ) : (
              <section className="combinations-grid" aria-label="Color Combinations">
                {filteredCombinations.map((combo) => (
                  <CombinationCard
                    key={combo.id}
                    combo={combo}
                    copyFormat={copyFormat}
                    layoutMode={layoutMode}
                    isFavorite={favorites.includes(combo.id)}
                    copiedKey={copiedKey}
                    onCopy={handleCopy}
                    onToggleFavorite={handleToggleFavorite}
                    onOpenDetail={setSelectedCombo}
                    onFilterByColor={handleFilterByColor}
                  />
                ))}
              </section>
            )}
          </>
        )}
      </main>

      {/* Combination Detail & Export Modal */}
      <CombinationModal
        combo={selectedCombo}
        onClose={() => setSelectedCombo(null)}
        onPrev={
          modalIndex > 0
            ? () => setSelectedCombo(filteredCombinations[modalIndex - 1])
            : undefined
        }
        onNext={
          modalIndex >= 0 && modalIndex < filteredCombinations.length - 1
            ? () => setSelectedCombo(filteredCombinations[modalIndex + 1])
            : undefined
        }
        isFavorite={selectedCombo ? favorites.includes(selectedCombo.id) : false}
        onToggleFavorite={handleToggleFavorite}
        copiedKey={copiedKey}
        onCopy={handleCopy}
        onFilterByColor={handleFilterByColor}
      />

      {/* Floating Clipboard Notification Toast */}
      {toast && (
        <div className="copy-toast" role="status" aria-live="polite">
          {toast.colorHex && (
            <span
              className="copy-toast__swatch"
              style={{ backgroundColor: toast.colorHex }}
            />
          )}
          <Check size={15} className="copy-toast__icon" />
          <div className="copy-toast__content">
            <span className="copy-toast__title">Copied to Clipboard</span>
            <span className="copy-toast__detail">{toast.label}</span>
          </div>
        </div>
      )}

      {/* Editorial Footer */}
      <footer className="site-footer">
        <div className="site-footer__inner">
          <div className="site-footer__col">
            <h4>配色総鑑 · A Dictionary of Color Combinations (Vol. 1 &amp; Vol. 2)</h4>
            <p>
              Originally compiled by Japanese painter, costume designer, and color researcher{' '}
              <strong>Sanzo Wada (和田三造, 1883–1967)</strong> between 1933 and 1937, and republished by Seigensha Art Publishing, Kyoto.
            </p>
          </div>
          <div className="site-footer__col site-footer__col--right">
            <p>
              Click any color swatch or hex chip to copy immediately · Click any plate for WCAG contrast &amp; CSS/Tailwind/JSON/SVG export.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
