import React from 'react';
import { useApp } from '../context/AppContext';
import { recipesData } from '../data/recipes';
import { RecipeImage } from './RecipeImage';
import {
  Trophy,
  Flame,
  Clock,
  Sparkles,
  ArrowRight,
  Bookmark,
  Timer,
  ShoppingBag,
  Star
} from 'lucide-react';

export const HomeTab: React.FC = () => {
  const {
    t,
    language,
    completedRecipes,
    setActiveTab,
    openRecipeById,
    favorites
  } = useApp();

  const totalRecipes = recipesData.length;
  const completedCount = completedRecipes.length;
  const progressPercent = Math.min(100, Math.round((completedCount / totalRecipes) * 100));

  // Determine Chef Rank
  let rankLabel = t.rankBeginner;
  if (completedCount >= 46) {
    rankLabel = t.rankMaster;
  } else if (completedCount >= 26) {
    rankLabel = t.rankAdvanced;
  } else if (completedCount >= 11) {
    rankLabel = t.rankIntermediate;
  }

  // Recipe of the day (deterministic from current day or featured ID 1: Pasta Chips)
  const recipeOfTheDay = recipesData[0];
  const rTitle = language === 'en' ? recipeOfTheDay.titulo_en : language === 'es' ? recipeOfTheDay.titulo_es : recipeOfTheDay.titulo;
  const rSub = language === 'en' ? recipeOfTheDay.subtitulo_en : language === 'es' ? recipeOfTheDay.subtitulo_es : recipeOfTheDay.subtitulo;

  // Chapter cards data
  const chapters = [
    { num: 1, name: t.chapter1, range: '1-10', icon: '🥨' },
    { num: 2, name: t.chapter2, range: '11-20', icon: '🍗' },
    { num: 3, name: t.chapter3, range: '21-30', icon: '🌮' },
    { num: 4, name: t.chapter4, range: '31-40', icon: '🍪' },
    { num: 5, name: t.chapter5, range: '41-50', icon: '🍔' },
    { num: 6, name: t.chapter6, range: '51-60', icon: '🍕' },
  ];

  return (
    <div className="space-y-6 pb-20 animate-in fade-in duration-200">
      {/* Hero Welcome & Gamification Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-zinc-900 via-[#181a22] to-[#121318] border border-amber-500/20 p-5 sm:p-7 shadow-xl">
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                {t.greeting}
              </span>
              <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                {rankLabel}
              </h1>
            </div>
            <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-amber-500/15 border border-amber-500/30 text-amber-400 shadow-md">
              <Trophy className="w-6 h-6" />
            </div>
          </div>

          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-semibold text-zinc-300">
              <span>{t.gamificationTitle}</span>
              <span className="text-amber-400 font-bold">
                {completedCount} / {totalRecipes} {t.recipesMastered} ({progressPercent}%)
              </span>
            </div>

            <div className="w-full h-3 bg-zinc-800 rounded-full overflow-hidden p-0.5 border border-white/5">
              <div
                className="h-full rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-amber-400 transition-all duration-500 shadow-sm shadow-orange-500/50"
                style={{ width: `${Math.max(5, progressPercent)}%` }}
              />
            </div>
          </div>
        </div>
      </div>



      {/* Recipe of the Day Spotlight */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-sm sm:text-base font-extrabold text-white flex items-center gap-2">
            <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
            {t.recipeOfTheDay}
          </h2>
          <span className="text-[11px] font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">
            {t.recipeOfTheDayBadge}
          </span>
        </div>

        <div
          onClick={() => openRecipeById(recipeOfTheDay.id)}
          className="group relative overflow-hidden rounded-3xl bg-zinc-900 border border-white/10 hover:border-amber-500/50 p-4 sm:p-5 transition-all duration-200 cursor-pointer shadow-lg hover:shadow-amber-500/5"
        >
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            {/* Visual Cover */}
            <div className="w-full sm:w-44 h-36 sm:h-36 shrink-0">
              <RecipeImage
                recipe={recipeOfTheDay}
                title={rTitle}
                className="w-full h-full"
                isHero
              />
            </div>

            <div className="space-y-2 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    Capítulo 1 • #1
                  </span>
                  <span className="text-xs text-zinc-400 font-medium flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    {recipeOfTheDay.tempoAirFryer} min
                  </span>
                  <span className="text-xs text-zinc-400 font-medium flex items-center gap-1">
                    <Flame className="w-3.5 h-3.5 text-orange-400" />
                    {recipeOfTheDay.temperatura}°C
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-black text-white group-hover:text-amber-300 transition-colors">
                  {rTitle}
                </h3>
                <p className="text-xs text-zinc-400 line-clamp-2 mt-1">
                  {rSub}
                </p>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-[11px] text-amber-400/90 font-semibold">
                  Harmoniza com 2 Molhos VIP
                </span>
                <span className="py-2 px-3.5 rounded-xl bg-amber-500/10 group-hover:bg-amber-500 text-amber-400 group-hover:text-black font-bold text-xs transition-all border border-amber-500/30 flex items-center gap-1.5">
                  <span>{t.viewRecipe}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chapters Explorer */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-sm sm:text-base font-extrabold text-white">
            {t.exploreChapters}
          </h2>
          <button
            onClick={() => setActiveTab('recipes')}
            className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1"
          >
            Ver Todas (60)
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {chapters.map(c => {
            const chapterRecipes = recipesData.filter(r => r.capitulo === c.num);
            const chapterCompleted = chapterRecipes.filter(r => completedRecipes.includes(r.id)).length;

            return (
              <button
                key={c.num}
                onClick={() => setActiveTab('recipes')}
                className="text-left p-4 rounded-2xl bg-zinc-900 border border-white/5 hover:border-amber-500/40 p-4 transition-all hover:bg-zinc-800/80 group cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl">{c.icon}</span>
                  <span className="text-[10px] font-bold text-zinc-400 bg-white/5 px-2 py-0.5 rounded-full">
                    {chapterCompleted}/10
                  </span>
                </div>
                <h3 className="font-extrabold text-xs sm:text-sm text-white mt-2 group-hover:text-amber-300 transition-colors line-clamp-1">
                  {c.name}
                </h3>
                <p className="text-[11px] text-zinc-400 mt-0.5">
                  Receitas {c.range}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Quick Kitchen Utilities */}
      <div className="space-y-3">
        <h2 className="text-sm sm:text-base font-extrabold text-white">
          {t.quickTools}
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          <button
            onClick={() => setActiveTab('kitchen')}
            className="p-3.5 rounded-2xl bg-zinc-900 border border-white/5 hover:border-amber-500/30 text-left transition-all hover:bg-zinc-800/80 cursor-pointer"
          >
            <Timer className="w-5 h-5 text-amber-400 mb-2" />
            <div className="font-bold text-xs sm:text-sm text-white">{t.toolTimer}</div>
            <div className="text-[10px] text-zinc-400">Com bipes sonoros</div>
          </button>

          <button
            onClick={() => setActiveTab('recipes')}
            className="p-3.5 rounded-2xl bg-zinc-900 border border-white/5 hover:border-amber-500/30 text-left transition-all hover:bg-zinc-800/80 cursor-pointer"
          >
            <Bookmark className="w-5 h-5 text-rose-400 mb-2" />
            <div className="font-bold text-xs sm:text-sm text-white">{t.toolFavorites}</div>
            <div className="text-[10px] text-zinc-400">{favorites.length} salvas</div>
          </button>

          <button
            onClick={() => setActiveTab('kitchen')}
            className="p-3.5 rounded-2xl bg-zinc-900 border border-white/5 hover:border-amber-500/30 text-left transition-all hover:bg-zinc-800/80 cursor-pointer"
          >
            <ShoppingBag className="w-5 h-5 text-emerald-400 mb-2" />
            <div className="font-bold text-xs sm:text-sm text-white">{t.toolList}</div>
            <div className="text-[10px] text-zinc-400">Exporta WhatsApp</div>
          </button>

          <button
            onClick={() => setActiveTab('sauces')}
            className="p-3.5 rounded-2xl bg-zinc-900 border border-white/5 hover:border-amber-500/30 text-left transition-all hover:bg-zinc-800/80 cursor-pointer"
          >
            <Sparkles className="w-5 h-5 text-amber-400 mb-2" />
            <div className="font-bold text-xs sm:text-sm text-white">{t.toolSauces}</div>
            <div className="text-[10px] text-zinc-400">
              40 Molhos Liberados
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
