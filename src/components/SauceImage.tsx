import React, { useState } from 'react';
import { Sauce } from '../types';
import { Clock, Sparkles } from 'lucide-react';
import { sauceImageMap } from '../data/recipeImages';

interface SauceImageProps {
  sauce: Sauce;
  title: string;
  className?: string;
  isHero?: boolean;
}

const categoryVisuals: Record<number, { bg: string; icon: string; glow: string; label: string }> = {
  1: {
    bg: 'from-amber-600/30 via-orange-600/20 to-zinc-950',
    icon: '🍔',
    glow: 'rgba(245, 158, 11, 0.25)',
    label: 'FAST-FOOD ICON'
  },
  2: {
    bg: 'from-red-600/30 via-amber-700/20 to-zinc-950',
    icon: '🍗',
    glow: 'rgba(239, 68, 68, 0.25)',
    label: 'WINGS & BBQ'
  },
  3: {
    bg: 'from-emerald-600/30 via-teal-700/20 to-zinc-950',
    icon: '🧄',
    glow: 'rgba(16, 185, 129, 0.25)',
    label: 'CREAMY DIP'
  },
  4: {
    bg: 'from-orange-600/30 via-red-700/20 to-zinc-950',
    icon: '🌶️',
    glow: 'rgba(249, 115, 22, 0.25)',
    label: 'FUSION & SPICY'
  },
};

export const SauceImage: React.FC<SauceImageProps> = ({
  sauce,
  title,
  className = '',
  isHero = false
}) => {
  const [hasError, setHasError] = useState(false);
  const visual = categoryVisuals[sauce.categoria] || categoryVisuals[1];
  const photoUrl = sauce.imagem || sauceImageMap[sauce.id];

  if (photoUrl && !hasError) {
    return (
      <div
        className={`relative overflow-hidden rounded-2xl bg-zinc-950 flex flex-col justify-between p-3.5 group select-none border border-white/10 ${className}`}
      >
        <img
          src={photoUrl}
          alt={title}
          referrerPolicy="no-referrer"
          loading="lazy"
          onError={() => setHasError(true)}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
        />

        {/* Gradient Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/50 pointer-events-none" />

        {/* Top Badges */}
        <div className="relative z-10 flex items-center justify-between w-full">
          <span className="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-lg bg-black/75 text-amber-300 border border-amber-500/40 backdrop-blur-md flex items-center gap-1 shadow-md">
            <Sparkles className="w-2.5 h-2.5 text-amber-400" />
            #{sauce.id} {visual.label}
          </span>
          <span className="text-[9px] font-bold text-zinc-200 bg-black/70 px-2 py-0.5 rounded-lg border border-white/15 backdrop-blur-md flex items-center gap-1 shadow-md">
            <Clock className="w-2.5 h-2.5 text-amber-400" />
            {sauce.tempoPreparo}m
          </span>
        </div>

        {/* Center icon in hero */}
        <div className="relative z-10 my-auto flex items-center justify-center py-1">
          {isHero && (
            <div className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center text-xl shadow-xl">
              {sauce.icone || visual.icon}
            </div>
          )}
        </div>

        {/* Bottom Style Bar */}
        <div className="relative z-10 text-center w-full text-[10px] font-bold text-zinc-200 bg-black/80 backdrop-blur-md px-2.5 py-1.5 rounded-xl border border-white/15 truncate shadow-lg">
          {sauce.estilo}
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${visual.bg} border border-white/10 flex flex-col justify-between p-3 group select-none ${className}`}
      style={{
        boxShadow: `inset 0 0 35px ${visual.glow}`
      }}
    >
      <div className="absolute top-0 right-0 -mr-6 -mt-6 w-24 h-24 rounded-full bg-white/5 blur-xl pointer-events-none" />

      {/* Top Tag */}
      <div className="relative z-10 flex items-center justify-between w-full">
        <span className="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-black/60 text-amber-300 border border-amber-500/30 backdrop-blur-sm">
          #{sauce.id} {visual.label}
        </span>
        <span className="text-[9px] font-bold text-zinc-300 bg-black/50 px-1.5 py-0.5 rounded border border-white/10 backdrop-blur-sm flex items-center gap-1">
          <Clock className="w-2.5 h-2.5 text-amber-400" />
          {sauce.tempoPreparo}m
        </span>
      </div>

      {/* Center Icon */}
      <div className="relative z-10 my-auto flex items-center justify-center py-2">
        <span className="text-4xl transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_8px_16px_rgba(0,0,0,0.5)]">
          {sauce.icone || visual.icon}
        </span>
      </div>

      {/* Bottom Style Bar */}
      <div className="relative z-10 text-center w-full text-[10px] font-bold text-zinc-300 bg-black/60 backdrop-blur-md px-2 py-1 rounded-lg border border-white/10 truncate">
        {sauce.estilo}
      </div>
    </div>
  );
};
