
import React, { useState } from 'react';
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
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Information */}
          <div className="lg:col-span-5 space-y-8">
            <div className={styles.card === '' ? '' : `${styles.card} p-6`}>
              <div className="flex items-center justify-between mb-4">
                  <h2 className={`text-3xl font-bold ${styles.accentText}`}>Style Breakdown</h2>
                  <span className={styles.badge}>{styles.name}</span>
              </div>
              
              <p className="opacity-80 leading-relaxed mb-6">
                {styleDef.description}
              </p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider opacity-60 mb-2">Color Palette</h3>
                  <p className="text-sm opacity-90">{styleDef.colorSchemes}</p>
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider opacity-60 mb-2">Key Features</h3>
                  <p className="text-sm opacity-90">{styleDef.effects}</p>
                </div>
                <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider opacity-60 mb-2">Keywords</h3>
                    <div className="flex flex-wrap gap-2">
                        {styleDef.keywords.split(', ').slice(0,5).map((kw, i) => (
                            <span key={i} className={styles.badge}>{kw}</span>
                        ))}
                    </div>
                </div>
              </div>
            </div>

            {/* Interactive Form Elements Demo */}
            <div className={`${styles.card} p-6 space-y-6`}>
                <h3 className={`text-xl font-bold ${styles.accentText}`}>Interactive Elements</h3>
                <div className="space-y-4">
                    <input type="text" placeholder="Type something..." className={styles.input} />
                    <div className="flex flex-wrap gap-4">
                        <button className={styles.button}>Primary Action</button>
                        <button className={styles.buttonSecondary}>Secondary</button>
                    </div>
                    <div className="flex items-center gap-4 pt-2">
                        <span className="text-sm opacity-70">Toggle:</span>
                        <div 
                            className={`w-12 h-6 rounded-full p-1 cursor-pointer transition-colors duration-300 flex items-center ${toggle ? 'bg-green-500' : 'bg-gray-400'}`}
                            onClick={() => setToggle(!toggle)}
                        >
                            <div className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ${toggle ? 'translate-x-6' : 'translate-x-0'}`} />
                        </div>
                    </div>
                </div>
            </div>
          </div>

          {/* Right Column: Visual Component Demo */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Main Visual Card */}
            <div className={`relative overflow-hidden ${styles.card} min-h-[400px] flex flex-col`}>
                {styleDef.id === 'vibrant-block' && (
                     <div className={`absolute top-0 right-0 w-32 h-32 ${paletteMode === 'light' ? 'bg-pink-500' : 'bg-green-500'} rounded-bl-full z-0`}></div>
                )}
                
                <div className="relative z-10 p-8 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-8">
                        <div>
                            <span className={styles.badge}>Featured</span>
                            <h2 className={`text-4xl font-bold mt-4 mb-2 ${styles.accentText}`}>Visual Depth</h2>
                            <p className="opacity-70 max-w-sm">Experience the nuances of {styleDef.name} through this interactive component.</p>
                        </div>
                        <div className={`p-3 rounded-full ${styleDef.id === 'glassmorphism' ? 'bg-white/10 backdrop-blur-md' : 'bg-transparent'}`}>
                            <Settings className="w-6 h-6 animate-spin-slow opacity-80" />
                        </div>
                    </div>

                    <div className="mt-auto">
                        <div className="grid grid-cols-3 gap-4 mb-8">
                             {[1, 2, 3].map((item) => (
                                 <div 
                                    key={item} 
                                    className={`aspect-square rounded-lg flex items-center justify-center cursor-pointer transition-all ${activeTab === item ? 'ring-2 ring-offset-2 ring-current opacity-100' : 'opacity-50 hover:opacity-80'} ${styleDef.id === 'glassmorphism' ? 'bg-white/20' : 'bg-current'}`}
                                    onClick={() => setActiveTab(item)}
                                    style={{ backgroundColor: activeTab === item ? '' : 'rgba(128,128,128,0.2)' }}
                                 >
                                     <Heart className={`w-6 h-6 ${activeTab === item ? 'fill-current' : ''}`} />
                                 </div>
                             ))}
                        </div>
                        
                        <div className="flex justify-between items-center border-t border-current/10 pt-6">
                            <div className="flex -space-x-3">
                                {[1,2,3,4].map(i => (
                                    <img key={i} src={`https://picsum.photos/id/${i+50}/50/50`} className="w-10 h-10 rounded-full border-2 border-white object-cover" alt="User" />
                                ))}
                                <div className="w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center text-xs border-2 border-white z-10">+42</div>
                            </div>
                            <button className={`${styles.button} !py-2 !px-4 text-sm flex items-center gap-2`}>
                                <Share2 size={16} /> Share
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* List Item Demos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[1, 2].map((item) => (
                    <div key={item} className={`${styles.card} p-4 flex items-center gap-4 group cursor-pointer`}>
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 ${styleDef.id === 'minimalism' ? 'bg-gray-100' : 'bg-black/5'}`}>
                            <Check className="w-6 h-6 opacity-60" />
                        </div>
                        <div>
                            <h4 className="font-bold opacity-90 group-hover:text-blue-500 transition-colors">Feature Item {item}</h4>
                            <p className="text-xs opacity-60 mt-1">Click to view details</p>
                        </div>
                    </div>
                ))}
            </div>

          </div>
        </div>
      </main>
    </div>
  );
};

export default DemoPage;
