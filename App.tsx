import React, { useState, useEffect } from 'react';
import { LayoutGrid, Info } from 'lucide-react';
import { UI_STYLES } from './constants';
import StyleCard from './components/StyleCard';
import DemoPage from './components/DemoPage';
import { ViewState } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('home');

  // Handle hash change for simple routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        // Verify if hash corresponds to a valid style ID
        const isValidStyle = UI_STYLES.some(s => s.id === hash);
        if (isValidStyle) {
            setCurrentView(hash);
        } else {
            setCurrentView('home');
        }
      } else {
        setCurrentView('home');
      }
    };

    // Initial check
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (id: string) => {
    window.location.hash = id;
    window.scrollTo(0,0);
  };

  const handleBack = () => {
    window.location.hash = '';
    window.scrollTo(0,0);
  };

  const activeStyle = UI_STYLES.find(s => s.id === currentView);

  if (activeStyle && currentView !== 'home') {
    return <DemoPage styleDef={activeStyle} onBack={handleBack} />;
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-black text-white">
              <LayoutGrid size={18} />
            </div>
            <span className="text-xl font-bold tracking-tight">UI Encyclopedia</span>
          </div>
          <div className="flex items-center gap-4 text-sm text-gray-500 hidden sm:flex">
             <span className="flex items-center gap-1"><Info size={14}/> Select a card to view demo</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-white py-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            The Evolution of <span className="text-blue-600">Interface Design</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600">
            Explore a curated collection of diverse UI styles. From the raw aesthetics of Brutalism to the soft depths of Neumorphism.
          </p>
        </div>
      </section>

      {/* Grid Section */}
      <main className="container mx-auto px-6 py-12 pb-24">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {UI_STYLES.map((style) => (
            <StyleCard 
              key={style.id} 
              styleDef={style} 
              onClick={handleNavigate} 
            />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white py-8 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} UI Encyclopedia. Built with React & Tailwind CSS.</p>
      </footer>
    </div>
  );
};

export default App;