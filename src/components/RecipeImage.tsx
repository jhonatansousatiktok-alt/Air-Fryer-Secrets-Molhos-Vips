import React, { useState } from 'react';
import { Recipe } from '../types';
import { Flame, Clock, Sparkles } from 'lucide-react';
import { recipeImageMap } from '../data/recipeImages';

interface RecipeImageProps {
  recipe: Recipe;
  title: string;
  className?: string;
  isHero?: boolean;
}

// Visual themes per chapter
const chapterVisuals: Record<number, { bg: string; icon: string; glow: string; badge: string; color: string }> = {
  1: {
    bg: 'from-amber-600/35 via-orange-600/20 to-zinc-950',
    icon: '🥨',
    glow: 'rgba(245, 158, 11, 0.3)',
    badge: 'PETISCO CROCANTE',
    color: '#f59e0b'
  },
  2: {
    bg: 'from-orange-600/35 via-amber-700/20 to-zinc-950',
    icon: '🍗',
    glow: 'rgba(234, 88, 12, 0.3)',
    badge: 'SURPRESA DOURADA',
    color: '#ea580c'
  },
  3: {
    bg: 'from-red-600/35 via-orange-700/20 to-zinc-950',
    icon: '🌮',
    glow: 'rgba(220, 38, 38, 0.3)',
    badge: 'FUSÃO & SABOR',
    color: '#dc2626'
  },
  4: {
    bg: 'from-yellow-700/35 via-amber-800/20 to-zinc-950',
    icon: '🍪',
    glow: 'rgba(217, 119, 6, 0.3)',
    badge: 'DOCE PERFEITO',
    color: '#d97706'
  },
  5: {
    bg: 'from-amber-500/35 via-orange-600/20 to-zinc-950',
    icon: '🍔',
    glow: 'rgba(249, 115, 22, 0.3)',
    badge: 'FAST-FOOD MASTER',
    color: '#f97316'
  },
  6: {
    bg: 'from-emerald-600/35 via-amber-600/20 to-zinc-950',
    icon: '🍕',
    glow: 'rgba(16, 185, 129, 0.3)',
    badge: 'REAQUECIMENTO DE CHEF',
    color: '#10b981'
  },
};

// Signature dish food icons for all 60 recipes
const recipeIcons: Record<number, string> = {
  1: '🥨', 2: '🥓', 3: '🧀', 4: '🥔', 5: '🌶️',
  6: '🍄', 7: '🥒', 8: '🍢', 9: '🫕', 10: '🍿',
  11: '🍗', 12: '🌭', 13: '🥐', 14: '🥟', 15: '🍤',
  16: '🥢', 17: '🥟', 18: '🥟', 19: '🥑', 20: '🥢',
  21: '🌮', 22: '🍟', 23: '🍗', 24: '🌮', 25: '🍗',
  26: '🥟', 27: '🧀', 28: '🌯', 29: '🍣', 30: '🍌',
  31: '🍰', 32: '🌋', 33: '🍪', 34: '🥖', 35: '🍞',
  36: '🍌', 37: '🍎', 38: '🍩', 39: '🍫', 40: '🍓',
  41: '🍔', 42: '🍗', 43: '🧅', 44: '🐟', 45: '🍟',
  46: '🥪', 47: '🍕', 48: '🌭', 49: '🍗', 50: '🥩',
  51: '🍕', 52: '🥟', 53: '🥔', 54: '🥖', 55: '🍟',
  56: '🥐', 57: '🐟', 58: '🍖', 59: '🥩', 60: '🥪',
};

export const RecipeImage: React.FC<RecipeImageProps> = ({
  recipe,
  title,
  className = '',
  isHero = false
}) => {
  const [hasError, setHasError] = useState(false);
  const visual = chapterVisuals[recipe.capitulo] || chapterVisuals[1];
  const icon = recipe.icone || recipeIcons[recipe.id] || visual.icon;
  const photoUrl = recipe.imagem || recipeImageMap[recipe.id];

  // If real photography is available and hasn't errored
  if (photoUrl && !hasError) {
    return (
      <div
        className={`relative overflow-hidden rounded-2xl bg-zinc-950 flex flex-col justify-between p-3.5 sm:p-4 group select-none border border-white/10 ${className}`}
      >
        {/* Background Real Culinary Image */}
        <img
          src={photoUrl}
          alt={title}
          referrerPolicy="no-referrer"
          loading="lazy"
          onError={() => setHasError(true)}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
        />

        {/* Gradient Scrims for Contrast & Legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/50 pointer-events-none" />
        <div className="absolute inset-0 bg-amber-950/20 mix-blend-color pointer-events-none" />

        {/* Top Badges */}
        <div className="relative z-10 flex items-center justify-between w-full">
          <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-lg bg-black/75 text-amber-300 border border-amber-500/40 backdrop-blur-md flex items-center gap-1 shadow-md">
            <Sparkles className="w-2.5 h-2.5 text-amber-400" />
            {visual.badge}
          </span>
          <span className="text-[10px] font-bold text-zinc-200 bg-black/70 px-2.5 py-0.5 rounded-lg border border-white/15 backdrop-blur-md flex items-center gap-1 shadow-md">
            <Flame className="w-3 h-3 text-orange-400" />
            {recipe.temperatura}°C
          </span>
        </div>

        {/* Center Space / Glow */}
        <div className="relative z-10 my-auto flex flex-col items-center justify-center py-1">
          {isHero && (
            <div className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center text-2xl shadow-xl">
              {icon}
            </div>
          )}
        </div>

        {/* Bottom Bar: Basket Time & Crispness */}
        <div className="relative z-10 flex items-center justify-between w-full text-[10px] sm:text-[11px] font-bold text-zinc-200 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/15 shadow-lg">
          <span className="flex items-center gap-1.5 text-amber-400 font-extrabold">
            <Clock className="w-3.5 h-3.5" />
            {recipe.tempoAirFryer} min
          </span>
          <span className="text-[10px] text-amber-200/90 font-medium uppercase tracking-wider flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            Crocância Máxima
          </span>
        </div>
      </div>
    );
  }

  // Styled Fallback Container (Anti-Slop, High-End Culinary Studio Presentation)
  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${visual.bg} border border-white/10 flex flex-col justify-between p-3.5 sm:p-4 group select-none ${className}`}
      style={{
        boxShadow: `inset 0 0 50px ${visual.glow}`
      }}
    >
      {/* Texture overlays */}
      <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 rounded-full bg-white/5 blur-2xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:12px_12px] opacity-40 pointer-events-none" />

      {/* Top badges */}
      <div className="relative z-10 flex items-center justify-between w-full">
        <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md bg-black/60 text-amber-300 border border-amber-500/30 backdrop-blur-sm flex items-center gap-1 shadow-sm">
          <Sparkles className="w-2.5 h-2.5 text-amber-400" />
          {visual.badge}
        </span>
        <span className="text-[10px] font-bold text-zinc-300 bg-black/50 px-2 py-0.5 rounded-md border border-white/10 backdrop-blur-sm flex items-center gap-1 shadow-sm">
          <Flame className="w-3 h-3 text-orange-400" />
          {recipe.temperatura}°C
        </span>
      </div>

      {/* Center 3D Food Icon with Glow */}
      <div className="relative z-10 my-auto flex flex-col items-center justify-center py-1">
        <div className="relative">
          <span className="absolute -inset-2 bg-amber-500/10 rounded-full blur-xl animate-pulse" />
          <span
            className={`relative inline-block transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_12px_20px_rgba(0,0,0,0.6)] ${
              isHero ? 'text-6xl sm:text-7xl' : 'text-5xl sm:text-5xl'
            }`}
          >
            {icon}
          </span>
        </div>
      </div>

      {/* Bottom Bar: Basket Time & Crispness */}
      <div className="relative z-10 flex items-center justify-between w-full text-[10px] sm:text-[11px] font-bold text-zinc-300 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-xl border border-white/10 shadow-sm">
        <span className="flex items-center gap-1 text-amber-400 font-extrabold">
          <Clock className="w-3.5 h-3.5" />
          {recipe.tempoAirFryer} min
        </span>
        <span className="text-[10px] text-zinc-400 uppercase tracking-wide">
          Crocância Máxima
        </span>
      </div>
    </div>
  );
};
