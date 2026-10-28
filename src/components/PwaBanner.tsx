import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { Download, X, Smartphone, Share } from 'lucide-react';

export const PwaBanner: React.FC = () => {
  const { t } = useApp();
  const [visible, setVisible] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem('airfryer_pwa_dismissed');
    if (!dismissed) {
      const timer = setTimeout(() => setVisible(true), 2500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = () => {
    setVisible(false);
    localStorage.setItem('airfryer_pwa_dismissed', 'true');
  };

  if (!visible) return null;

  return (
    <>
      <div className="fixed bottom-18 left-3 right-3 sm:left-auto sm:right-6 sm:max-w-md z-30 bg-zinc-900/95 backdrop-blur-md border border-amber-500/30 rounded-2xl p-3.5 shadow-2xl flex items-center justify-between gap-3 text-white animate-in slide-in-from-bottom duration-300">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center shrink-0">
            <Smartphone className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-white leading-tight">
              {t.pwaInstallTitle}
            </h4>
            <p className="text-[11px] text-zinc-400 mt-0.5 line-clamp-1">
              {t.pwaInstallDesc}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1.5 shrink-0">
          <button
            onClick={() => setShowInstructions(true)}
            className="px-2.5 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-black text-xs font-bold transition-colors cursor-pointer"
          >
            {t.pwaInstallBtn}
          </button>
          <button
            onClick={handleDismiss}
            className="p-1.5 text-zinc-400 hover:text-white rounded-lg transition-colors"
            aria-label={t.pwaDismiss}
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Instructions Modal */}
      {showInstructions && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
          <div className="bg-zinc-900 border border-white/10 rounded-3xl p-6 max-w-sm w-full text-white space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-extrabold text-base text-amber-400 flex items-center gap-2">
                <Smartphone className="w-5 h-5" />
                {t.pwaInstallTitle}
              </h3>
              <button
                onClick={() => setShowInstructions(false)}
                className="p-1 text-zinc-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3 text-xs text-zinc-300 leading-relaxed">
              <div className="bg-zinc-800/60 p-3 rounded-xl border border-white/5 space-y-1">
                <strong className="text-white block font-bold">No iPhone (Safari):</strong>
                <p>1. Toque no botão de <strong>Compartilhar</strong> (ícone com quadrado e seta para cima).</p>
                <p>2. Role para baixo e selecione <strong>"Adicionar à Tela de Início"</strong>.</p>
              </div>

              <div className="bg-zinc-800/60 p-3 rounded-xl border border-white/5 space-y-1">
                <strong className="text-white block font-bold">No Android (Chrome):</strong>
                <p>1. Toque nos <strong>três pontinhos</strong> no canto superior direito.</p>
                <p>2. Selecione <strong>"Instalar aplicativo"</strong> ou <strong>"Adicionar à tela inicial"</strong>.</p>
              </div>
            </div>

            <button
              onClick={() => {
                setShowInstructions(false);
                handleDismiss();
              }}
              className="w-full py-2.5 rounded-xl bg-amber-500 text-black font-bold text-xs"
            >
              Entendido!
            </button>
          </div>
        </div>
      )}
    </>
  );
};
