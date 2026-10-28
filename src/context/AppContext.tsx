import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, Recipe, Sauce, ShoppingItem } from '../types';
import { translations, Translations } from '../i18n/translations';
import { recipesData } from '../data/recipes';
import { saucesData } from '../data/sauces';
import { soundEffects } from '../utils/audio';
import confetti from 'canvas-confetti';

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;

  // VIP Gating
  hasUnlockedMolhos: boolean;
  toggleVipStatus: () => void;
  unlockSauces: () => void;
  isUnlockModalOpen: boolean;
  setIsUnlockModalOpen: (open: boolean) => void;

  // Gamification & Tracking
  completedRecipes: number[];
  toggleCompleted: (recipeId: number) => void;
  favorites: number[];
  toggleFavorite: (recipeId: number) => void;

  // Shopping List
  shoppingList: ShoppingItem[];
  addShoppingItem: (name: string, recipeTitle?: string) => void;
  addMultipleShoppingItems: (items: string[], recipeTitle?: string) => void;
  toggleShoppingItem: (id: string) => void;
  removeShoppingItem: (id: string) => void;
  clearCheckedItems: () => void;
  clearAllItems: () => void;

  // Modals & Navigation
  activeTab: 'home' | 'recipes' | 'sauces' | 'kitchen';
  setActiveTab: (tab: 'home' | 'recipes' | 'sauces' | 'kitchen') => void;
  selectedRecipe: Recipe | null;
  setSelectedRecipe: (recipe: Recipe | null) => void;
  selectedSauce: Sauce | null;
  setSelectedSauce: (sauce: Sauce | null) => void;
  openRecipeById: (id: number) => void;
  openSauceById: (id: number) => void;

  // Active Timer target
  timerPreset: { minutes: number; temp: number; title?: string } | null;
  startRecipeTimer: (minutes: number, temp: number, title?: string) => void;
  clearTimerPreset: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Language
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('airfryer_lang');
    if (saved === 'en' || saved === 'es' || saved === 'pt') return saved;
    // detect browser language
    const navLang = navigator.language.toLowerCase();
    if (navLang.startsWith('en')) return 'en';
    if (navLang.startsWith('es')) return 'es';
    return 'pt';
  });

  const setLanguage = (lang: Language) => {
    soundEffects.playClick();
    setLanguageState(lang);
    localStorage.setItem('airfryer_lang', lang);
  };

  const t = translations[language];

  // VIP Sauces Gating - 100% Free Access
  const [hasUnlockedMolhos, setHasUnlockedMolhos] = useState<boolean>(true);

  const [isUnlockModalOpen, setIsUnlockModalOpen] = useState(false);

  const toggleVipStatus = () => {
    // Keep as no-op or friendly fanfare since access is already free
    soundEffects.playSuccessFanfare();
  };

  const unlockSauces = () => {
    setHasUnlockedMolhos(true);
    setIsUnlockModalOpen(false);
  };

  // Completed recipes
  const [completedRecipes, setCompletedRecipes] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem('completedRecipes');
      return saved ? JSON.parse(saved) : [1]; // Start with 1 completed as example
    } catch {
      return [1];
    }
  });

  const toggleCompleted = (recipeId: number) => {
    setCompletedRecipes(prev => {
      const exists = prev.includes(recipeId);
      let updated: number[];
      if (exists) {
        soundEffects.playClick();
        updated = prev.filter(id => id !== recipeId);
      } else {
        soundEffects.playSuccessFanfare();
        confetti({
          particleCount: 90,
          spread: 80,
          origin: { y: 0.6 }
        });
        updated = [...prev, recipeId];
      }
      localStorage.setItem('completedRecipes', JSON.stringify(updated));
      return updated;
    });
  };

  // Favorites
  const [favorites, setFavorites] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem('favorites');
      return saved ? JSON.parse(saved) : [1, 11, 41];
    } catch {
      return [1, 11, 41];
    }
  });

  const toggleFavorite = (recipeId: number) => {
    soundEffects.playClick();
    setFavorites(prev => {
      const updated = prev.includes(recipeId) ? prev.filter(id => id !== recipeId) : [...prev, recipeId];
      localStorage.setItem('favorites', JSON.stringify(updated));
      return updated;
    });
  };

  // Shopping List
  const [shoppingList, setShoppingList] = useState<ShoppingItem[]>(() => {
    try {
      const saved = localStorage.getItem('shoppingList');
      return saved ? JSON.parse(saved) : [
        { id: 'item-1', nome: 'Macarrão penne (250g)', checked: false, recipeTitle: 'Pasta Chips' },
        { id: 'item-2', nome: 'Queijo parmesão ralado', checked: true, recipeTitle: 'Pasta Chips' },
      ];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
  }, [shoppingList]);

  const addShoppingItem = (name: string, recipeTitle?: string) => {
    if (!name.trim()) return;
    soundEffects.playClick();
    const newItem: ShoppingItem = {
      id: `item-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      nome: name.trim(),
      checked: false,
      recipeTitle
    };
    setShoppingList(prev => [newItem, ...prev]);
  };

  const addMultipleShoppingItems = (items: string[], recipeTitle?: string) => {
    soundEffects.playClick();
    const newItems: ShoppingItem[] = items.map((it, idx) => ({
      id: `item-${Date.now()}-${idx}`,
      nome: it,
      checked: false,
      recipeTitle
    }));
    setShoppingList(prev => [...newItems, ...prev]);
  };

  const toggleShoppingItem = (id: string) => {
    soundEffects.playClick();
    setShoppingList(prev =>
      prev.map(it => (it.id === id ? { ...it, checked: !it.checked } : it))
    );
  };

  const removeShoppingItem = (id: string) => {
    soundEffects.playClick();
    setShoppingList(prev => prev.filter(it => it.id !== id));
  };

  const clearCheckedItems = () => {
    soundEffects.playClick();
    setShoppingList(prev => prev.filter(it => !it.checked));
  };

  const clearAllItems = () => {
    soundEffects.playClick();
    setShoppingList([]);
  };

  // Active tab & modal states
  const [activeTab, setActiveTabState] = useState<'home' | 'recipes' | 'sauces' | 'kitchen'>('home');
  const setActiveTab = (tab: 'home' | 'recipes' | 'sauces' | 'kitchen') => {
    soundEffects.playClick();
    setActiveTabState(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [selectedSauce, setSelectedSauce] = useState<Sauce | null>(null);

  const openRecipeById = (id: number) => {
    const found = recipesData.find(r => r.id === id);
    if (found) {
      soundEffects.playClick();
      setSelectedRecipe(found);
    }
  };

  const openSauceById = (id: number) => {
    const found = saucesData.find(s => s.id === id);
    if (found) {
      soundEffects.playClick();
      setSelectedSauce(found);
    }
  };

  // Timer Preset
  const [timerPreset, setTimerPreset] = useState<{ minutes: number; temp: number; title?: string } | null>(null);

  const startRecipeTimer = (minutes: number, temp: number, title?: string) => {
    soundEffects.playClick();
    setTimerPreset({ minutes, temp, title });
    if (selectedRecipe) {
      setSelectedRecipe(null);
    }
    setActiveTab('kitchen');
  };

  const clearTimerPreset = () => {
    setTimerPreset(null);
  };

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
        t,
        hasUnlockedMolhos,
        toggleVipStatus,
        unlockSauces,
        isUnlockModalOpen,
        setIsUnlockModalOpen,
        completedRecipes,
        toggleCompleted,
        favorites,
        toggleFavorite,
        shoppingList,
        addShoppingItem,
        addMultipleShoppingItems,
        toggleShoppingItem,
        removeShoppingItem,
        clearCheckedItems,
        clearAllItems,
        activeTab,
        setActiveTab,
        selectedRecipe,
        setSelectedRecipe,
        selectedSauce,
        setSelectedSauce,
        openRecipeById,
        openSauceById,
        timerPreset,
        startRecipeTimer,
        clearTimerPreset
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
