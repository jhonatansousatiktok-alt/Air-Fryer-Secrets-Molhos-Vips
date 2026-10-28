import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { recipesData } from '../data/recipes';
import { RecipeImage } from './RecipeImage';
import {
  Search,
  Filter,
  Clock,
  Flame,
  Bookmark,
  CheckCircle2,
  X,
  SlidersHorizontal,
  Sparkles
} from 'lucide-react';
import { soundEffects } from '../utils/audio';

export const RecipesTab: React.FC = () => {
  const {
    t,
    language,
    openRecipeById,
    completedRecipes,
    favorites,
    toggleFavorite
  } = useApp();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedChapter, setSelectedChapter] = useState<number | 0>(0); // 0 = all
  const [timeFilter, setTimeFilter] = useState<'all' | 'under15' | '15to25' | 'over25'>('all');
  const [onlyFavorites, setOnlyFavorites] = useState(false);
  const [onlyCompleted, setOnlyCompleted] = useState(false);

  // Chapter options
  const chapterOptions = [
    { id: 0, label: t.filterAllChapters },
    { id: 1, label: t.chapter1 },
    { id: 2, label: t.chapter2 },
    { id: 3, label: t.chapter3 },
    { id: 4, label: t.chapter4 },
    { id: 5, label: t.chapter5 },
    { id: 6, label: t.chapter6 },
  ];

  // Filtering
  const filteredRecipes = useMemo(() => {
    return recipesData.filter(recipe => {
      // Search
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchTitle =
          recipe.titulo.toLowerCase().includes(q) ||
          recipe.titulo_en.toLowerCase().includes(q) ||
          recipe.titulo_es.toLowerCase().includes(q);
        const matchTags = recipe.tags.some(tag => tag.toLowerCase().includes(q));
        const matchIngredients = recipe.ingredientes.some(
          i =>
            i.nome.toLowerCase().includes(q) ||
            (i.nome_en && i.nome_en.toLowerCase().includes(q)) ||
            (i.nome_es && i.nome_es.toLowerCase().includes(q))
        );
        if (!matchTitle && !matchTags && !matchIngredients) return false;
      }

      // Chapter
      if (selectedChapter !== 0 && recipe.capitulo !== selectedChapter) {
        return false;
      }

      // Time
      if (timeFilter === 'under15' && recipe.tempoAirFryer > 14) return false;
      if (timeFilter === '15to25' && (recipe.tempoAirFryer < 15 || recipe.tempoAirFryer > 25)) return false;
      if (timeFilter === 'over25' && recipe.tempoAirFryer <= 25) return false;

      // Favorites
      if (onlyFavorites && !favorites.includes(recipe.id)) return false;

      // Completed
      if (onlyCompleted && !completedRecipes.includes(recipe.id)) return false;

      return true;
    });
  }, [searchQuery, selectedChapter, timeFilter, onlyFavorites, onlyCompleted, favorites, completedRecipes]);

  const clearFilters = () => {
    soundEffects.playClick();
    setSearchQuery('');
    setSelectedChapter(0);
    setTimeFilter('all');
    setOnlyFavorites(false);
    setOnlyCompleted(false);
  };

  const hasActiveFilters =
    searchQuery.trim() !== '' ||
    selectedChapter !== 0 ||
    timeFilter !== 'all' ||
    onlyFavorites ||
    onlyCompleted;

  return (
    <div className="space-y-5 pb-20 animate-in fade-in duration-200">
      {/* Top Search Bar */}
      <div className="relative">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
        <input
          type="text"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          placeholder={t.searchPlaceholder}
          className="w-full bg-zinc-900 border border-white/10 rounded-2xl pl-10 pr-10 py-3 text-xs sm:text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500/50 shadow-inner"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-zinc-400 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Chapters Filter Pills (Horizontal Scroll) */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar text-xs">
        {chapterOptions.map(chap => (
          <button
            key={chap.id}
            onClick={() => {
              soundEffects.playClick();
              setSelectedChapter(chap.id);
            }}
            className={`whitespace-nowrap px-3.5 py-1.5 rounded-xl font-bold transition-all shrink-0 border ${
              selectedChapter === chap.id
                ? 'bg-amber-500 text-black border-amber-500 shadow-md shadow-amber-500/20'
                : 'bg-zinc-900 text-zinc-300 border-white/5 hover:bg-zinc-800'
            }`}
          >
            {chap.label}
          </button>
        ))}
      </div>

      {/* Secondary Quick Filter Toggles */}
      <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
        <div className="flex flex-wrap items-center gap-1.5">
          {/* Time Filter Dropdown / Buttons */}
          <div className="flex items-center gap-1 bg-zinc-900 p-1 rounded-xl border border-white/5">
            <button
              onClick={() => {
                soundEffects.playClick();
                setTimeFilter('all');
              }}
              className={`px-2.5 py-1 rounded-lg font-semibold transition-colors ${
                timeFilter === 'all' ? 'bg-amber-500/20 text-amber-300' : 'text-zinc-400'
              }`}
            >
              {t.filterAnyTime}
            </button>
            <button
              onClick={() => {
                soundEffects.playClick();
                setTimeFilter('under15');
              }}
              className={`px-2.5 py-1 rounded-lg font-semibold transition-colors ${
                timeFilter === 'under15' ? 'bg-amber-500/20 text-amber-300' : 'text-zinc-400'
              }`}
            >
              {t.under15Min}
            </button>
            <button
              onClick={() => {
                soundEffects.playClick();
                setTimeFilter('15to25');
              }}
              className={`px-2.5 py-1 rounded-lg font-semibold transition-colors ${
                timeFilter === '15to25' ? 'bg-amber-500/20 text-amber-300' : 'text-zinc-400'
              }`}
            >
              {t.from15to25Min}
            </button>
          </div>

          {/* Favorites Filter */}
          <button
            onClick={() => {
              soundEffects.playClick();
              setOnlyFavorites(!onlyFavorites);
            }}
            className={`px-3 py-1.5 rounded-xl font-bold flex items-center gap-1.5 border transition-all ${
              onlyFavorites
                ? 'bg-rose-500/20 border-rose-500/40 text-rose-300'
                : 'bg-zinc-900 border-white/5 text-zinc-400 hover:text-white'
            }`}
          >
            <Bookmark className={`w-3.5 h-3.5 ${onlyFavorites ? 'fill-rose-400' : ''}`} />
            <span>{t.filterFavorites}</span>
          </button>

          {/* Completed Filter */}
          <button
            onClick={() => {
              soundEffects.playClick();
              setOnlyCompleted(!onlyCompleted);
            }}
            className={`px-3 py-1.5 rounded-xl font-bold flex items-center gap-1.5 border transition-all ${
              onlyCompleted
                ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300'
                : 'bg-zinc-900 border-white/5 text-zinc-400 hover:text-white'
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>{t.filterCompleted}</span>
          </button>
        </div>

        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="text-[11px] font-semibold text-zinc-400 hover:text-amber-400 underline"
          >
            {t.clearFilters}
          </button>
        )}
      </div>

      {/* Results Counter */}
      <div className="flex items-center justify-between text-xs text-zinc-400 px-1">
        <span>
          <strong className="text-white font-bold">{filteredRecipes.length}</strong> {t.totalRecipesFound}
        </span>
      </div>

      {/* Recipes Grid */}
      {filteredRecipes.length === 0 ? (
        <div className="text-center py-12 space-y-3 bg-zinc-900/50 rounded-3xl border border-white/5 p-6">
          <p className="text-sm text-zinc-400">{t.noRecipesFound}</p>
          <button
            onClick={clearFilters}
            className="py-2 px-4 rounded-xl bg-amber-500 text-black font-bold text-xs"
          >
            {t.clearFilters}
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {filteredRecipes.map(recipe => {
            const title =
              language === 'en' ? recipe.titulo_en : language === 'es' ? recipe.titulo_es : recipe.titulo;
            const subtitle =
              language === 'en' ? recipe.subtitulo_en : language === 'es' ? recipe.subtitulo_es : recipe.subtitulo;
            const isCompleted = completedRecipes.includes(recipe.id);
            const isFavorited = favorites.includes(recipe.id);

            return (
              <div
                key={recipe.id}
                onClick={() => openRecipeById(recipe.id)}
                className="group relative bg-zinc-900 border border-white/5 hover:border-amber-500/40 rounded-3xl p-3.5 sm:p-4 transition-all duration-200 hover:bg-zinc-800/80 cursor-pointer flex flex-col justify-between shadow-md overflow-hidden"
              >
                <div>
                  {/* Visual Image Banner */}
                  <div className="w-full h-32 mb-3 rounded-2xl overflow-hidden">
                    <RecipeImage
                      recipe={recipe}
                      title={title}
                      className="w-full h-full"
                    />
                  </div>

                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-500/15 text-amber-300 border border-amber-500/20">
                        Cap {recipe.capitulo} • #{recipe.id}
                      </span>
                      {isCompleted && (
                        <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                          <CheckCircle2 className="w-2.5 h-2.5" />
                          {t.completedBadge}
                        </span>
                      )}
                    </div>

                    <button
                      onClick={e => {
                        e.stopPropagation();
                        toggleFavorite(recipe.id);
                      }}
                      className="p-1.5 rounded-full hover:bg-white/10 text-zinc-400 hover:text-rose-400 transition-colors"
                      title={isFavorited ? t.favorited : t.favorite}
                    >
                      <Bookmark
                        className={`w-4 h-4 ${isFavorited ? 'text-rose-400 fill-rose-400' : ''}`}
                      />
                    </button>
                  </div>

                  <h3 className="font-extrabold text-sm sm:text-base text-white group-hover:text-amber-300 transition-colors line-clamp-2">
                    {title}
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1 line-clamp-2">
                    {subtitle}
                  </p>
                </div>

                {/* Footer specs */}
                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-3">
                    <span className="text-zinc-300 font-semibold flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-amber-400" />
                      {recipe.tempoAirFryer}m
                    </span>
                    <span className="text-zinc-300 font-semibold flex items-center gap-1">
                      <Flame className="w-3.5 h-3.5 text-orange-400" />
                      {recipe.temperatura}°C
                    </span>
                  </div>

                  <span className="text-[11px] font-bold text-amber-400 group-hover:translate-x-0.5 transition-transform">
                    {t.viewRecipe} ➔
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
