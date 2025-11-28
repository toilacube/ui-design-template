
import React from 'react';

// 1. Minimalism & Swiss Style
const MinimalismPreview = () => (
  <div className="w-full h-full bg-white flex flex-col items-center justify-center p-6 relative group-hover:scale-105 transition-transform duration-700">
    <div className="absolute top-4 left-4 w-4 h-4 bg-black rounded-full"></div>
    <div className="text-6xl font-black text-black tracking-tighter mb-2">Aa</div>
    <div className="w-12 h-1 bg-black mb-4"></div>
    <div className="text-xs text-gray-500 font-medium tracking-widest uppercase">Less is More</div>
    <div className="absolute bottom-4 right-4 flex gap-1">
        <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
        <div className="w-2 h-2 bg-black rounded-full"></div>
    </div>
  </div>
);

// 2. Neumorphism
const NeumorphismPreview = () => (
  <div className="w-full h-full bg-[#e0e5ec] flex items-center justify-center gap-6 group-hover:scale-105 transition-transform duration-700">
    <div className="w-16 h-16 rounded-[1rem] bg-[#e0e5ec] shadow-[7px_7px_14px_#bec3c9,-7px_-7px_14px_#ffffff] flex items-center justify-center text-gray-400">
        <div className="w-6 h-6 border-2 border-gray-400 rounded-full"></div>
    </div>
    <div className="w-16 h-16 rounded-full bg-[#e0e5ec] shadow-[inset_5px_5px_10px_#bec3c9,inset_-5px_-5px_10px_#ffffff] flex items-center justify-center">
        <div className="w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_5px_rgba(96,165,250,0.8)]"></div>
    </div>
  </div>
);

// 3. Glassmorphism
const GlassmorphismPreview = () => (
  <div className="w-full h-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 relative flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-700">
    <div className="absolute top-4 left-8 w-24 h-24 bg-yellow-300 rounded-full mix-blend-overlay filter blur-xl opacity-70 animate-pulse"></div>
    <div className="absolute bottom-4 right-8 w-32 h-32 bg-cyan-300 rounded-full mix-blend-overlay filter blur-xl opacity-70"></div>
    
    <div className="relative w-48 h-28 bg-white/20 backdrop-blur-md border border-white/30 rounded-xl shadow-lg flex flex-col justify-between p-4 transform rotate-[-5deg] transition-transform group-hover:rotate-0">
        <div className="flex justify-between items-center">
            <div className="w-8 h-4 bg-white/30 rounded-md"></div>
            <div className="w-4 h-4 rounded-full bg-white/40"></div>
        </div>
        <div className="space-y-2">
            <div className="w-full h-2 bg-white/30 rounded-full"></div>
            <div className="w-2/3 h-2 bg-white/30 rounded-full"></div>
        </div>
    </div>
  </div>
);

// 4. Brutalism
const BrutalismPreview = () => (
  <div className="w-full h-full bg-[#fdfd96] flex items-center justify-center p-6 relative group-hover:scale-105 transition-transform duration-700">
    <div className="absolute inset-0 border-4 border-black m-2"></div>
    <div className="bg-[#ff6b6b] border-4 border-black p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform -rotate-3 hover:rotate-0 transition-transform">
        <span className="font-mono font-bold text-xl uppercase bg-black text-white px-1">Raw UI</span>
    </div>
    <div className="absolute bottom-6 right-8 bg-white border-4 border-black px-2 font-bold text-sm transform rotate-6">
        CLICK ME
    </div>
  </div>
);

// 5. 3D & Hyperrealism
const ThreeDPreview = () => (
  <div className="w-full h-full bg-slate-800 flex items-center justify-center perspective-1000 group-hover:scale-105 transition-transform duration-700">
    <div className="relative w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-700 rounded-xl transform rotate-x-12 rotate-y-12 shadow-[10px_10px_30px_rgba(0,0,0,0.5)] border-t border-blue-300 flex items-center justify-center">
        <div className="w-12 h-12 bg-blue-900/50 rounded-full shadow-inner backdrop-blur-sm border border-white/10"></div>
    </div>
    <div className="absolute bottom-8 w-24 h-4 bg-black/40 blur-md rounded-[100%]"></div>
  </div>
);

// 6. Vibrant & Block-based
const VibrantPreview = () => (
  <div className="w-full h-full bg-indigo-600 flex flex-col group-hover:scale-105 transition-transform duration-700">
    <div className="flex-1 flex">
        <div className="flex-1 bg-yellow-400 flex items-center justify-center">
            <div className="w-8 h-8 bg-black rounded-full"></div>
        </div>
        <div className="flex-1 bg-pink-500 relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px]"></div>
        </div>
    </div>
    <div className="h-16 bg-white flex items-center justify-between px-4">
        <div className="font-black text-2xl tracking-tighter uppercase italic">BOLD</div>
        <div className="w-8 h-8 bg-cyan-400 rounded-none transform rotate-45"></div>
    </div>
  </div>
);

// 7. Dark Mode
const DarkModePreview = () => (
  <div className="w-full h-full bg-[#121212] flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
    <div className="w-48 bg-[#1e1e1e] border border-gray-800 rounded-lg p-4 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-green-400"></div>
        <div className="flex gap-3 mb-3">
            <div className="w-8 h-8 rounded-full bg-gray-800"></div>
            <div className="space-y-1 flex-1">
                <div className="h-2 bg-gray-700 rounded w-3/4"></div>
                <div className="h-2 bg-gray-800 rounded w-1/2"></div>
            </div>
        </div>
        <div className="w-full h-8 bg-blue-600/20 text-blue-400 text-xs font-bold rounded flex items-center justify-center border border-blue-500/30">
            Action
        </div>
    </div>
  </div>
);

// 8. Accessible
const AccessiblePreview = () => (
  <div className="w-full h-full bg-white flex flex-col items-center justify-center gap-4 group-hover:scale-105 transition-transform duration-700 border-l-8 border-[#005fcc]">
    <div className="text-3xl font-bold text-[#212529]">Contrast</div>
    <div className="bg-[#005fcc] text-white px-6 py-2 rounded font-bold border-2 border-transparent ring-4 ring-yellow-400 shadow-sm">
        Focus State
    </div>
  </div>
);

// 9. Claymorphism
const ClaymorphismPreview = () => (
  <div className="w-full h-full bg-[#f0f4f8] flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
    <div className="relative w-32 h-32 bg-white rounded-[2rem] shadow-[inset_-8px_-8px_16px_rgba(255,255,255,1),inset_8px_8px_16px_rgba(174,174,192,0.2),10px_10px_20px_rgba(174,174,192,0.4)] flex items-center justify-center transform rotate-6 hover:rotate-12 transition-all">
        <div className="w-16 h-16 bg-[#6c5ce7] rounded-[1rem] shadow-[inset_-4px_-4px_8px_rgba(0,0,0,0.1),inset_4px_4px_8px_rgba(255,255,255,0.2)] flex items-center justify-center text-white font-black text-2xl">
            3D
        </div>
    </div>
  </div>
);

// 10. Aurora UI
const AuroraPreview = () => (
  <div className="w-full h-full bg-slate-900 relative overflow-hidden flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
    <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500 rounded-full filter blur-[40px] opacity-60 animate-blob"></div>
    <div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-500 rounded-full filter blur-[40px] opacity-60 animate-blob animation-delay-2000"></div>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-500 rounded-full filter blur-[40px] opacity-60 animate-blob animation-delay-4000"></div>
    
    <div className="relative z-10 w-48 h-24 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl flex items-center justify-center">
        <span className="text-white font-light tracking-[0.2em] text-sm">ETHEREAL</span>
    </div>
  </div>
);

// 11. Retro-Futurism
const RetroPreview = () => (
  <div className="w-full h-full bg-[#050510] relative overflow-hidden flex flex-col items-center justify-center group-hover:scale-105 transition-transform duration-700">
     {/* Grid */}
    <div className="absolute bottom-0 w-full h-1/2 bg-[linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px] transform perspective-[500px] rotate-x-[60deg] origin-bottom"></div>
    
    {/* Sun */}
    <div className="w-16 h-16 bg-gradient-to-t from-yellow-400 to-pink-600 rounded-full mb-2 shadow-[0_0_20px_rgba(236,72,153,0.6)]"></div>
    
    <div className="font-mono text-transparent bg-clip-text bg-gradient-to-b from-cyan-300 to-blue-500 font-bold text-2xl tracking-widest drop-shadow-[0_0_5px_rgba(6,182,212,0.8)] z-10">
        FUTURE
    </div>
    
    {/* Scanlines */}
    <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,6px_100%] pointer-events-none z-20"></div>
  </div>
);

// 12. Bento Grid
const BentoPreview = () => (
  <div className="w-full h-full bg-gray-50 flex items-center justify-center p-4 group-hover:scale-105 transition-transform duration-700">
    <div className="grid grid-cols-2 grid-rows-2 gap-2 w-full max-w-[180px] h-32">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 col-span-1 row-span-2 flex flex-col justify-between p-2">
             <div className="w-6 h-6 bg-blue-100 rounded-full"></div>
             <div className="w-full h-2 bg-gray-100 rounded-full"></div>
        </div>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-2 flex items-center justify-center">
             <div className="w-8 h-8 bg-orange-100 rounded-full"></div>
        </div>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-2 flex items-center justify-center">
             <div className="w-8 h-8 bg-green-100 rounded-full"></div>
        </div>
    </div>
  </div>
);

// 13. Y2K / Acid Graphics
const Y2KPreview = () => (
  <div className="w-full h-full bg-black flex items-center justify-center p-4 group-hover:scale-105 transition-transform duration-700 relative overflow-hidden">
     <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-pink-500/20 via-black to-black"></div>
     <div className="relative border-2 border-white/50 rounded-lg p-2 transform -rotate-6 mix-blend-difference">
         <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ccff00] to-pink-500 italic tracking-tighter filter drop-shadow-[0_0_5px_rgba(204,255,0,0.8)]">
             ACID
         </h1>
     </div>
     <div className="absolute top-4 right-6 w-8 h-8 text-[#ccff00] animate-spin-slow">
        <svg viewBox="0 0 100 100" fill="currentColor">
            <path d="M50 0 L60 40 L100 50 L60 60 L50 100 L40 60 L0 50 L40 40 Z" />
        </svg>
     </div>
  </div>
);

// 14. Paper / Collage
const PaperPreview = () => (
  <div className="w-full h-full bg-[#f3e9d2] flex items-center justify-center p-4 group-hover:scale-105 transition-transform duration-700 overflow-hidden">
     <div className="w-24 h-24 bg-white shadow-md transform -rotate-3 p-2 relative">
         <div className="w-full h-full bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center">
             <span className="font-serif text-2xl italic">Art</span>
         </div>
         <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-4 bg-yellow-200/80 transform rotate-1 shadow-sm"></div>
     </div>
     <div className="absolute bottom-4 right-4 w-16 h-16 bg-[#2c2c2c] transform rotate-12 p-1 shadow-lg">
         <div className="w-full h-full border border-white/30 flex items-center justify-center text-white font-serif text-xs">
             Collage
         </div>
     </div>
  </div>
);

// 15. Holographic
const HolographicPreview = () => (
  <div className="w-full h-full bg-gray-100 flex items-center justify-center p-4 group-hover:scale-105 transition-transform duration-700">
      <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-pink-300 via-purple-300 to-cyan-300 shadow-xl relative overflow-hidden flex items-center justify-center">
           <div className="absolute inset-0 bg-white/30 skew-x-12 blur-sm transform translate-x-1/2"></div>
           <div className="w-24 h-24 bg-gradient-to-bl from-white/80 to-transparent rounded-full backdrop-blur-sm border border-white/40 z-10 flex items-center justify-center">
               <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-500/20 shadow-inner"></div>
           </div>
      </div>
  </div>
);

// 16. Terminal / CLI
const TerminalPreview = () => (
  <div className="w-full h-full bg-black flex flex-col justify-center p-6 group-hover:scale-105 transition-transform duration-700 font-mono text-xs">
      <div className="text-green-500 mb-1">$ init_system.sh</div>
      <div className="text-white mb-1">Loading modules...</div>
      <div className="text-white mb-1">[OK] Core</div>
      <div className="text-white mb-1">[OK] UI</div>
      <div className="flex gap-1">
          <span className="text-green-500">{'>'}</span>
          <span className="w-2 h-4 bg-green-500 animate-pulse"></span>
      </div>
  </div>
);

// 17. Material You
const MaterialYouPreview = () => (
  <div className="w-full h-full bg-[#fdfcf4] flex items-center justify-center p-4 group-hover:scale-105 transition-transform duration-700">
     <div className="w-40 h-24 bg-[#dbe6cf] rounded-[24px] flex items-center justify-between px-4 relative">
         <div className="flex flex-col gap-2">
             <div className="w-16 h-3 bg-[#3f493d]/20 rounded-full"></div>
             <div className="w-10 h-3 bg-[#3f493d]/20 rounded-full"></div>
         </div>
         <div className="w-12 h-12 bg-[#bce09f] rounded-[16px] shadow-sm flex items-center justify-center">
             <div className="w-6 h-6 bg-[#25341d] rounded-full"></div>
         </div>
     </div>
  </div>
);

export const StylePreviews: Record<string, React.FC> = {
  'minimalism': MinimalismPreview,
  'neumorphism': NeumorphismPreview,
  'glassmorphism': GlassmorphismPreview,
  'brutalism': BrutalismPreview,
  '3d-hyperrealism': ThreeDPreview,
  'vibrant-block': VibrantPreview,
  'dark-mode': DarkModePreview,
  'accessible': AccessiblePreview,
  'claymorphism': ClaymorphismPreview,
  'aurora': AuroraPreview,
  'retro-futurism': RetroPreview,
  'bento-grid': BentoPreview,
  'y2k-acid': Y2KPreview,
  'paper-collage': PaperPreview,
  'holographic': HolographicPreview,
  'terminal-cli': TerminalPreview,
  'material-you': MaterialYouPreview,
};
