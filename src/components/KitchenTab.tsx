import React, { useState, useEffect, useRef } from 'react';
import { useApp } from '../context/AppContext';
import { soundEffects } from '../utils/audio';
import {
  Timer as TimerIcon,
  ShoppingBag,
  ArrowRightLeft,
  Play,
  Pause,
  RotateCcw,
  Bell,
  Share2,
  Trash2,
  Plus,
  Check,
  CheckCircle2,
  Flame,
  Clock,
  Sparkles
} from 'lucide-react';

export const KitchenTab: React.FC = () => {
  const {
    t,
    language,
    shoppingList,
    addShoppingItem,
    toggleShoppingItem,
    removeShoppingItem,
    clearCheckedItems,
    clearAllItems,
    timerPreset,
    clearTimerPreset
  } = useApp();

  const [activeSubTab, setActiveSubTab] = useState<'timer' | 'list' | 'converter'>('timer');

  // ==========================================
  // TIMER PRO STATE
  // ==========================================
  const [selectedMinutes, setSelectedMinutes] = useState(12);
  const [selectedTemp, setSelectedTemp] = useState(190);
  const [useFahrenheit, setUseFahrenheit] = useState(false);
  const [shakeAlertEnabled, setShakeAlertEnabled] = useState(true);

  const [timeLeft, setTimeLeft] = useState(12 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [shakeTriggered, setShakeTriggered] = useState(false);
  const [timerFinished, setTimerFinished] = useState(false);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Sync if preset was triggered from a recipe
  useEffect(() => {
    if (timerPreset) {
      setSelectedMinutes(timerPreset.minutes);
      setSelectedTemp(timerPreset.temp);
      setTimeLeft(timerPreset.minutes * 60);
      setIsRunning(true);
      setShakeTriggered(false);
      setTimerFinished(false);
      clearTimerPreset();
    }
  }, [timerPreset, clearTimerPreset]);

  // Timer Tick Interval
  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            clearInterval(intervalRef.current!);
            setIsRunning(false);
            setTimerFinished(true);
            soundEffects.playDoneAlarm();
            return 0;
          }

          // Check shake halfway alert
          const totalSeconds = selectedMinutes * 60;
          const halfway = Math.floor(totalSeconds / 2);
          if (shakeAlertEnabled && prev === halfway && !shakeTriggered) {
            setShakeTriggered(true);
            soundEffects.playShakeChime();
          }

          return prev - 1;
        });
      }, 1000);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isRunning, selectedMinutes, shakeAlertEnabled, shakeTriggered]);

  const handleStartTimer = () => {
    soundEffects.playClick();
    if (timeLeft === 0) {
      setTimeLeft(selectedMinutes * 60);
    }
    setTimerFinished(false);
    setShakeTriggered(false);
    setIsRunning(true);
  };

  const handlePauseTimer = () => {
    soundEffects.playClick();
    setIsRunning(false);
  };

  const handleResetTimer = () => {
    soundEffects.playClick();
    setIsRunning(false);
    setTimeLeft(selectedMinutes * 60);
    setShakeTriggered(false);
    setTimerFinished(false);
  };

  const adjustMinutes = (delta: number) => {
    soundEffects.playClick();
    setSelectedMinutes(prev => {
      const next = Math.max(1, Math.min(60, prev + delta));
      if (!isRunning) {
        setTimeLeft(next * 60);
      }
      return next;
    });
  };

  const adjustTemp = (delta: number) => {
    soundEffects.playClick();
    setSelectedTemp(prev => Math.max(80, Math.min(220, prev + delta)));
  };

  const minutesDisplay = Math.floor(timeLeft / 60);
  const secondsDisplay = timeLeft % 60;
  const formattedTime = `${String(minutesDisplay).padStart(2, '0')}:${String(secondsDisplay).padStart(2, '0')}`;

  const totalSecs = selectedMinutes * 60;
  const progressRatio = totalSecs > 0 ? (totalSecs - timeLeft) / totalSecs : 0;

  // Temperature display
  const displayTemp = useFahrenheit
    ? Math.round((selectedTemp * 9) / 5 + 32)
    : selectedTemp;

  // ==========================================
  // SHOPPING LIST STATE
  // ==========================================
  const [newItemName, setNewItemName] = useState('');
  const [copiedLink, setCopiedLink] = useState(false);

  const handleAddNewItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (newItemName.trim()) {
      addShoppingItem(newItemName);
      setNewItemName('');
    }
  };

  const handleShareWhatsapp = () => {
    soundEffects.playClick();
    const itemsText = shoppingList
      .map(i => `${i.checked ? '✅' : '⬜'} ${i.nome}`)
      .join('\n');

    const message = `🛒 *Lista de Compras - Air Fryer Secrets*\n\n${itemsText}\n\n_Gerado pelo InfoApp Air Fryer Secrets_`;
    const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 3000);
  };

  // ==========================================
  // CONVERTER TABLE DATA
  // ==========================================
  const conversionRows = [
    { oven: '160°C (325°F)', air: '140°C (285°F)', time: '- 20%' },
    { oven: '180°C (350°F)', air: '160°C (320°F)', time: '- 20% a 25%' },
    { oven: '200°C (400°F)', air: '180°C (360°F)', time: '- 25%' },
    { oven: '220°C (425°F)', air: '200°C (390°F)', time: '- 25% a 30%' },
    { oven: '240°C (475°F)', air: '205°C (400°F)', time: '- 30%' },
  ];

  return (
    <div className="space-y-6 pb-20 animate-in fade-in duration-200">
      {/* Tab Switcher Pills */}
      <div className="flex items-center gap-1.5 bg-zinc-900 p-1.5 rounded-2xl border border-white/10">
        <button
          onClick={() => {
            soundEffects.playClick();
            setActiveSubTab('timer');
          }}
          className={`flex-1 py-2 px-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all ${
            activeSubTab === 'timer'
              ? 'bg-amber-500 text-black shadow-md'
              : 'text-zinc-400 hover:text-white'
          }`}
        >
          <TimerIcon className="w-4 h-4" />
          <span>{t.timerTab}</span>
        </button>

        <button
          onClick={() => {
            soundEffects.playClick();
            setActiveSubTab('list');
          }}
          className={`flex-1 py-2 px-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all relative ${
            activeSubTab === 'list'
              ? 'bg-amber-500 text-black shadow-md'
              : 'text-zinc-400 hover:text-white'
          }`}
        >
          <ShoppingBag className="w-4 h-4" />
          <span>{t.listTab}</span>
          {shoppingList.filter(i => !i.checked).length > 0 && (
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping" />
          )}
        </button>

        <button
          onClick={() => {
            soundEffects.playClick();
            setActiveSubTab('converter');
          }}
          className={`flex-1 py-2 px-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all ${
            activeSubTab === 'converter'
              ? 'bg-amber-500 text-black shadow-md'
              : 'text-zinc-400 hover:text-white'
          }`}
        >
          <ArrowRightLeft className="w-4 h-4" />
          <span className="hidden sm:inline">{t.converterTab}</span>
          <span className="sm:hidden">Conversão</span>
        </button>
      </div>

      {/* ================================================= */}
      {/* 1. TIMER PRO */}
      {/* ================================================= */}
      {activeSubTab === 'timer' && (
        <div className="space-y-6">
          {/* Main Visual Clock Box */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-zinc-900 via-[#181922] to-zinc-950 border border-amber-500/30 p-6 sm:p-8 text-center shadow-2xl">
            {/* Shake Banner Alert Notification */}
            {shakeTriggered && isRunning && (
              <div className="mb-4 p-3 bg-amber-500/20 border-2 border-amber-400 rounded-2xl animate-bounce flex items-center justify-center gap-2 text-amber-300 font-extrabold text-xs sm:text-sm">
                <Bell className="w-4 h-4 text-amber-400" />
                <span>{t.timerShakeNow}</span>
              </div>
            )}

            {/* Done Finished Banner */}
            {timerFinished && (
              <div className="mb-4 p-4 bg-emerald-500/20 border-2 border-emerald-400 rounded-2xl animate-pulse flex items-center justify-center gap-2 text-emerald-300 font-black text-xs sm:text-sm">
                <Sparkles className="w-5 h-5 text-emerald-400" />
                <span>{t.timerDone}</span>
              </div>
            )}

            {/* Circular Dial / Digital Countdown */}
            <div className="relative flex flex-col items-center justify-center my-4">
              <div className="text-6xl sm:text-7xl font-black text-white tracking-tighter tabular-nums font-mono drop-shadow-[0_0_25px_rgba(245,158,11,0.25)]">
                {formattedTime}
              </div>

              <div className="flex items-center gap-2 mt-2">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20 flex items-center gap-1.5">
                  <Flame className="w-3.5 h-3.5" />
                  {displayTemp}°{useFahrenheit ? 'F' : 'C'}
                </span>
                {isRunning && (
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    Assando
                  </span>
                )}
              </div>
            </div>

            {/* Controls (Start, Pause, Reset) */}
            <div className="flex items-center justify-center gap-3 mt-6">
              {!isRunning ? (
                <button
                  onClick={handleStartTimer}
                  className="py-3.5 px-8 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-black font-extrabold text-sm uppercase tracking-wide transition-all shadow-xl shadow-orange-500/25 flex items-center gap-2 cursor-pointer active:scale-95"
                >
                  <Play className="w-5 h-5 fill-black" />
                  <span>{t.timerStart}</span>
                </button>
              ) : (
                <button
                  onClick={handlePauseTimer}
                  className="py-3.5 px-8 rounded-2xl bg-zinc-800 hover:bg-zinc-700 text-amber-400 font-extrabold text-sm uppercase tracking-wide border border-amber-500/40 transition-all flex items-center gap-2 cursor-pointer active:scale-95"
                >
                  <Pause className="w-5 h-5" />
                  <span>{t.timerPause}</span>
                </button>
              )}

              <button
                onClick={handleResetTimer}
                className="p-3.5 rounded-2xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white border border-white/10 transition-colors"
                title={t.timerReset}
              >
                <RotateCcw className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Time & Temp Adjusters */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Minutes Selector */}
            <div className="bg-zinc-900 border border-white/10 rounded-2xl p-4 space-y-3">
              <div className="flex items-center justify-between text-xs text-zinc-300 font-bold">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-amber-400" />
                  {t.timerMinutes}
                </span>
                <span className="text-base text-amber-400 font-black">{selectedMinutes} min</span>
              </div>
              <div className="flex items-center justify-between gap-1.5">
                <button
                  onClick={() => adjustMinutes(-5)}
                  className="flex-1 py-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded-xl text-xs font-bold transition-colors"
                >
                  -5
                </button>
                <button
                  onClick={() => adjustMinutes(-1)}
                  className="flex-1 py-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded-xl text-xs font-bold transition-colors"
                >
                  -1
                </button>
                <button
                  onClick={() => adjustMinutes(+1)}
                  className="flex-1 py-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded-xl text-xs font-bold transition-colors"
                >
                  +1
                </button>
                <button
                  onClick={() => adjustMinutes(+5)}
                  className="flex-1 py-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded-xl text-xs font-bold transition-colors"
                >
                  +5
                </button>
              </div>
            </div>

            {/* Temperature Selector */}
            <div className="bg-zinc-900 border border-white/10 rounded-2xl p-4 space-y-3">
              <div className="flex items-center justify-between text-xs text-zinc-300 font-bold">
                <span className="flex items-center gap-1.5">
                  <Flame className="w-4 h-4 text-orange-400" />
                  {t.timerTemp}
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-base text-orange-400 font-black">
                    {displayTemp}°{useFahrenheit ? 'F' : 'C'}
                  </span>
                  <button
                    onClick={() => setUseFahrenheit(!useFahrenheit)}
                    className="text-[10px] text-zinc-400 hover:text-white bg-zinc-800 px-2 py-0.5 rounded-lg border border-white/5"
                  >
                    °C / °F
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between gap-1.5">
                <button
                  onClick={() => adjustTemp(-10)}
                  className="flex-1 py-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded-xl text-xs font-bold transition-colors"
                >
                  -10°
                </button>
                <button
                  onClick={() => adjustTemp(-5)}
                  className="flex-1 py-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded-xl text-xs font-bold transition-colors"
                >
                  -5°
                </button>
                <button
                  onClick={() => adjustTemp(+5)}
                  className="flex-1 py-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded-xl text-xs font-bold transition-colors"
                >
                  +5°
                </button>
                <button
                  onClick={() => adjustTemp(+10)}
                  className="flex-1 py-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded-xl text-xs font-bold transition-colors"
                >
                  +10°
                </button>
              </div>
            </div>
          </div>

          {/* Shake Basket Alert Toggle */}
          <div className="bg-zinc-900/60 border border-white/10 rounded-2xl p-4 flex items-center justify-between gap-4">
            <div className="space-y-0.5">
              <div className="font-bold text-xs sm:text-sm text-white flex items-center gap-2">
                <Bell className="w-4 h-4 text-amber-400" />
                {t.timerShakeAlert}
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                {t.timerShakeAlertDesc}
              </p>
            </div>
            <button
              onClick={() => setShakeAlertEnabled(!shakeAlertEnabled)}
              className={`w-12 h-6 rounded-full transition-colors relative shrink-0 ${
                shakeAlertEnabled ? 'bg-amber-500' : 'bg-zinc-700'
              }`}
            >
              <span
                className={`block w-4 h-4 rounded-full bg-black transition-transform absolute top-1 ${
                  shakeAlertEnabled ? 'left-7' : 'left-1'
                }`}
              />
            </button>
          </div>
        </div>
      )}

      {/* ================================================= */}
      {/* 2. SMART SHOPPING LIST */}
      {/* ================================================= */}
      {activeSubTab === 'list' && (
        <div className="space-y-5">
          {/* Add custom item form */}
          <form onSubmit={handleAddNewItem} className="flex gap-2">
            <input
              type="text"
              value={newItemName}
              onChange={e => setNewItemName(e.target.value)}
              placeholder={t.listAddPlaceholder}
              className="flex-1 bg-zinc-900 border border-white/10 rounded-2xl px-4 py-3 text-xs sm:text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500/50"
            />
            <button
              type="submit"
              className="px-5 py-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs sm:text-sm flex items-center gap-1.5 transition-all shadow-md shrink-0 cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>{t.listAddBtn}</span>
            </button>
          </form>

          {/* Quick Actions (WhatsApp, Clear Checked, Clear All) */}
          <div className="flex flex-wrap items-center justify-between gap-2">
            <button
              onClick={handleShareWhatsapp}
              disabled={shoppingList.length === 0}
              className="py-2.5 px-4 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 text-emerald-300 font-bold text-xs flex items-center gap-2 transition-all disabled:opacity-50"
            >
              <Share2 className="w-4 h-4 text-emerald-400" />
              <span>{t.listShareWhatsapp}</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                onClick={clearCheckedItems}
                className="text-xs text-zinc-400 hover:text-white px-2 py-1 rounded-lg hover:bg-white/5 transition-colors"
              >
                {t.listClearChecked}
              </button>
              <button
                onClick={clearAllItems}
                className="text-xs text-rose-400 hover:text-rose-300 px-2 py-1 rounded-lg hover:bg-rose-500/10 transition-colors"
              >
                {t.listClearAll}
              </button>
            </div>
          </div>

          {/* Items List */}
          {shoppingList.length === 0 ? (
            <div className="text-center py-12 bg-zinc-900/40 rounded-3xl border border-white/5 p-6 space-y-2">
              <ShoppingBag className="w-8 h-8 text-zinc-600 mx-auto mb-2" />
              <p className="text-xs sm:text-sm text-zinc-400 max-w-sm mx-auto">
                {t.listEmpty}
              </p>
            </div>
          ) : (
            <div className="space-y-2">
              {shoppingList.map(item => (
                <div
                  key={item.id}
                  className={`flex items-center justify-between p-3.5 rounded-2xl border transition-all ${
                    item.checked
                      ? 'bg-zinc-900/40 border-white/5 opacity-60'
                      : 'bg-zinc-900 border-white/10 hover:border-amber-500/30'
                  }`}
                >
                  <label
                    onClick={() => toggleShoppingItem(item.id)}
                    className="flex items-start gap-3 cursor-pointer flex-1"
                  >
                    <input
                      type="checkbox"
                      checked={item.checked}
                      onChange={() => {}}
                      className="mt-0.5 rounded border-zinc-700 text-amber-500 focus:ring-0 focus:ring-offset-0 bg-zinc-800"
                    />
                    <div>
                      <span
                        className={`text-xs sm:text-sm font-medium ${
                          item.checked ? 'line-through text-zinc-500' : 'text-zinc-200'
                        }`}
                      >
                        {item.nome}
                      </span>
                      {item.recipeTitle && (
                        <span className="block text-[10px] text-zinc-500 mt-0.5">
                          Para: {item.recipeTitle}
                        </span>
                      )}
                    </div>
                  </label>

                  <button
                    onClick={() => removeShoppingItem(item.id)}
                    className="p-1.5 text-zinc-500 hover:text-rose-400 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* ================================================= */}
      {/* 3. OVEN TO AIR FRYER CONVERTER TABLE */}
      {/* ================================================= */}
      {activeSubTab === 'converter' && (
        <div className="space-y-5">
          <div className="bg-zinc-900 border border-white/10 rounded-3xl p-5 sm:p-6 space-y-4">
            <div>
              <h3 className="text-base sm:text-lg font-black text-white">
                {t.converterTitle}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 mt-1 leading-relaxed">
                {t.converterSubtitle}
              </p>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-white/10 text-zinc-400 text-[11px] uppercase tracking-wider">
                    <th className="py-2.5 px-3">{t.ovenTemp}</th>
                    <th className="py-2.5 px-3 text-amber-400">{t.airFryerTemp}</th>
                    <th className="py-2.5 px-3 text-emerald-400">{t.timeReduction}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 font-medium text-zinc-200">
                  {conversionRows.map((r, i) => (
                    <tr key={i} className="hover:bg-white/5 transition-colors">
                      <td className="py-3 px-3">{r.oven}</td>
                      <td className="py-3 px-3 font-bold text-amber-400">{r.air}</td>
                      <td className="py-3 px-3 text-emerald-400">{r.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Callout */}
            <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200 leading-relaxed">
              {t.converterNote}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
