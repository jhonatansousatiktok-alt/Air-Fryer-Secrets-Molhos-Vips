/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Header } from './components/Header';
import { BottomNav } from './components/BottomNav';
import { HomeTab } from './components/HomeTab';
import { RecipesTab } from './components/RecipesTab';
import { SaucesTab } from './components/SaucesTab';
import { KitchenTab } from './components/KitchenTab';
import { RecipeModal } from './components/RecipeModal';
import { SauceModal } from './components/SauceModal';
import { UnlockModal } from './components/UnlockModal';
import { PwaBanner } from './components/PwaBanner';

const MainContent: React.FC = () => {
  const { activeTab } = useApp();

  return (
    <main className="max-w-4xl mx-auto px-3 sm:px-6 pt-4 pb-24">
      {activeTab === 'home' && <HomeTab />}
      {activeTab === 'recipes' && <RecipesTab />}
      {activeTab === 'sauces' && <SaucesTab />}
      {activeTab === 'kitchen' && <KitchenTab />}
    </main>
  );
};

export default function App() {
  return (
    <AppProvider>
      <div className="min-h-screen bg-[#0d0e12] text-zinc-100 font-sans selection:bg-amber-500 selection:text-black">
        <Header />
        <MainContent />
        <BottomNav />
        <RecipeModal />
        <SauceModal />
        <UnlockModal />
        <PwaBanner />
      </div>
    </AppProvider>
  );
}
