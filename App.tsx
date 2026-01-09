
import React, { useState, useEffect, useMemo } from 'react';
import { DUAS } from './data';
import { Category, View, Dua } from './types';
import { DuaCard } from './components/DuaCard';
import { HomeIcon, CategoriesIcon, HeartIcon, SearchIcon, BackIcon } from './components/Icons';

const App: React.FC = () => {
  const [view, setView] = useState<View>('all');
  const [favorites, setFavorites] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

  // Load favorites from local storage
  useEffect(() => {
    const saved = localStorage.getItem('nur-duas-favorites');
    if (saved) {
      setFavorites(JSON.parse(saved));
    }
  }, []);

  // Save favorites to local storage
  const toggleFavorite = (id: string) => {
    setFavorites(prev => {
      const next = prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id];
      localStorage.setItem('nur-duas-favorites', JSON.stringify(next));
      return next;
    });
  };

  const filteredDuas = useMemo(() => {
    let result = DUAS;

    if (view === 'favorites') {
      result = result.filter(d => favorites.includes(d.id));
    } else if (view === 'categories' && selectedCategory) {
      result = result.filter(d => d.category === selectedCategory);
    } else if (view === 'search' || (view === 'all' && searchQuery)) {
      const q = searchQuery.toLowerCase();
      result = result.filter(d => 
        d.title.toLowerCase().includes(q) || 
        d.translation.toLowerCase().includes(q) ||
        d.category.toLowerCase().includes(q)
      );
    }

    return result;
  }, [view, favorites, searchQuery, selectedCategory]);

  const categories = Object.values(Category);

  const renderContent = () => {
    if (view === 'categories' && !selectedCategory) {
      return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className="p-6 bg-white border border-stone-100 rounded-2xl text-left hover:border-emerald-200 hover:bg-emerald-50 transition-all shadow-sm"
            >
              <div className="w-10 h-10 bg-emerald-100 text-emerald-700 rounded-xl flex items-center justify-center mb-4">
                <CategoriesIcon />
              </div>
              <h4 className="font-bold text-stone-800">{cat}</h4>
              <p className="text-xs text-stone-400 mt-1">
                {DUAS.filter(d => d.category === cat).length} Supplications
              </p>
            </button>
          ))}
        </div>
      );
    }

    if (filteredDuas.length === 0) {
      return (
        <div className="flex flex-col items-center justify-center py-20 text-stone-400">
          <div className="w-16 h-16 mb-4 opacity-20">
            <SearchIcon className="w-full h-full" />
          </div>
          <p className="text-lg font-medium">No Duas found</p>
          <p className="text-sm">Try adjusting your filters or search.</p>
        </div>
      );
    }

    return (
      <div className="grid gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
        {filteredDuas.map(dua => (
          <DuaCard 
            key={dua.id} 
            dua={dua} 
            isFavorite={favorites.includes(dua.id)}
            onToggleFavorite={toggleFavorite}
          />
        ))}
      </div>
    );
  };

  const getHeaderTitle = () => {
    if (view === 'all') return 'All Supplications';
    if (view === 'favorites') return 'Favorites';
    if (view === 'categories') return selectedCategory ? selectedCategory : 'Categories';
    if (view === 'search') return 'Search Results';
    return 'Nur Duas';
  };

  return (
    <div className="min-h-screen bg-stone-50 pb-24 font-sans text-stone-900">
      {/* Top Header */}
      <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-stone-100">
        <div className="max-w-2xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {view === 'categories' && selectedCategory && (
              <button 
                onClick={() => setSelectedCategory(null)}
                className="p-2 -ml-2 hover:bg-stone-100 rounded-full transition-colors"
              >
                <BackIcon />
              </button>
            )}
            <h1 className="text-xl font-bold tracking-tight text-stone-900">
              {getHeaderTitle()}
            </h1>
          </div>
          <div className="text-emerald-600">
            <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center font-bold text-sm">
              N
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-2xl mx-auto px-4 py-8">
        {/* Search Bar (Persistent if in search mode or all) */}
        {(view === 'all' || view === 'search') && (
          <div className="mb-8 relative group">
            <input 
              type="text"
              placeholder="Search by title, meaning or category..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                if (view !== 'search' && e.target.value) setView('search');
                if (view === 'search' && !e.target.value) setView('all');
              }}
              className="w-full pl-12 pr-4 py-4 bg-white border border-stone-100 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-sm"
            />
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 group-focus-within:text-emerald-500 transition-colors">
              <SearchIcon className="w-5 h-5" />
            </div>
          </div>
        )}

        {renderContent()}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-md bg-white/90 backdrop-blur-lg border border-stone-200/50 shadow-2xl rounded-3xl p-2 z-40">
        <div className="flex justify-around items-center">
          <button 
            onClick={() => { setView('all'); setSelectedCategory(null); }}
            className={`flex flex-col items-center gap-1 p-2 rounded-2xl transition-all duration-300 ${
              view === 'all' || (view === 'search') ? 'text-emerald-600 bg-emerald-50 scale-105' : 'text-stone-400 hover:text-stone-600'
            }`}
          >
            <HomeIcon />
            <span className="text-[10px] font-bold uppercase tracking-widest">Home</span>
          </button>
          
          <button 
            onClick={() => setView('categories')}
            className={`flex flex-col items-center gap-1 p-2 rounded-2xl transition-all duration-300 ${
              view === 'categories' ? 'text-emerald-600 bg-emerald-50 scale-105' : 'text-stone-400 hover:text-stone-600'
            }`}
          >
            <CategoriesIcon />
            <span className="text-[10px] font-bold uppercase tracking-widest">Explore</span>
          </button>

          <button 
            onClick={() => { setView('favorites'); setSelectedCategory(null); }}
            className={`flex flex-col items-center gap-1 p-2 rounded-2xl transition-all duration-300 ${
              view === 'favorites' ? 'text-rose-600 bg-rose-50 scale-105' : 'text-stone-400 hover:text-stone-600'
            }`}
          >
            <HeartIcon fill={view === 'favorites' ? 'currentColor' : 'none'} />
            <span className="text-[10px] font-bold uppercase tracking-widest">Saved</span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default App;
