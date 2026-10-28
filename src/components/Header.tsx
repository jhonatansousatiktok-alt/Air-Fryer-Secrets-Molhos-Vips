import React, { useState, useRef, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { Flame, Crown, Globe, ChevronDown, Check } from 'lucide-react';
import { Language } from '../types';

export const Header: React.FC = () => {
  const { language, setLanguage, t } = useApp();
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const languages: { code: Language; name: string; label: string; flag: string }[] = [
    { code: 'pt', name: 'Português', label: 'Brasil', flag: '🇧🇷' },
    { code: 'en', name: 'English', label: 'United States', flag: '🇺🇸' },
    { code: 'es', name: 'Español', label: 'América Latina', flag: '🇲🇽' },
  ];

  const currentLang = languages.find(l => l.code === language) || languages[0];

  return (
    <header className="sticky top-0 z-40 bg-[#0d0e12]/95 backdrop-blur-md border-b border-white/10 px-4 py-3">
      <div className="max-w-5xl mx-auto flex items-center justify-between gap-3">
        {/* Logo / Brand */}
        <div className="flex items-center gap-2.5">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 text-white shadow-lg shadow-orange-500/20">
            <Flame className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-base sm:text-lg tracking-tight text-white">
                Air Fryer <span className="text-amber-400">Secrets</span>
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                PRO
              </span>
            </div>
            <p className="text-[11px] text-zinc-400 hidden xs:block truncate max-w-[210px] sm:max-w-none">
              60 Receitas + 40 Molhos Secretos
            </p>
          </div>
        </div>

        {/* Right Controls: Full Access Badge & Language Switcher */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Full Access Status Badge */}
          <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-amber-500/15 border border-amber-500/30 text-amber-300">
            <Crown className="w-3.5 h-3.5 text-amber-400 fill-amber-400/20" />
            <span>Acesso Completo</span>
          </div>

          {/* Language Toggle Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-1.5 bg-zinc-800/90 hover:bg-zinc-700 text-white px-2.5 py-1.5 rounded-lg border border-white/10 text-xs font-medium transition-colors shadow-sm"
              aria-label={t.switchLanguage}
            >
              <span className="text-base leading-none">{currentLang.flag}</span>
              <span className="hidden sm:inline font-semibold">{currentLang.code.toUpperCase()}</span>
              <ChevronDown className={`w-3.5 h-3.5 text-zinc-400 transition-transform ${langDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu */}
            {langDropdownOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-zinc-900 border border-white/15 rounded-xl shadow-2xl py-1.5 z-50 overflow-hidden backdrop-blur-xl animate-in fade-in zoom-in-95 duration-150">
                <div className="px-3 py-1.5 border-b border-white/10 text-[10px] font-bold uppercase tracking-wider text-zinc-400 flex items-center justify-between">
                  <span>{t.switchLanguage}</span>
                  <Globe className="w-3 h-3 text-zinc-400" />
                </div>
                {languages.map(item => (
                  <button
                    key={item.code}
                    onClick={() => {
                      setLanguage(item.code);
                      setLangDropdownOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2.5 text-left text-xs transition-colors ${
                      language === item.code
                        ? 'bg-amber-500/20 text-amber-300 font-semibold'
                        : 'text-zinc-200 hover:bg-white/5'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-lg leading-none">{item.flag}</span>
                      <div>
                        <div className="font-medium text-white">{item.name}</div>
                        <div className="text-[10px] text-zinc-400">{item.label}</div>
                      </div>
                    </div>
                    {language === item.code && <Check className="w-4 h-4 text-amber-400" />}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
