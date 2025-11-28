
import React, { useState, useEffect } from 'react';
import { StyleDefinition, PaletteMode } from '../types';
import { STYLE_THEMES } from '../styleConfigs';
import { ArrowLeft, User, Bell, Settings, Search, Heart, Share2, Check, Sun, Moon, Contrast } from 'lucide-react';

interface DemoPageProps {
  styleDef: StyleDefinition;
  onBack: () => void;
}

const DemoPage: React.FC<DemoPageProps> = ({ styleDef, onBack }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [toggle, setToggle] = useState(false);
  const [paletteMode, setPaletteMode] = useState<PaletteMode>('light');
  const [htmlContent, setHtmlContent] = useState<string>('');

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch(`/demo-content/${styleDef.id}.html`);
        if (response.ok) {
          const text = await response.text();
          setHtmlContent(text);
        } else {
          setHtmlContent('<p>Error loading content.</p>');
        }
      } catch (error) {
        console.error('Failed to load demo content:', error);
        setHtmlContent('<p>Error loading content.</p>');
      }
    };

    fetchContent();
  }, [styleDef.id]);

  // Fallback if theme is missing for a new style
  const themes = STYLE_THEMES[styleDef.id] || STYLE_THEMES['minimalism'];
  const styles = themes[paletteMode];

  return (
    <div className={`min-h-screen flex flex-col transition-all duration-500 ${styles.wrapper}`}>
        {/* Aurora Background Effect Special Case - Only show in Light/Dark modes for Aurora */}
        {styleDef.id === 'aurora' && paletteMode !== 'contrast' && (
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className={`absolute top-0 left-1/4 w-96 h-96 ${paletteMode === 'light' ? 'bg-purple-500' : 'bg-purple-800'} rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob`}></div>
                <div className={`absolute top-0 right-1/4 w-96 h-96 ${paletteMode === 'light' ? 'bg-yellow-500' : 'bg-blue-800'} rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000`}></div>
                <div className={`absolute -bottom-8 left-1/3 w-96 h-96 ${paletteMode === 'light' ? 'bg-pink-500' : 'bg-pink-800'} rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000`}></div>
            </div>
        )}

         {/* Retro Scanline Effect - Only in Dark mode */}
         {styleDef.id === 'retro-futurism' && paletteMode === 'dark' && (
            <div className="fixed inset-0 pointer-events-none z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]"></div>
        )}

      {/* Navigation */}
      <nav className={`sticky top-0 w-full px-6 py-4 flex items-center justify-between transition-all ${styles.nav} z-50`}>
        <div className="flex items-center gap-4">
          <button 
            onClick={onBack} 
            className={`p-2 rounded-full hover:opacity-70 transition-opacity ${styleDef.id === 'minimalism' && paletteMode === 'light' ? 'hover:bg-gray-100' : ''}`}
            aria-label="Go Back"
          >
            <ArrowLeft size={24} />
          </button>
          <h1 className={`text-xl font-bold tracking-tight ${styles.accentText}`}>
            {styleDef.name}
          </h1>
        </div>
        
        <div className="flex items-center gap-6">
            {/* Palette Switcher */}
            <div className="hidden sm:flex bg-black/5 backdrop-blur-sm rounded-full p-1 border border-black/10">
                <button 
                    onClick={() => setPaletteMode('light')}
                    className={`p-2 rounded-full transition-all ${paletteMode === 'light' ? 'bg-white shadow-md text-yellow-500' : 'text-gray-500 hover:text-gray-900'}`}
                    title="Light Mode"
                >
                    <Sun size={16} />
                </button>
                <button 
                    onClick={() => setPaletteMode('dark')}
                    className={`p-2 rounded-full transition-all ${paletteMode === 'dark' ? 'bg-gray-800 shadow-md text-white' : 'text-gray-500 hover:text-gray-900'}`}
                    title="Dark Mode"
                >
                    <Moon size={16} />
                </button>
                <button 
                    onClick={() => setPaletteMode('contrast')}
                    className={`p-2 rounded-full transition-all ${paletteMode === 'contrast' ? 'bg-black shadow-md text-white' : 'text-gray-500 hover:text-gray-900'}`}
                    title="High Contrast"
                >
                    <Contrast size={16} />
                </button>
            </div>

            <div className="flex gap-4">
                <Search className="w-5 h-5 opacity-70 cursor-pointer hover:opacity-100" />
                <Bell className="w-5 h-5 opacity-70 cursor-pointer hover:opacity-100" />
                <User className="w-5 h-5 opacity-70 cursor-pointer hover:opacity-100" />
            </div>
        </div>
      </nav>

      {/* Mobile Palette Switcher */}
      <div className="sm:hidden px-6 py-2 flex justify-center sticky top-[72px] z-40">
           <div className="flex bg-black/5 backdrop-blur-sm rounded-full p-1 border border-black/10 shadow-lg">
                <button 
                    onClick={() => setPaletteMode('light')}
                    className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${paletteMode === 'light' ? 'bg-white shadow-md text-black' : 'text-gray-500'}`}
                >
                    Light
                </button>
                <button 
                    onClick={() => setPaletteMode('dark')}
                    className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${paletteMode === 'dark' ? 'bg-gray-800 shadow-md text-white' : 'text-gray-500'}`}
                >
                    Dark
                </button>
                <button 
                    onClick={() => setPaletteMode('contrast')}
                    className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${paletteMode === 'contrast' ? 'bg-black shadow-md text-white' : 'text-gray-500'}`}
                >
                    Contrast
                </button>
            </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          {htmlContent ? (
            <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
          ) : (
            <div className="flex items-center justify-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default DemoPage;
