import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { saucesData } from '../data/sauces';
import { SauceImage } from './SauceImage';
import {
  Sparkles,
  Unlock,
  Clock,
  Search
} from 'lucide-react';
import { soundEffects } from '../utils/audio';

export const SaucesTab: React.FC = () => {
  const {
    t,
    language,
    setSelectedSauce
  } = useApp();

  const [selectedCat, setSelectedCat] = useState<number | 0>(0); // 0 = all
  const [sauceSearch, setSauceSearch] = useState('');

  const categories = [
    { id: 0, label: t.allCategories },
    { id: 1, label: t.sauceCat1 },
    { id: 2, label: t.sauceCat2 },
    { id: 3, label: t.sauceCat3 },
    { id: 4, label: t.sauceCat4 },
  ];

  const filteredSauces = saucesData.filter(sauce => {
    if (selectedCat !== 0 && sauce.categoria !== selectedCat) {
      return false;
    }
    if (sauceSearch.trim()) {
      const q = sauceSearch.toLowerCase();
      const matchTitle =
        sauce.titulo.toLowerCase().includes(q) ||
        sauce.titulo_en.toLowerCase().includes(q) ||
        sauce.titulo_es.toLowerCase().includes(q);
      const matchStyle =
        sauce.estilo.toLowerCase().includes(q) ||
        sauce.estilo_en.toLowerCase().includes(q) ||
        sauce.estilo_es.toLowerCase().includes(q);
      if (!matchTitle && !matchStyle) return false;
    }
    return true;
  });

  const handleSauceClick = (sauce: typeof saucesData[0]) => {
    soundEffects.playClick();
    setSelectedSauce(sauce);
  };

  return (
    <div className="space-y-6 pb-20 animate-in fade-in duration-200">
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-zinc-900 via-[#181922] to-[#121318] border border-amber-500/30 p-5 sm:p-7 shadow-xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-2 flex-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider">
              <Unlock className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400">{t.unlockedBadge} • Acesso Livre</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              {t.saucesCatalogTitle}
            </h1>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed max-w-xl">
              {t.saucesCatalogSubtitle}
            </p>
          </div>

          <div className="flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 px-3.5 py-2 rounded-2xl">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-xs font-bold text-amber-300">
              40 Receitas Liberadas
            </span>
          </div>
        </div>
      </div>

      {/* Category Pills & Search */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar text-xs">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => {
                soundEffects.playClick();
                setSelectedCat(cat.id);
              }}
              className={`whitespace-nowrap px-3.5 py-1.5 rounded-xl font-bold transition-all shrink-0 border ${
                selectedCat === cat.id
                  ? 'bg-amber-500 text-black border-amber-500 shadow-md shadow-amber-500/20'
                  : 'bg-zinc-900 text-zinc-300 border-white/5 hover:bg-zinc-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
          <input
            type="text"
            value={sauceSearch}
            onChange={e => setSauceSearch(e.target.value)}
            placeholder="Buscar por molho (Shack, Cane's, Ranch, Buffalo...)"
            className="w-full bg-zinc-900 border border-white/10 rounded-2xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500/50"
          />
        </div>
      </div>

      {/* Sauces Grid (40 items - all completely accessible) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        {filteredSauces.map(sauce => {
          const title = language === 'en' ? sauce.titulo_en : language === 'es' ? sauce.titulo_es : sauce.titulo;
          const style = language === 'en' ? sauce.estilo_en : language === 'es' ? sauce.estilo_es : sauce.estilo;
          const desc = language === 'en' ? sauce.descricao_en : language === 'es' ? sauce.descricao_es : sauce.descricao;

          return (
            <div
              key={sauce.id}
              onClick={() => handleSauceClick(sauce)}
              className="group relative rounded-2xl p-4 sm:p-5 transition-all duration-200 cursor-pointer flex flex-col justify-between overflow-hidden bg-zinc-900 border border-white/10 hover:border-amber-500/50 hover:bg-zinc-800/80 shadow-md"
            >
              <div>
                {/* Visual Cover */}
                <div className="w-full h-28 mb-3 rounded-2xl overflow-hidden">
                  <SauceImage
                    sauce={sauce}
                    title={title}
                    className="w-full h-full"
                  />
                </div>

                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-500/15 text-amber-300 border border-amber-500/20">
                    {style}
                  </span>
                  <span className="text-xs text-zinc-400 font-semibold flex items-center gap-1">
                    <Clock className="w-3 h-3 text-amber-400" />
                    {sauce.tempoPreparo} min
                  </span>
                </div>

                <h3 className="font-extrabold text-sm sm:text-base text-white group-hover:text-amber-300 transition-colors">
                  #{sauce.id} • {title}
                </h3>
                <p className="text-xs text-zinc-400 mt-1 line-clamp-2">
                  {desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs">
                <span className="text-[11px] text-zinc-400">
                  {sauce.ingredientes.length} ingredientes
                </span>
                <span className="text-[11px] font-bold text-amber-400 group-hover:translate-x-0.5 transition-transform">
                  Ver Receita Completa ➔
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
