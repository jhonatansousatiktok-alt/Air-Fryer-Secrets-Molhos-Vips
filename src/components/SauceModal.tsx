import React from 'react';
import { useApp } from '../context/AppContext';
import { recipesData } from '../data/recipes';
import { SauceImage } from './SauceImage';
import { X, Clock, Flame, CheckCircle2, Sparkles, ChefHat } from 'lucide-react';

export const SauceModal: React.FC = () => {
  const { selectedSauce, setSelectedSauce, language, t, openRecipeById } = useApp();

  if (!selectedSauce) return null;

  const title = language === 'en' ? selectedSauce.titulo_en : language === 'es' ? selectedSauce.titulo_es : selectedSauce.titulo;
  const style = language === 'en' ? selectedSauce.estilo_en : language === 'es' ? selectedSauce.estilo_es : selectedSauce.estilo;
  const desc = language === 'en' ? selectedSauce.descricao_en : language === 'es' ? selectedSauce.descricao_es : selectedSauce.descricao;
  const ingredients = language === 'en' ? selectedSauce.ingredientes_en : language === 'es' ? selectedSauce.ingredientes_es : selectedSauce.ingredientes;
  const steps = language === 'en' ? selectedSauce.passos_en : language === 'es' ? selectedSauce.passos_es : selectedSauce.passos;

  const compatibleRecipes = recipesData.filter(r => selectedSauce.receitasCompativeisIds.includes(r.id));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-zinc-900 border border-amber-500/30 rounded-3xl overflow-hidden shadow-2xl text-white my-6 max-h-[90vh] flex flex-col">
        {/* Top Header */}
        <div className="sticky top-0 z-20 bg-zinc-900/95 backdrop-blur-md border-b border-white/10 px-5 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-amber-400" />
              {style}
            </span>
            <span className="text-[11px] text-zinc-400">
              Molho #{selectedSauce.id}
            </span>
          </div>
          <button
            onClick={() => setSelectedSauce(null)}
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white border border-white/10 transition-colors"
            aria-label={t.close}
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-5 sm:p-7 space-y-5">
          {/* Visual Banner */}
          <div className="w-full h-36 rounded-2xl overflow-hidden shadow-md">
            <SauceImage
              sauce={selectedSauce}
              title={title}
              className="w-full h-full"
              isHero
            />
          </div>

          <div>
            <h1 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              {title}
            </h1>
            <p className="text-xs sm:text-sm text-zinc-300 mt-1.5 leading-relaxed">
              {desc}
            </p>
          </div>

          {/* Quick Info */}
          <div className="flex items-center gap-4 bg-zinc-800/50 p-3 rounded-2xl border border-white/5 text-xs">
            <div className="flex items-center gap-1.5 text-amber-400 font-semibold">
              <Clock className="w-4 h-4" />
              <span>{selectedSauce.tempoPreparo} min preparo</span>
            </div>
            {selectedSauce.picancia !== undefined && (
              <div className="flex items-center gap-1 text-orange-400 font-semibold">
                <Flame className="w-4 h-4" />
                <span>
                  Picância: {selectedSauce.picancia === 0 ? 'Sem Pimenta' : selectedSauce.picancia === 1 ? 'Suave' : selectedSauce.picancia === 2 ? 'Média' : 'Forte'}
                </span>
              </div>
            )}
          </div>

          {/* Ingredients */}
          <div className="space-y-2.5">
            <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-amber-400">
              {t.ingredientsTitle}
            </h3>
            <ul className="space-y-1.5 bg-zinc-800/40 p-4 rounded-2xl border border-white/5">
              {ingredients.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-200">
                  <span className="text-amber-400 font-bold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Preparation */}
          <div className="space-y-2.5">
            <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-orange-400 flex items-center gap-1.5">
              <ChefHat className="w-4 h-4" />
              {t.stepsTitle}
            </h3>
            <div className="space-y-2">
              {steps.map((st, i) => (
                <div key={i} className="flex items-start gap-2.5 bg-zinc-800/30 p-3 rounded-xl border border-white/5 text-xs sm:text-sm text-zinc-200">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-amber-500/20 text-amber-300 text-[11px] font-bold shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span>{st}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Compatible Air Fryer Recipes */}
          {compatibleRecipes.length > 0 && (
            <div className="space-y-2.5 pt-2 border-t border-white/10">
              <h3 className="text-xs sm:text-sm font-extrabold text-white">
                {t.compatibleRecipes}
              </h3>
              <div className="flex flex-wrap gap-2">
                {compatibleRecipes.map(r => {
                  const rTitle = language === 'en' ? r.titulo_en : language === 'es' ? r.titulo_es : r.titulo;
                  return (
                    <button
                      key={r.id}
                      onClick={() => {
                        setSelectedSauce(null);
                        openRecipeById(r.id);
                      }}
                      className="px-3 py-1.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-xs font-semibold text-zinc-200 hover:text-amber-300 border border-white/10 transition-colors flex items-center gap-1.5"
                    >
                      <span>🔥 {rTitle}</span>
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
