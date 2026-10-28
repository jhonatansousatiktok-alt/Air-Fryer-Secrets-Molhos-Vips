import React from 'react';
import { useApp } from '../context/AppContext';
import { Sparkles, CheckCircle2, ShieldCheck, Flame, X, Lock, Users, Zap } from 'lucide-react';

export const UnlockModal: React.FC = () => {
  const { isUnlockModalOpen, setIsUnlockModalOpen, unlockSauces, t } = useApp();

  if (!isUnlockModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-gradient-to-b from-zinc-900 via-zinc-900 to-[#121318] border border-amber-500/40 rounded-3xl p-6 sm:p-7 shadow-2xl shadow-amber-500/10 text-white my-8">
        {/* Close button */}
        <button
          onClick={() => setIsUnlockModalOpen(false)}
          className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition-colors"
          aria-label={t.close}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header with glowing badge */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-600 text-black shadow-lg shadow-amber-500/30 mx-auto">
            <Flame className="w-9 h-9 fill-black" />
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-bold tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.lockedBadge}</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-black tracking-tight text-white leading-tight">
            {t.unlockModalTitle}
          </h2>

          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
            {t.unlockModalSubtitle}
          </p>
        </div>

        {/* Benefits List */}
        <div className="mt-5 space-y-3 bg-zinc-800/50 border border-white/5 rounded-2xl p-4 sm:p-5">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <span className="text-xs sm:text-sm text-zinc-200 font-medium">
              {t.unlockBenefit1}
            </span>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <span className="text-xs sm:text-sm text-zinc-200 font-medium">
              {t.unlockBenefit2}
            </span>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <span className="text-xs sm:text-sm text-zinc-200 font-medium">
              {t.unlockBenefit3}
            </span>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <span className="text-xs sm:text-sm text-zinc-200 font-medium">
              {t.unlockBenefit4}
            </span>
          </div>
        </div>

        {/* Social Proof */}
        <div className="mt-4 flex items-center justify-center gap-2 text-xs text-amber-200/90 font-medium bg-amber-500/10 py-2 px-3 rounded-xl border border-amber-500/20">
          <Users className="w-4 h-4 text-amber-400" />
          <span>{t.unlockSocialProof}</span>
        </div>

        {/* Price Anchoring & CTA Button */}
        <div className="mt-5 text-center space-y-3">
          <div className="flex items-center justify-center gap-3">
            <span className="text-sm sm:text-base text-zinc-500 line-through">
              {t.upsellOriginalPrice}
            </span>
            <span className="text-2xl sm:text-3xl font-extrabold text-amber-400">
              {t.upsellPrice}
            </span>
            <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              -70% OFF
            </span>
          </div>

          <button
            onClick={unlockSauces}
            className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 hover:from-amber-400 hover:via-orange-400 hover:to-amber-400 text-black font-extrabold text-sm sm:text-base tracking-wide uppercase transition-all shadow-xl shadow-orange-500/30 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 group cursor-pointer"
          >
            <Zap className="w-5 h-5 fill-black group-hover:animate-bounce" />
            <span>{t.unlockButton}</span>
          </button>

          {/* Guarantee Badge */}
          <div className="flex items-center justify-center gap-2 text-[11px] text-zinc-400 pt-1">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>{t.unlockGuarantee}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
