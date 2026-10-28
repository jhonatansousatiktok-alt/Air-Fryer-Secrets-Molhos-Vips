import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { recipesData } from '../data/recipes';
import { saucesData } from '../data/sauces';
import { RecipeImage } from './RecipeImage';
import {
  X,
  Clock,
  Flame,
  Users,
  CheckCircle2,
  Bookmark,
  Share2,
  Sparkles,
  ShoppingBag,
  ChefHat,
  Timer,
  Check,
  Plus
} from 'lucide-react';
import { soundEffects } from '../utils/audio';

export const RecipeModal: React.FC = () => {
  const {
    selectedRecipe,
    setSelectedRecipe,
    language,
    t,
    completedRecipes,
    toggleCompleted,
    favorites,
    toggleFavorite,
    addShoppingItem,
    addMultipleShoppingItems,
    openSauceById,
    startRecipeTimer
  } = useApp();

  const [portionMultiplier, setPortionMultiplier] = useState<1 | 2 | 4>(1);
  const [checkedIngredients, setCheckedIngredients] = useState<Record<number, boolean>>({});
  const [addedAllSuccess, setAddedAllSuccess] = useState(false);

  if (!selectedRecipe) return null;

  const isCompleted = completedRecipes.includes(selectedRecipe.id);
  const isFavorited = favorites.includes(selectedRecipe.id);

  // Localized fields
  const title = language === 'en' ? selectedRecipe.titulo_en : language === 'es' ? selectedRecipe.titulo_es : selectedRecipe.titulo;
  const subtitle = language === 'en' ? selectedRecipe.subtitulo_en : language === 'es' ? selectedRecipe.subtitulo_es : selectedRecipe.subtitulo;
  const chefTip = language === 'en' ? selectedRecipe.dicaDoChef_en : language === 'es' ? selectedRecipe.dicaDoChef_es : selectedRecipe.dicaDoChef;
  const steps = language === 'en' ? selectedRecipe.passos_en : language === 'es' ? selectedRecipe.passos_es : selectedRecipe.passos;
  const unitLabel = language === 'en' ? selectedRecipe.rendimentoUnidade_en : language === 'es' ? selectedRecipe.rendimentoUnidade_es : selectedRecipe.rendimentoUnidade;

  const handleToggleIngredient = (index: number) => {
    soundEffects.playClick();
    setCheckedIngredients(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const handleAddSingleToList = (ingName: string) => {
    addShoppingItem(ingName, title);
  };

  const handleAddAllIngredients = () => {
    const list = selectedRecipe.ingredientes.map(i => {
      const name = language === 'en' && i.nome_en ? i.nome_en : language === 'es' && i.nome_es ? i.nome_es : i.nome;
      const unit = language === 'en' && i.unidade_en ? i.unidade_en : language === 'es' && i.unidade_es ? i.unidade_es : i.unidade;
      const scaledQtd = (i.qtd * portionMultiplier).toFixed(i.qtd * portionMultiplier % 1 === 0 ? 0 : 1);
      return `${name} (${scaledQtd} ${unit})`;
    });
    addMultipleShoppingItems(list, title);
    setAddedAllSuccess(true);
    setTimeout(() => setAddedAllSuccess(false), 2500);
  };

  // Recommended sauces
  const recommendedSauces = saucesData.filter(s => selectedRecipe.molhosSugeridosIds.includes(s.id));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-zinc-900 border border-white/10 rounded-3xl overflow-hidden shadow-2xl text-white my-6 max-h-[92vh] flex flex-col">
        {/* Top Sticky Header */}
        <div className="sticky top-0 z-20 bg-zinc-900/95 backdrop-blur-md border-b border-white/10 px-5 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
              Capítulo {selectedRecipe.capitulo}
            </span>
            {isCompleted && (
              <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" />
                {t.completedBadge}
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => toggleFavorite(selectedRecipe.id)}
              className={`p-2 rounded-full border transition-colors ${
                isFavorited
                  ? 'bg-rose-500/20 border-rose-500/40 text-rose-400'
                  : 'bg-white/5 border-white/10 text-zinc-400 hover:text-white'
              }`}
              title={isFavorited ? t.favorited : t.favorite}
            >
              <Bookmark className={`w-4 h-4 ${isFavorited ? 'fill-rose-400' : ''}`} />
            </button>
            <button
              onClick={() => setSelectedRecipe(null)}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white border border-white/10 transition-colors"
              aria-label={t.close}
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-5 sm:p-7 space-y-6">
          {/* Visual Hero Banner */}
          <div className="w-full h-44 sm:h-52 rounded-2xl overflow-hidden shadow-lg">
            <RecipeImage
              recipe={selectedRecipe}
              title={title}
              className="w-full h-full"
              isHero
            />
          </div>

          {/* Title & Subtitle */}
          <div>
            <h1 className="text-xl sm:text-2xl font-black tracking-tight text-white leading-tight">
              {title}
            </h1>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1.5 leading-relaxed">
              {subtitle}
            </p>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-3 gap-2.5 bg-zinc-800/60 border border-white/5 rounded-2xl p-3 sm:p-4 text-center">
            <div className="flex flex-col items-center justify-center">
              <span className="text-xs text-zinc-400 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                {t.basketTime}
              </span>
              <span className="text-base sm:text-lg font-black text-amber-400 mt-0.5">
                {selectedRecipe.tempoAirFryer} min
              </span>
            </div>
            <div className="flex flex-col items-center justify-center border-x border-white/10">
              <span className="text-xs text-zinc-400 flex items-center gap-1">
                <Flame className="w-3.5 h-3.5 text-orange-400" />
                {t.tempLabel}
              </span>
              <span className="text-base sm:text-lg font-black text-orange-400 mt-0.5">
                {selectedRecipe.temperatura}°C
              </span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <span className="text-xs text-zinc-400 flex items-center gap-1">
                <Users className="w-3.5 h-3.5 text-zinc-300" />
                {t.portions}
              </span>
              <span className="text-base sm:text-lg font-black text-white mt-0.5">
                {selectedRecipe.rendimento * portionMultiplier}
              </span>
            </div>
          </div>

          {/* Portion Scaler */}
          <div className="flex items-center justify-between bg-zinc-800/40 border border-white/5 rounded-2xl px-4 py-3">
            <span className="text-xs sm:text-sm font-semibold text-zinc-300">
              {t.portionCalc}:
            </span>
            <div className="flex items-center gap-1.5 bg-zinc-900 p-1 rounded-xl border border-white/10">
              {([1, 2, 4] as const).map(scale => (
                <button
                  key={scale}
                  onClick={() => {
                    soundEffects.playClick();
                    setPortionMultiplier(scale);
                  }}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                    portionMultiplier === scale
                      ? 'bg-amber-500 text-black shadow-md'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {scale}x
                </button>
              ))}
            </div>
          </div>

          {/* Quick Recipe Timer Action */}
          <div className="flex flex-col sm:flex-row gap-2.5">
            <button
              onClick={() => startRecipeTimer(selectedRecipe.tempoAirFryer, selectedRecipe.temperatura, title)}
              className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500/20 to-orange-500/20 hover:from-amber-500/30 hover:to-orange-500/30 border border-amber-500/40 text-amber-300 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all"
            >
              <Timer className="w-4 h-4 text-amber-400" />
              <span>{t.startRecipeTimer} ({selectedRecipe.tempoAirFryer}m • {selectedRecipe.temperatura}°C)</span>
            </button>

            <button
              onClick={() => toggleCompleted(selectedRecipe.id)}
              className={`py-3 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all border ${
                isCompleted
                  ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300'
                  : 'bg-zinc-800 hover:bg-zinc-700 border-white/10 text-white'
              }`}
            >
              <CheckCircle2 className={`w-4 h-4 ${isCompleted ? 'text-emerald-400' : 'text-zinc-400'}`} />
              <span>{isCompleted ? t.completedStatus : t.markCompleted}</span>
            </button>
          </div>

          {/* Ingredients Section */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm sm:text-base font-extrabold text-white flex items-center gap-2">
                <ShoppingBag className="w-4 h-4 text-amber-400" />
                {t.ingredientsTitle}
              </h3>
              <button
                onClick={handleAddAllIngredients}
                disabled={addedAllSuccess}
                className="text-[11px] font-bold text-amber-400 hover:text-amber-300 bg-amber-500/10 hover:bg-amber-500/20 px-2.5 py-1 rounded-lg border border-amber-500/30 transition-all flex items-center gap-1"
              >
                {addedAllSuccess ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-400" />
                    <span>{t.addedToListSuccess}</span>
                  </>
                ) : (
                  <>
                    <Plus className="w-3 h-3" />
                    <span>{t.addAllToList}</span>
                  </>
                )}
              </button>
            </div>

            <div className="space-y-2 bg-zinc-800/30 border border-white/5 rounded-2xl p-3 sm:p-4">
              {selectedRecipe.ingredientes.map((ing, idx) => {
                const ingName = language === 'en' && ing.nome_en ? ing.nome_en : language === 'es' && ing.nome_es ? ing.nome_es : ing.nome;
                const ingUnit = language === 'en' && ing.unidade_en ? ing.unidade_en : language === 'es' && ing.unidade_es ? ing.unidade_es : ing.unidade;
                const scaledQtd = (ing.qtd * portionMultiplier).toFixed(ing.qtd * portionMultiplier % 1 === 0 ? 0 : 1);
                const isChecked = checkedIngredients[idx];

                return (
                  <div
                    key={idx}
                    className="flex items-center justify-between py-1.5 px-2 rounded-lg hover:bg-white/5 transition-colors group"
                  >
                    <label
                      onClick={() => handleToggleIngredient(idx)}
                      className="flex items-start gap-2.5 cursor-pointer flex-1"
                    >
                      <input
                        type="checkbox"
                        checked={!!isChecked}
                        onChange={() => {}}
                        className="mt-0.5 rounded border-zinc-700 text-amber-500 focus:ring-0 focus:ring-offset-0 bg-zinc-800"
                      />
                      <span className={`text-xs sm:text-sm ${isChecked ? 'line-through text-zinc-500' : 'text-zinc-200'}`}>
                        <strong className="text-amber-400 font-semibold">{scaledQtd} {ingUnit}</strong> de {ingName}
                      </span>
                    </label>

                    <button
                      onClick={() => handleAddSingleToList(`${ingName} (${scaledQtd} ${ingUnit})`)}
                      className="opacity-0 group-hover:opacity-100 text-[10px] text-zinc-400 hover:text-amber-300 p-1 transition-opacity"
                      title="Adicionar à lista de compras"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Preparation Steps */}
          <div className="space-y-3">
            <h3 className="text-sm sm:text-base font-extrabold text-white flex items-center gap-2">
              <ChefHat className="w-4 h-4 text-orange-400" />
              {t.stepsTitle}
            </h3>

            <div className="space-y-3">
              {steps.map((step, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 bg-zinc-800/40 border border-white/5 rounded-2xl p-3.5"
                >
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-amber-500/20 text-amber-300 text-xs font-black shrink-0 mt-0.5 border border-amber-500/30">
                    {idx + 1}
                  </span>
                  <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Golden Chef Tip */}
          <div className="bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border border-amber-500/30 rounded-2xl p-4 sm:p-5 relative overflow-hidden">
            <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider mb-1.5">
              <Sparkles className="w-4 h-4" />
              <span>{t.chefTipTitle}</span>
            </div>
            <p className="text-xs sm:text-sm text-amber-100/90 leading-relaxed italic">
              "{chefTip}"
            </p>
          </div>

          {/* Cross-Sell: Recommended Sauces */}
          {recommendedSauces.length > 0 && (
            <div className="space-y-3 pt-2 border-t border-white/10">
              <div>
                <h3 className="text-sm sm:text-base font-extrabold text-white flex items-center gap-2">
                  <Flame className="w-4 h-4 text-amber-400" />
                  {t.recommendedSaucesTitle}
                </h3>
                <p className="text-xs text-zinc-400">
                  {t.recommendedSaucesSubtitle}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {recommendedSauces.map(sauce => {
                  const sTitle = language === 'en' ? sauce.titulo_en : language === 'es' ? sauce.titulo_es : sauce.titulo;
                  const sStyle = language === 'en' ? sauce.estilo_en : language === 'es' ? sauce.estilo_es : sauce.estilo;

                  return (
                    <button
                      key={sauce.id}
                      onClick={() => openSauceById(sauce.id)}
                      className="p-3 rounded-xl bg-zinc-800/80 hover:bg-zinc-700/80 border border-amber-500/30 hover:border-amber-500 text-left transition-all flex items-center justify-between group cursor-pointer"
                    >
                      <div>
                        <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider">
                          {sStyle}
                        </span>
                        <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-amber-300 transition-colors">
                          {sTitle}
                        </h4>
                        <span className="text-[10px] text-zinc-400">
                          ⏱ {sauce.tempoPreparo} min
                        </span>
                      </div>
                      <span className="text-xs font-bold text-amber-400 bg-amber-500/10 px-2 py-1 rounded-lg border border-amber-500/20">
                        Ver Molho ➔
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
