import React from 'react';
import { useApp } from '../context/AppContext';
import { Home, BookOpen, Sparkles, ChefHat } from 'lucide-react';

export const BottomNav: React.FC = () => {
  const { activeTab, setActiveTab, t, shoppingList } = useApp();

  const uncheckedItemsCount = shoppingList.filter(i => !i.checked).length;

  const navItems = [
    {
      id: 'home' as const,
      label: t.navHome,
      icon: Home,
    },
    {
      id: 'recipes' as const,
      label: t.navRecipes,
      icon: BookOpen,
      badge: '60',
    },
    {
      id: 'sauces' as const,
      label: t.navSauces,
      icon: Sparkles,
      badge: '40',
    },
    {
      id: 'kitchen' as const,
      label: t.navKitchen,
      icon: ChefHat,
      count: uncheckedItemsCount > 0 ? uncheckedItemsCount : undefined,
    },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-[#0d0e12]/95 backdrop-blur-xl border-t border-white/10 px-2 py-2">
      <div className="max-w-md mx-auto grid grid-cols-4 gap-1">
        {navItems.map(item => {
          const isActive = activeTab === item.id;
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`relative flex flex-col items-center justify-center py-1.5 px-1 rounded-xl transition-all duration-200 ${
                isActive
                  ? 'text-amber-400 font-bold bg-amber-500/10'
                  : 'text-zinc-400 hover:text-zinc-200 hover:bg-white/5 font-medium'
              }`}
            >
              <div className="relative">
                <Icon className={`w-5 h-5 transition-transform ${isActive ? 'scale-110 stroke-[2.5]' : ''}`} />

                {/* Shopping items counter badge */}
                {item.count !== undefined && (
                  <span className="absolute -top-1.5 -right-2.5 min-w-[16px] h-4 bg-orange-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center px-1 shadow-md">
                    {item.count}
                  </span>
                )}
              </div>

              <span className="text-[11px] mt-1 leading-tight tracking-tight flex items-center gap-1">
                {item.label}
              </span>

              {/* Active bar indicator */}
              {isActive && (
                <span className="absolute -bottom-1 w-6 h-0.5 rounded-full bg-amber-400 shadow-sm shadow-amber-400/50" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};
