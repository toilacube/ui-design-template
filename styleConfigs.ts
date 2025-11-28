
import { StyleTheme, PaletteMode } from './types';

// Helper to define a theme set easily
type ThemeSet = Record<PaletteMode, StyleTheme>;

export const STYLE_THEMES: Record<string, ThemeSet> = {
  'minimalism': {
    light: {
      name: 'Swiss Light',
      wrapper: 'bg-white font-sans text-gray-900',
      nav: 'bg-white border-b border-gray-200',
      card: 'bg-white border border-gray-100 hover:border-gray-300 transition-colors duration-300',
      button: 'bg-black text-white px-6 py-2 hover:bg-gray-800 transition-colors rounded-none',
      buttonSecondary: 'bg-white text-black border border-black px-6 py-2 hover:bg-gray-50 transition-colors rounded-none',
      input: 'border-b border-gray-300 bg-transparent py-2 focus:border-black focus:outline-none placeholder-gray-400 w-full',
      accentText: 'text-black font-bold',
      badge: 'bg-gray-100 text-gray-800 px-2 py-1 text-xs uppercase tracking-wider',
      shadow: ''
    },
    dark: {
      name: 'Noir',
      wrapper: 'bg-zinc-900 font-sans text-zinc-100',
      nav: 'bg-zinc-900 border-b border-zinc-800',
      card: 'bg-zinc-800 border border-zinc-700 hover:border-zinc-500 transition-colors duration-300',
      button: 'bg-white text-black px-6 py-2 hover:bg-gray-200 transition-colors rounded-none',
      buttonSecondary: 'bg-transparent text-white border border-white px-6 py-2 hover:bg-white/10 transition-colors rounded-none',
      input: 'border-b border-zinc-600 bg-transparent py-2 focus:border-white focus:outline-none placeholder-zinc-500 w-full text-white',
      accentText: 'text-white font-bold',
      badge: 'bg-zinc-800 text-zinc-300 border border-zinc-700 px-2 py-1 text-xs uppercase tracking-wider',
      shadow: ''
    },
    contrast: {
      name: 'Stark',
      wrapper: 'bg-white font-sans text-black',
      nav: 'bg-white border-b-4 border-black',
      card: 'bg-white border-4 border-black hover:bg-gray-50 transition-colors duration-300',
      button: 'bg-black text-white px-6 py-2 border-4 border-black font-bold hover:invert transition-all rounded-none',
      buttonSecondary: 'bg-white text-black border-4 border-black px-6 py-2 font-bold hover:bg-black hover:text-white transition-all rounded-none',
      input: 'border-4 border-black bg-white py-2 px-3 focus:ring-4 focus:ring-black/20 focus:outline-none placeholder-black/50 w-full font-bold',
      accentText: 'text-black font-black underline decoration-4',
      badge: 'bg-black text-white px-2 py-1 text-xs uppercase tracking-wider font-bold',
      shadow: ''
    }
  },
  'neumorphism': {
    light: {
      name: 'Soft Light',
      wrapper: 'bg-[#e0e5ec] text-gray-700 font-sans',
      nav: 'bg-[#e0e5ec] shadow-[9px_9px_16px_rgb(163,177,198),-9px_-9px_16px_rgba(255,255,255,0.5)] z-10',
      card: 'bg-[#e0e5ec] rounded-[30px] shadow-[9px_9px_16px_rgb(163,177,198),-9px_-9px_16px_rgba(255,255,255,0.5)] p-8',
      button: 'bg-[#e0e5ec] text-gray-700 font-bold px-6 py-3 rounded-full shadow-[6px_6px_10px_rgb(163,177,198),-6px_-6px_10px_rgba(255,255,255,0.5)] hover:shadow-[inset_6px_6px_10px_rgb(163,177,198),inset_-6px_-6px_10px_rgba(255,255,255,0.5)] transition-all active:scale-95',
      buttonSecondary: 'bg-[#e0e5ec] text-blue-500 font-bold px-6 py-3 rounded-full shadow-[6px_6px_10px_rgb(163,177,198),-6px_-6px_10px_rgba(255,255,255,0.5)] transition-all',
      input: 'bg-[#e0e5ec] rounded-full shadow-[inset_6px_6px_10px_rgb(163,177,198),inset_-6px_-6px_10px_rgba(255,255,255,0.5)] px-6 py-3 outline-none w-full text-gray-700',
      accentText: 'text-gray-600',
      badge: 'rounded-full px-4 py-1 text-xs font-bold shadow-[3px_3px_6px_rgb(163,177,198),-3px_-3px_6px_rgba(255,255,255,0.5)] text-gray-500',
      shadow: 'shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]'
    },
    dark: {
      name: 'Soft Dark',
      wrapper: 'bg-[#292d32] text-gray-300 font-sans',
      nav: 'bg-[#292d32] shadow-[5px_5px_10px_#1e2125,-5px_-5px_10px_#343940] z-10',
      card: 'bg-[#292d32] rounded-[30px] shadow-[8px_8px_16px_#1e2125,-8px_-8px_16px_#343940] p-8',
      button: 'bg-[#292d32] text-gray-300 font-bold px-6 py-3 rounded-full shadow-[5px_5px_10px_#1e2125,-5px_-5px_10px_#343940] hover:shadow-[inset_5px_5px_10px_#1e2125,inset_-5px_-5px_10px_#343940] transition-all active:scale-95',
      buttonSecondary: 'bg-[#292d32] text-emerald-400 font-bold px-6 py-3 rounded-full shadow-[5px_5px_10px_#1e2125,-5px_-5px_10px_#343940] transition-all',
      input: 'bg-[#292d32] rounded-full shadow-[inset_5px_5px_10px_#1e2125,inset_-5px_-5px_10px_#343940] px-6 py-3 outline-none w-full text-gray-300',
      accentText: 'text-gray-200',
      badge: 'rounded-full px-4 py-1 text-xs font-bold shadow-[3px_3px_6px_#1e2125,-3px_-3px_6px_#343940] text-gray-400',
      shadow: 'shadow-[20px_20px_60px_#1a1d20,-20px_-20px_60px_#383d44]'
    },
    contrast: {
      name: 'Mono Deep',
      wrapper: 'bg-[#404040] text-white font-sans',
      nav: 'bg-[#404040] shadow-[5px_5px_10px_#262626,-5px_-5px_10px_#5a5a5a] z-10',
      card: 'bg-[#404040] rounded-[20px] shadow-[12px_12px_24px_#262626,-12px_-12px_24px_#5a5a5a] p-8',
      button: 'bg-[#404040] text-white font-bold px-6 py-3 rounded-xl shadow-[6px_6px_12px_#262626,-6px_-6px_12px_#5a5a5a] hover:bg-[#454545] transition-all',
      buttonSecondary: 'bg-[#404040] text-yellow-400 font-bold px-6 py-3 rounded-xl shadow-[6px_6px_12px_#262626,-6px_-6px_12px_#5a5a5a]',
      input: 'bg-[#3a3a3a] rounded-xl shadow-[inset_4px_4px_8px_#202020,inset_-4px_-4px_8px_#545454] px-6 py-3 outline-none w-full text-white',
      accentText: 'text-white',
      badge: 'bg-[#404040] rounded-lg px-4 py-1 text-xs font-bold shadow-[3px_3px_6px_#262626,-3px_-3px_6px_#5a5a5a] text-gray-200',
      shadow: ''
    }
  },
  'glassmorphism': {
    light: {
      name: 'Vibrant Mesh',
      wrapper: 'bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white min-h-screen font-sans',
      nav: 'bg-white/10 backdrop-blur-lg border-b border-white/20',
      card: 'bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl shadow-xl',
      button: 'bg-white/30 hover:bg-white/40 border border-white/40 text-white px-6 py-2 rounded-xl backdrop-blur-md transition-all shadow-lg',
      buttonSecondary: 'bg-transparent border border-white/50 text-white px-6 py-2 rounded-xl hover:bg-white/10 transition-all',
      input: 'bg-black/20 border border-white/30 rounded-xl px-4 py-2 text-white placeholder-white/70 focus:outline-none focus:bg-black/30 w-full backdrop-blur-sm',
      accentText: 'text-white drop-shadow-md',
      badge: 'bg-white/20 border border-white/30 rounded-lg px-2 py-1 text-xs backdrop-blur-md',
      shadow: 'shadow-2xl'
    },
    dark: {
      name: 'Deep Ocean',
      wrapper: 'bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white min-h-screen font-sans',
      nav: 'bg-black/30 backdrop-blur-lg border-b border-white/5',
      card: 'bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl',
      button: 'bg-blue-600/30 hover:bg-blue-600/50 border border-blue-400/30 text-white px-6 py-2 rounded-xl backdrop-blur-md transition-all shadow-lg',
      buttonSecondary: 'bg-transparent border border-white/20 text-gray-300 px-6 py-2 rounded-xl hover:bg-white/5 transition-all',
      input: 'bg-black/50 border border-white/10 rounded-xl px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 w-full backdrop-blur-sm',
      accentText: 'text-blue-200 drop-shadow-md',
      badge: 'bg-blue-900/40 border border-blue-500/30 rounded-lg px-2 py-1 text-xs backdrop-blur-md text-blue-200',
      shadow: 'shadow-black/50'
    },
    contrast: {
      name: 'Crystal Clear',
      wrapper: 'bg-blue-900 text-white min-h-screen font-sans',
      nav: 'bg-blue-800/90 backdrop-blur-sm border-b border-white/30',
      card: 'bg-blue-800/60 backdrop-blur-md border-2 border-white/40 rounded-xl shadow-none',
      button: 'bg-white text-blue-900 font-bold px-6 py-2 rounded-lg border-2 border-white hover:bg-blue-50 transition-all',
      buttonSecondary: 'bg-transparent border-2 border-white text-white font-bold px-6 py-2 rounded-lg hover:bg-blue-800 transition-all',
      input: 'bg-blue-950/80 border-2 border-white/30 rounded-lg px-4 py-2 text-white placeholder-blue-200 focus:outline-none focus:border-white w-full',
      accentText: 'text-white font-bold',
      badge: 'bg-blue-950 border border-white rounded px-2 py-1 text-xs font-bold',
      shadow: ''
    }
  },
  'brutalism': {
    light: {
      name: 'Standard Pop',
      wrapper: 'bg-[#fdfd96] font-mono text-black',
      nav: 'bg-white border-b-4 border-black p-4',
      card: 'bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all',
      button: 'bg-[#ff6b6b] text-black border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] px-6 py-2 font-bold hover:bg-[#ff5252] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all',
      buttonSecondary: 'bg-[#4ecdc4] text-black border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] px-6 py-2 font-bold hover:bg-[#3dbdb4] active:shadow-none transition-all',
      input: 'bg-white border-4 border-black p-3 font-bold placeholder-black/50 w-full focus:bg-gray-50 focus:outline-none',
      accentText: 'uppercase font-black bg-black text-white p-1 inline-block',
      badge: 'border-2 border-black bg-white px-2 py-0 text-xs font-bold uppercase',
      shadow: ''
    },
    dark: {
      name: 'Cyber Grunge',
      wrapper: 'bg-black font-mono text-[#00ff00]',
      nav: 'bg-[#1a1a1a] border-b-4 border-[#00ff00] p-4',
      card: 'bg-[#111] border-4 border-[#00ff00] shadow-[8px_8px_0px_0px_#00ff00] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_#00ff00] transition-all',
      button: 'bg-[#bd00ff] text-white border-4 border-[#00ff00] shadow-[4px_4px_0px_0px_#00ff00] px-6 py-2 font-bold hover:bg-[#a000d8] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all',
      buttonSecondary: 'bg-black text-[#00ff00] border-4 border-[#00ff00] shadow-[4px_4px_0px_0px_#00ff00] px-6 py-2 font-bold hover:bg-[#111] active:shadow-none transition-all',
      input: 'bg-black border-4 border-[#00ff00] p-3 font-bold text-[#00ff00] placeholder-[#00ff00]/50 w-full focus:bg-[#111] focus:outline-none',
      accentText: 'uppercase font-black bg-[#00ff00] text-black p-1 inline-block',
      badge: 'border-2 border-[#00ff00] bg-black text-[#00ff00] px-2 py-0 text-xs font-bold uppercase',
      shadow: ''
    },
    contrast: {
      name: 'Blueprint',
      wrapper: 'bg-white font-mono text-blue-800',
      nav: 'bg-blue-50 border-b-4 border-blue-800 p-4',
      card: 'bg-white border-4 border-blue-800 shadow-[8px_8px_0px_0px_#1e40af]',
      button: 'bg-blue-800 text-white border-4 border-blue-800 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] px-6 py-2 font-bold hover:bg-blue-700',
      buttonSecondary: 'bg-white text-blue-800 border-4 border-blue-800 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] px-6 py-2 font-bold',
      input: 'bg-white border-4 border-blue-800 p-3 font-bold text-blue-800 placeholder-blue-800/50 w-full',
      accentText: 'uppercase font-black bg-blue-800 text-white p-1 inline-block',
      badge: 'border-2 border-blue-800 bg-white text-blue-800 px-2 py-0 text-xs font-bold uppercase',
      shadow: ''
    }
  },
  '3d-hyperrealism': {
    light: {
      name: 'Daylight',
      wrapper: 'bg-slate-200 text-slate-800 perspective-1000',
      nav: 'bg-slate-100/90 border-b border-slate-300 shadow-xl',
      card: 'bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl border-t border-white shadow-2xl transform transition-transform hover:scale-[1.02] hover:-rotate-x-1',
      button: 'bg-gradient-to-b from-blue-400 to-blue-600 border-t border-blue-300 shadow-lg hover:shadow-blue-500/30 text-white px-6 py-2 rounded-lg font-semibold active:translate-y-0.5 transition-all',
      buttonSecondary: 'bg-slate-100 border border-slate-300 shadow-inner text-slate-600 px-6 py-2 rounded-lg hover:bg-white transition-all',
      input: 'bg-white border border-slate-300 shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] rounded-lg px-4 py-2 text-slate-800 w-full focus:ring-1 focus:ring-blue-500 outline-none',
      accentText: 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-bold filter drop-shadow-sm',
      badge: 'bg-slate-100 border border-slate-300 rounded px-2 py-1 text-xs shadow-sm',
      shadow: 'shadow-2xl shadow-slate-400/50'
    },
    dark: {
      name: 'Midnight',
      wrapper: 'bg-slate-800 text-white perspective-1000',
      nav: 'bg-slate-900/90 border-b border-slate-700 shadow-xl',
      card: 'bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl border-t border-slate-600 shadow-2xl transform transition-transform hover:scale-[1.02] hover:-rotate-x-1',
      button: 'bg-gradient-to-b from-blue-500 to-blue-700 border-t border-blue-400 shadow-lg hover:shadow-blue-500/50 text-white px-6 py-2 rounded-lg font-semibold active:translate-y-0.5 transition-all',
      buttonSecondary: 'bg-slate-700 border border-slate-600 shadow-inner text-gray-300 px-6 py-2 rounded-lg hover:bg-slate-600 transition-all',
      input: 'bg-slate-900 border border-slate-950 shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)] rounded-lg px-4 py-2 text-white w-full focus:ring-1 focus:ring-blue-500 outline-none',
      accentText: 'text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300 font-bold filter drop-shadow-lg',
      badge: 'bg-slate-900 border border-slate-600 rounded px-2 py-1 text-xs shadow-inner',
      shadow: 'shadow-2xl shadow-black/50'
    },
    contrast: {
      name: 'Metallic',
      wrapper: 'bg-gray-900 text-gray-100 perspective-1000',
      nav: 'bg-gray-800 border-b border-gray-600',
      card: 'bg-gradient-to-br from-gray-700 via-gray-600 to-gray-700 border-2 border-gray-400 rounded-xl shadow-[0_0_0_1px_rgba(0,0,0,1)]',
      button: 'bg-gradient-to-b from-yellow-500 to-yellow-600 border-2 border-white text-black font-black px-6 py-2 rounded-lg shadow-lg hover:brightness-110',
      buttonSecondary: 'bg-gray-800 border-2 border-gray-400 text-white px-6 py-2 rounded-lg font-bold',
      input: 'bg-black border-2 border-gray-500 text-white px-4 py-2 rounded-lg w-full font-bold',
      accentText: 'text-yellow-400 font-bold drop-shadow-md',
      badge: 'bg-gray-800 border border-gray-500 text-white px-2 py-1 text-xs font-bold',
      shadow: 'shadow-xl'
    }
  },
  'vibrant-block': {
    light: {
      name: 'Electric Pop',
      wrapper: 'bg-indigo-900 text-white font-bold',
      nav: 'bg-pink-500 text-white border-b-4 border-yellow-400',
      card: 'bg-yellow-400 text-indigo-900 p-0 overflow-hidden',
      button: 'bg-cyan-400 text-black px-8 py-3 hover:bg-cyan-300 hover:scale-105 transition-transform duration-200 uppercase tracking-widest',
      buttonSecondary: 'bg-indigo-600 text-white px-8 py-3 hover:bg-indigo-500 border-2 border-transparent hover:border-white transition-all',
      input: 'bg-white text-black border-4 border-indigo-600 p-3 w-full font-bold focus:border-pink-500 outline-none',
      accentText: 'text-pink-500 bg-white px-2 italic',
      badge: 'bg-black text-white px-3 py-1 font-mono text-xs',
      shadow: ''
    },
    dark: {
      name: 'Neon Night',
      wrapper: 'bg-black text-white font-bold',
      nav: 'bg-purple-900 text-white border-b-4 border-green-400',
      card: 'bg-purple-800 text-white p-0 overflow-hidden border-2 border-green-400',
      button: 'bg-green-400 text-black px-8 py-3 hover:bg-green-300 hover:scale-105 transition-transform duration-200 uppercase tracking-widest font-black',
      buttonSecondary: 'bg-transparent text-green-400 border-4 border-green-400 px-8 py-3 hover:bg-green-400 hover:text-black transition-all',
      input: 'bg-black text-green-400 border-4 border-purple-500 p-3 w-full font-bold focus:border-green-400 outline-none',
      accentText: 'text-black bg-green-400 px-2 italic',
      badge: 'bg-green-400 text-black px-3 py-1 font-mono text-xs font-bold',
      shadow: ''
    },
    contrast: {
      name: 'CMYK',
      wrapper: 'bg-white text-black font-bold',
      nav: 'bg-cyan-400 text-black border-b-4 border-black',
      card: 'bg-magenta-500 bg-[#ff00ff] text-white p-0 overflow-hidden border-4 border-black',
      button: 'bg-yellow-400 text-black border-4 border-black px-8 py-3 hover:translate-x-1 hover:translate-y-1 transition-transform uppercase font-black',
      buttonSecondary: 'bg-white text-black border-4 border-black px-8 py-3 hover:bg-black hover:text-white transition-all font-black',
      input: 'bg-white text-black border-4 border-black p-3 w-full font-black focus:bg-yellow-100 outline-none',
      accentText: 'bg-black text-yellow-400 px-2',
      badge: 'bg-white border-2 border-black text-black px-3 py-1 font-mono text-xs font-bold',
      shadow: ''
    }
  },
  'dark-mode': {
    light: {
      name: 'Inverted (Light)',
      wrapper: 'bg-gray-100 text-gray-800 font-sans',
      nav: 'bg-white border-b border-gray-300',
      card: 'bg-white rounded-lg border border-gray-200 hover:border-gray-300 transition-colors shadow-sm',
      button: 'bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-500 transition-colors',
      buttonSecondary: 'bg-gray-100 text-gray-600 px-5 py-2 rounded-md hover:bg-gray-200 transition-colors',
      input: 'bg-gray-50 border border-gray-300 rounded-md px-4 py-2 text-gray-800 focus:border-blue-500 focus:outline-none w-full',
      accentText: 'text-blue-600',
      badge: 'bg-blue-100 text-blue-700 rounded px-2 py-0.5 text-xs border border-blue-200',
      shadow: 'shadow-lg shadow-gray-200'
    },
    dark: {
      name: 'OLED Default',
      wrapper: 'bg-[#121212] text-gray-200 font-sans',
      nav: 'bg-[#1e1e1e] border-b border-gray-800',
      card: 'bg-[#1e1e1e] rounded-lg border border-gray-800 hover:border-gray-700 transition-colors',
      button: 'bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-500 transition-colors focus:ring-2 focus:ring-blue-800 focus:outline-none',
      buttonSecondary: 'bg-[#2c2c2c] text-gray-300 px-5 py-2 rounded-md hover:bg-[#383838] transition-colors',
      input: 'bg-[#2c2c2c] border border-gray-700 rounded-md px-4 py-2 text-gray-200 focus:border-blue-500 focus:outline-none w-full placeholder-gray-500',
      accentText: 'text-blue-400',
      badge: 'bg-blue-900/30 text-blue-300 rounded px-2 py-0.5 text-xs border border-blue-900/50',
      shadow: 'shadow-lg shadow-black/40'
    },
    contrast: {
      name: 'True Black',
      wrapper: 'bg-black text-white font-sans',
      nav: 'bg-black border-b border-gray-600',
      card: 'bg-black rounded-lg border-2 border-gray-600 hover:border-white transition-colors',
      button: 'bg-white text-black px-5 py-2 rounded-md font-bold hover:bg-gray-200 transition-colors',
      buttonSecondary: 'bg-black text-white border border-white px-5 py-2 rounded-md hover:bg-gray-900 transition-colors',
      input: 'bg-black border-2 border-gray-600 rounded-md px-4 py-2 text-white focus:border-white focus:outline-none w-full',
      accentText: 'text-white font-bold underline',
      badge: 'bg-black border border-white text-white rounded px-2 py-0.5 text-xs font-bold',
      shadow: ''
    }
  },
  'accessible': {
    light: {
      name: 'Standard Accessible',
      wrapper: 'bg-[#f8f9fa] text-[#212529] font-sans text-lg',
      nav: 'bg-white border-b-2 border-[#212529]',
      card: 'bg-white border-2 border-[#212529] rounded-lg p-6',
      button: 'bg-[#005fcc] text-white px-6 py-3 rounded hover:bg-[#004494] focus:outline-none focus:ring-4 focus:ring-yellow-400 font-bold underline-offset-2 hover:underline',
      buttonSecondary: 'bg-white text-[#005fcc] border-2 border-[#005fcc] px-6 py-3 rounded hover:bg-[#f0f7ff] focus:outline-none focus:ring-4 focus:ring-yellow-400 font-bold',
      input: 'bg-white border-2 border-[#495057] rounded px-4 py-3 w-full text-[#212529] focus:outline-none focus:ring-4 focus:ring-yellow-400 focus:border-[#005fcc]',
      accentText: 'text-[#005fcc] font-bold',
      badge: 'bg-[#e9ecef] text-[#212529] border border-[#ced4da] rounded px-3 py-1 text-sm font-medium',
      shadow: ''
    },
    dark: {
      name: 'Dark Accessible',
      wrapper: 'bg-[#212529] text-white font-sans text-lg',
      nav: 'bg-[#343a40] border-b-2 border-white',
      card: 'bg-[#343a40] border-2 border-gray-400 rounded-lg p-6',
      button: 'bg-[#66b0ff] text-[#002a5c] px-6 py-3 rounded hover:bg-[#99caff] focus:outline-none focus:ring-4 focus:ring-yellow-400 font-bold underline-offset-2 hover:underline',
      buttonSecondary: 'bg-transparent text-[#66b0ff] border-2 border-[#66b0ff] px-6 py-3 rounded hover:bg-[#343a40] focus:outline-none focus:ring-4 focus:ring-yellow-400 font-bold',
      input: 'bg-[#212529] border-2 border-white rounded px-4 py-3 w-full text-white focus:outline-none focus:ring-4 focus:ring-yellow-400 focus:border-[#66b0ff]',
      accentText: 'text-[#66b0ff] font-bold',
      badge: 'bg-[#343a40] text-white border border-gray-500 rounded px-3 py-1 text-sm font-medium',
      shadow: ''
    },
    contrast: {
      name: 'High Contrast',
      wrapper: 'bg-black text-yellow-300 font-sans text-xl',
      nav: 'bg-black border-b-4 border-yellow-300',
      card: 'bg-black border-4 border-yellow-300 rounded-none p-6',
      button: 'bg-yellow-300 text-black px-6 py-4 rounded-none font-black hover:bg-white uppercase tracking-wider',
      buttonSecondary: 'bg-black text-yellow-300 border-4 border-yellow-300 px-6 py-4 rounded-none font-black hover:bg-yellow-300 hover:text-black',
      input: 'bg-black border-4 border-yellow-300 rounded-none px-4 py-4 w-full text-yellow-300 focus:outline-none focus:ring-4 focus:ring-white',
      accentText: 'text-white font-black underline decoration-4',
      badge: 'bg-yellow-300 text-black border-2 border-white rounded-none px-3 py-1 text-base font-bold',
      shadow: ''
    }
  },
  'claymorphism': {
    light: {
      name: 'Soft Clay',
      wrapper: 'bg-[#f0f4f8] text-slate-600 font-sans',
      nav: 'bg-white/50 backdrop-blur-sm border-b border-white/40',
      card: 'bg-white rounded-[32px] p-8 shadow-[inset_-10px_-10px_20px_rgba(255,255,255,1),10px_10px_20px_rgba(174,174,192,0.2)] border-[3px] border-white',
      button: 'bg-[#6c5ce7] text-white font-bold rounded-[20px] px-8 py-3 shadow-[inset_-4px_-4px_8px_rgba(0,0,0,0.2),inset_4px_4px_8px_rgba(255,255,255,0.2),8px_8px_16px_rgba(174,174,192,0.2)] hover:scale-105 transition-transform active:scale-95',
      buttonSecondary: 'bg-[#fff] text-[#6c5ce7] font-bold rounded-[20px] px-8 py-3 shadow-[inset_-4px_-4px_8px_rgba(174,174,192,0.2),inset_4px_4px_8px_rgba(255,255,255,1),8px_8px_16px_rgba(174,174,192,0.2)] hover:text-[#5b4cc4] transition-colors',
      input: 'bg-[#f0f4f8] rounded-[20px] px-6 py-3 w-full shadow-[inset_6px_6px_12px_rgba(174,174,192,0.2),inset_-6px_-6px_12px_rgba(255,255,255,1)] outline-none border-none text-slate-600',
      accentText: 'text-[#6c5ce7] font-extrabold',
      badge: 'bg-[#a29bfe] text-white rounded-full px-4 py-1 text-xs font-bold shadow-md',
      shadow: ''
    },
    dark: {
      name: 'Dark Clay',
      wrapper: 'bg-[#2d3436] text-slate-300 font-sans',
      nav: 'bg-[#2d3436] shadow-sm z-10',
      card: 'bg-[#2d3436] rounded-[32px] p-8 shadow-[inset_-10px_-10px_20px_rgba(60,60,60,1),10px_10px_20px_rgba(0,0,0,0.5)] border-[3px] border-[#353b48]',
      button: 'bg-[#0984e3] text-white font-bold rounded-[20px] px-8 py-3 shadow-[inset_-4px_-4px_8px_rgba(0,0,0,0.5),inset_4px_4px_8px_rgba(255,255,255,0.2),5px_5px_10px_rgba(0,0,0,0.3)] hover:scale-105 transition-transform',
      buttonSecondary: 'bg-[#2d3436] text-[#0984e3] font-bold rounded-[20px] px-8 py-3 shadow-[inset_-4px_-4px_8px_rgba(0,0,0,0.5),inset_4px_4px_8px_rgba(60,60,60,1),5px_5px_10px_rgba(0,0,0,0.3)] transition-colors',
      input: 'bg-[#2d3436] rounded-[20px] px-6 py-3 w-full shadow-[inset_4px_4px_8px_rgba(0,0,0,0.5),inset_-4px_-4px_8px_rgba(60,60,60,1)] outline-none border-none text-slate-300',
      accentText: 'text-[#74b9ff] font-extrabold',
      badge: 'bg-[#0984e3] text-white rounded-full px-4 py-1 text-xs font-bold shadow-md',
      shadow: ''
    },
    contrast: {
      name: 'Solid Form',
      wrapper: 'bg-white text-black font-sans',
      nav: 'bg-white border-b-2 border-black',
      card: 'bg-white rounded-[24px] p-8 border-4 border-black shadow-[8px_8px_0_black]',
      button: 'bg-[#6c5ce7] text-white font-bold rounded-[16px] px-8 py-3 border-4 border-black shadow-[4px_4px_0_black] hover:translate-y-1 hover:shadow-none transition-all',
      buttonSecondary: 'bg-white text-black font-bold rounded-[16px] px-8 py-3 border-4 border-black shadow-[4px_4px_0_black] hover:bg-gray-100',
      input: 'bg-white rounded-[16px] px-6 py-3 w-full border-4 border-black outline-none font-bold',
      accentText: 'text-[#6c5ce7] font-black underline',
      badge: 'bg-[#a29bfe] text-black border-2 border-black rounded-full px-4 py-1 text-xs font-bold',
      shadow: ''
    }
  },
  'aurora': {
    light: {
      name: 'Ethereal Day',
      wrapper: 'bg-slate-50 text-slate-800 font-sans relative overflow-hidden',
      nav: 'bg-white/30 backdrop-blur-xl border-b border-white/40 z-10 relative',
      card: 'bg-white/40 backdrop-blur-2xl border border-white/60 rounded-2xl relative z-10 overflow-hidden shadow-xl',
      button: 'bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white px-6 py-2 rounded-full font-medium hover:opacity-90 transition-opacity shadow-[0_4px_20px_rgba(168,85,247,0.3)]',
      buttonSecondary: 'bg-white/50 border border-white/60 text-slate-700 px-6 py-2 rounded-full hover:bg-white/80 transition-colors',
      input: 'bg-white/50 border border-white/40 rounded-xl px-4 py-2 text-slate-800 placeholder-slate-500 focus:outline-none focus:bg-white/80 w-full backdrop-blur-md',
      accentText: 'text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-indigo-600 font-bold',
      badge: 'bg-white/60 border border-white/50 rounded-full px-3 py-1 text-xs shadow-sm',
      shadow: 'shadow-xl'
    },
    dark: {
      name: 'Northern Lights',
      wrapper: 'bg-slate-900 text-white font-sans relative overflow-hidden',
      nav: 'bg-white/5 backdrop-blur-xl border-b border-white/10 z-10 relative',
      card: 'bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl relative z-10 overflow-hidden',
      button: 'bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white px-6 py-2 rounded-full font-medium hover:opacity-90 transition-opacity shadow-[0_0_20px_rgba(168,85,247,0.5)]',
      buttonSecondary: 'bg-white/10 border border-white/20 text-white px-6 py-2 rounded-full hover:bg-white/20 transition-colors',
      input: 'bg-black/20 border border-white/10 rounded-xl px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:border-purple-500/50 w-full backdrop-blur-md',
      accentText: 'text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-indigo-300 font-bold',
      badge: 'bg-white/10 border border-white/20 rounded-full px-3 py-1 text-xs',
      shadow: 'shadow-2xl'
    },
    contrast: {
      name: 'Deep Space',
      wrapper: 'bg-black text-white font-sans relative',
      nav: 'bg-black border-b border-purple-500 z-10 relative',
      card: 'bg-black border-2 border-purple-500 rounded-xl relative z-10 shadow-[0_0_15px_rgba(168,85,247,0.4)]',
      button: 'bg-purple-600 text-white px-6 py-2 rounded-full font-bold border-2 border-white hover:bg-purple-500',
      buttonSecondary: 'bg-black border-2 border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-black font-bold',
      input: 'bg-black border-2 border-purple-500 rounded-xl px-4 py-2 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-white w-full',
      accentText: 'text-purple-400 font-bold',
      badge: 'bg-purple-900 border border-purple-400 rounded-full px-3 py-1 text-xs text-white font-bold',
      shadow: ''
    }
  },
  'retro-futurism': {
    light: {
      name: 'Vaporwave',
      wrapper: 'bg-pink-50 text-purple-900 font-mono',
      nav: 'bg-white border-b-2 border-pink-400',
      card: 'bg-white/80 border-2 border-cyan-400 shadow-[4px_4px_0_pink]',
      button: 'bg-gradient-to-r from-cyan-400 to-pink-400 text-white px-6 py-2 font-bold hover:opacity-90 shadow-md uppercase tracking-wider',
      buttonSecondary: 'bg-white text-purple-900 border-2 border-purple-900 px-6 py-2 hover:bg-purple-50',
      input: 'bg-white border-2 border-purple-300 text-purple-900 px-4 py-2 w-full focus:shadow-[0_0_10px_pink] focus:outline-none placeholder-purple-300',
      accentText: 'text-pink-500 drop-shadow-sm font-black',
      badge: 'bg-cyan-100 border border-cyan-400 text-cyan-700 px-2 py-0.5 text-xs',
      shadow: ''
    },
    dark: {
      name: 'Synthwave',
      wrapper: 'bg-[#050510] text-[#0ff] font-mono',
      nav: 'bg-black border-b border-[#f0f] shadow-[0_0_10px_#f0f]',
      card: 'bg-black/80 border border-[#0ff] shadow-[0_0_15px_rgba(0,255,255,0.3)] relative overflow-hidden',
      button: 'bg-transparent text-[#f0f] border border-[#f0f] px-6 py-2 hover:bg-[#f0f] hover:text-black hover:shadow-[0_0_20px_#f0f] transition-all duration-100 uppercase tracking-wider',
      buttonSecondary: 'bg-transparent text-[#ffd700] border border-[#ffd700] px-6 py-2 hover:bg-[#ffd700] hover:text-black hover:shadow-[0_0_20px_#ffd700] transition-all',
      input: 'bg-[#111] border border-[#0ff] text-[#0ff] px-4 py-2 w-full focus:shadow-[0_0_10px_#0ff] focus:outline-none placeholder-[#0ff]/30',
      accentText: 'text-[#f0f] drop-shadow-[0_0_5px_rgba(255,0,255,0.8)]',
      badge: 'border border-[#0ff] text-[#0ff] px-2 py-0.5 text-xs shadow-[0_0_5px_#0ff]',
      shadow: ''
    },
    contrast: {
      name: 'Terminal',
      wrapper: 'bg-black text-[#00ff00] font-mono',
      nav: 'bg-black border-b border-[#00ff00]',
      card: 'bg-black border border-[#00ff00] rounded-none',
      button: 'bg-[#00ff00] text-black border border-[#00ff00] px-6 py-2 hover:bg-black hover:text-[#00ff00] font-bold uppercase',
      buttonSecondary: 'bg-black text-[#00ff00] border border-[#00ff00] px-6 py-2 hover:bg-[#00ff00] hover:text-black font-bold uppercase',
      input: 'bg-black border border-[#00ff00] text-[#00ff00] px-4 py-2 w-full focus:ring-1 focus:ring-[#00ff00] outline-none placeholder-[#00ff00]/50',
      accentText: 'text-[#00ff00] font-bold underline',
      badge: 'bg-black border border-[#00ff00] text-[#00ff00] px-2 py-0.5 text-xs font-bold',
      shadow: ''
    }
  },
  'bento-grid': {
    light: {
      name: 'Clean Grid',
      wrapper: 'bg-[#f5f5f7] text-[#1d1d1f] font-sans',
      nav: 'bg-white/80 backdrop-blur-md border-b border-gray-200',
      card: 'bg-white rounded-[24px] shadow-sm border border-gray-200 hover:shadow-md transition-shadow',
      button: 'bg-[#0071e3] text-white px-6 py-2 rounded-full font-medium hover:bg-[#0077ed] transition-colors',
      buttonSecondary: 'bg-[#e8e8ed] text-black px-6 py-2 rounded-full hover:bg-[#d2d2d7] transition-colors',
      input: 'bg-[#f5f5f7] border border-[#d2d2d7] rounded-xl px-4 py-2 w-full focus:border-[#0071e3] focus:ring-4 focus:ring-[#0071e3]/10 outline-none',
      accentText: 'text-[#0071e3] font-semibold',
      badge: 'bg-[#f5f5f7] text-[#1d1d1f] rounded-full px-3 py-1 text-xs font-medium border border-[#d2d2d7]',
      shadow: ''
    },
    dark: {
      name: 'Dark Grid',
      wrapper: 'bg-[#000000] text-[#f5f5f7] font-sans',
      nav: 'bg-[#1d1d1f]/80 backdrop-blur-md border-b border-[#424245]',
      card: 'bg-[#1c1c1e] rounded-[24px] border border-[#2c2c2e] hover:bg-[#2c2c2e] transition-colors',
      button: 'bg-[#0071e3] text-white px-6 py-2 rounded-full font-medium hover:bg-[#0077ed] transition-colors',
      buttonSecondary: 'bg-[#3a3a3c] text-white px-6 py-2 rounded-full hover:bg-[#48484a] transition-colors',
      input: 'bg-[#2c2c2e] border border-[#48484a] rounded-xl px-4 py-2 w-full text-white focus:border-[#0071e3] focus:ring-4 focus:ring-[#0071e3]/20 outline-none',
      accentText: 'text-[#2997ff] font-semibold',
      badge: 'bg-[#3a3a3c] text-white rounded-full px-3 py-1 text-xs font-medium',
      shadow: ''
    },
    contrast: {
      name: 'Structured',
      wrapper: 'bg-white text-black font-sans',
      nav: 'bg-white border-b-2 border-black',
      card: 'bg-white rounded-[16px] border-2 border-black p-6',
      button: 'bg-black text-white px-6 py-2 rounded-[12px] font-bold border-2 border-black hover:bg-white hover:text-black',
      buttonSecondary: 'bg-white text-black px-6 py-2 rounded-[12px] font-bold border-2 border-black hover:bg-black hover:text-white',
      input: 'bg-white border-2 border-black rounded-[12px] px-4 py-2 w-full font-medium focus:ring-2 focus:ring-black outline-none',
      accentText: 'text-black font-bold underline',
      badge: 'bg-gray-100 text-black rounded-[8px] px-3 py-1 text-xs font-bold border-2 border-black',
      shadow: ''
    }
  },
  'y2k-acid': {
    light: {
      name: 'Liquid Chrome',
      wrapper: 'bg-white text-black font-sans overflow-hidden',
      nav: 'bg-white/80 backdrop-blur border-b border-pink-500',
      card: 'bg-white border border-pink-300 shadow-[4px_4px_0_#ff00ff] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all',
      button: 'bg-gradient-to-r from-[#ccff00] to-[#00ffcc] text-black font-black px-6 py-2 rounded-full border border-black hover:scale-105 transition-transform uppercase italic',
      buttonSecondary: 'bg-transparent text-black border-2 border-black px-6 py-2 rounded-full hover:bg-black hover:text-white font-bold',
      input: 'bg-gray-50 border-2 border-[#ccff00] rounded-full px-4 py-2 w-full focus:border-pink-500 outline-none',
      accentText: 'text-pink-600 font-black italic tracking-tighter',
      badge: 'bg-black text-[#ccff00] rounded-none px-2 py-0.5 text-xs font-mono uppercase transform -rotate-2',
      shadow: ''
    },
    dark: {
      name: 'Cyber Rave',
      wrapper: 'bg-black text-[#e0e0e0] font-sans',
      nav: 'bg-black/90 border-b border-[#333]',
      card: 'bg-[#111] border border-[#333] hover:border-[#ccff00] transition-colors',
      button: 'bg-[#ccff00] text-black font-black px-6 py-2 rounded-none hover:bg-white hover:scale-105 transition-transform skew-x-[-10deg]',
      buttonSecondary: 'bg-transparent text-white border border-white px-6 py-2 hover:bg-white hover:text-black font-bold skew-x-[-10deg]',
      input: 'bg-[#222] border border-[#444] rounded-none px-4 py-2 w-full text-white focus:border-[#ccff00] outline-none',
      accentText: 'text-[#ccff00] font-black tracking-widest',
      badge: 'bg-[#ccff00] text-black px-2 py-0.5 text-xs font-bold uppercase',
      shadow: 'shadow-[0_0_15px_rgba(204,255,0,0.3)]'
    },
    contrast: {
      name: 'Acid High',
      wrapper: 'bg-[#0000ff] text-[#ffff00] font-mono',
      nav: 'bg-[#ff00ff] border-b-4 border-black',
      card: 'bg-[#ffff00] text-black border-4 border-black p-4',
      button: 'bg-black text-white px-6 py-3 font-black border-4 border-white hover:bg-[#00ff00] hover:text-black uppercase',
      buttonSecondary: 'bg-white text-black border-4 border-black px-6 py-3 font-black hover:bg-[#ff0000] hover:text-white',
      input: 'bg-white text-black border-4 border-black px-4 py-2 w-full font-bold focus:bg-[#00ffff]',
      accentText: 'bg-black text-white px-1',
      badge: 'bg-[#ff0000] text-white border-2 border-black px-2 py-1 text-xs font-bold',
      shadow: ''
    }
  },
  'paper-collage': {
    light: {
      name: 'Scrapbook',
      wrapper: 'bg-[#f3e9d2] text-[#4a4a4a] font-serif',
      nav: 'bg-[#f8f1e0] border-b border-[#d4c5a9] shadow-sm',
      card: 'bg-white p-6 shadow-md transform rotate-1 hover:rotate-0 transition-transform border border-gray-200',
      button: 'bg-[#2c2c2c] text-white px-6 py-2 transform -rotate-1 hover:rotate-0 transition-transform font-bold shadow-md',
      buttonSecondary: 'bg-[#f3e9d2] text-[#2c2c2c] border-2 border-[#2c2c2c] px-6 py-2 font-bold hover:bg-[#e6dcc0]',
      input: 'bg-white border-2 border-[#d4c5a9] px-4 py-2 w-full font-serif focus:border-[#2c2c2c] outline-none shadow-inner',
      accentText: 'text-[#8b5e3c] italic font-bold',
      badge: 'bg-[#e6dcc0] text-[#5c4b37] px-2 py-1 text-xs font-bold border border-[#c9bba6]',
      shadow: 'shadow-xl'
    },
    dark: {
      name: 'Chalkboard',
      wrapper: 'bg-[#2b2b2b] text-[#e0e0e0] font-serif',
      nav: 'bg-[#333] border-b border-[#444]',
      card: 'bg-[#3a3a3a] p-6 shadow-lg border border-[#555] transform rotate-[-1deg]',
      button: 'bg-[#e0e0e0] text-[#2b2b2b] px-6 py-2 font-bold hover:bg-white transform rotate-1',
      buttonSecondary: 'bg-transparent text-[#e0e0e0] border-2 border-[#e0e0e0] px-6 py-2 font-bold hover:bg-[#444]',
      input: 'bg-[#333] border-2 border-[#555] px-4 py-2 w-full text-white focus:border-white outline-none border-dashed',
      accentText: 'text-[#ffcc00] font-serif italic',
      badge: 'bg-[#444] text-white border border-[#666] px-2 py-1 text-xs',
      shadow: ''
    },
    contrast: {
      name: 'Cutout',
      wrapper: 'bg-white text-black font-sans',
      nav: 'bg-black text-white p-4',
      card: 'bg-white border-[3px] border-black p-6 shadow-[8px_8px_0_black]',
      button: 'bg-white text-black border-[3px] border-black px-6 py-2 font-black hover:bg-black hover:text-white',
      buttonSecondary: 'bg-gray-200 text-black border-[3px] border-black px-6 py-2 font-black',
      input: 'bg-white border-[3px] border-black px-4 py-2 w-full font-bold focus:bg-gray-100',
      accentText: 'bg-black text-white px-1 font-bold',
      badge: 'bg-white border-2 border-black text-black px-2 py-1 text-xs font-bold',
      shadow: ''
    }
  },
  'holographic': {
    light: {
      name: 'Pearl',
      wrapper: 'bg-gradient-to-tr from-gray-50 to-gray-100 text-gray-800 font-sans',
      nav: 'bg-white/40 backdrop-blur-md border-b border-white/50',
      card: 'bg-white/60 backdrop-blur-xl border border-white/60 shadow-lg rounded-2xl hover:shadow-xl transition-shadow',
      button: 'bg-gradient-to-r from-pink-200 via-purple-200 to-indigo-200 text-gray-800 px-6 py-2 rounded-full font-bold shadow-md hover:opacity-90',
      buttonSecondary: 'bg-white/50 text-gray-700 border border-white px-6 py-2 rounded-full hover:bg-white/80',
      input: 'bg-white/50 border border-white px-4 py-2 rounded-xl w-full focus:ring-2 focus:ring-purple-200 outline-none backdrop-blur-sm',
      accentText: 'text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-indigo-400 font-bold',
      badge: 'bg-gradient-to-r from-pink-100 to-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-bold border border-white',
      shadow: 'shadow-xl'
    },
    dark: {
      name: 'Oil Slick',
      wrapper: 'bg-gray-900 text-white font-sans',
      nav: 'bg-black/30 backdrop-blur-md border-b border-white/10',
      card: 'bg-gray-800/40 backdrop-blur-xl border border-white/10 shadow-lg rounded-2xl',
      button: 'bg-gradient-to-r from-emerald-500/80 via-blue-500/80 to-purple-500/80 text-white px-6 py-2 rounded-full font-bold shadow-lg border border-white/20',
      buttonSecondary: 'bg-white/10 text-white border border-white/20 px-6 py-2 rounded-full hover:bg-white/20',
      input: 'bg-black/30 border border-white/10 px-4 py-2 rounded-xl w-full text-white focus:border-blue-400 outline-none backdrop-blur-md',
      accentText: 'text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-purple-300 font-bold',
      badge: 'bg-white/10 border border-white/10 text-white px-2 py-1 rounded-full text-xs',
      shadow: 'shadow-2xl shadow-black/50'
    },
    contrast: {
      name: 'Prism',
      wrapper: 'bg-black text-white font-sans',
      nav: 'bg-gradient-to-r from-red-500 via-green-500 to-blue-500 p-1',
      card: 'bg-black border-2 border-white rounded-xl relative overflow-hidden',
      button: 'bg-white text-black px-6 py-2 rounded-full font-bold border-2 border-transparent hover:border-white hover:bg-black hover:text-white transition-all',
      buttonSecondary: 'bg-black text-white border-2 border-white px-6 py-2 rounded-full font-bold hover:bg-white hover:text-black',
      input: 'bg-black border-2 border-white px-4 py-2 rounded-full w-full text-white font-bold focus:bg-white/10',
      accentText: 'text-cyan-400 font-bold shadow-[0_0_10px_cyan]',
      badge: 'bg-white text-black px-2 py-1 rounded-full text-xs font-bold',
      shadow: ''
    }
  },
  'terminal-cli': {
    light: {
      name: 'TTY Light',
      wrapper: 'bg-white text-black font-mono',
      nav: 'bg-white border-b-2 border-black',
      card: 'bg-white border-2 border-black p-4 shadow-none',
      button: 'bg-white text-black border-2 border-black px-4 py-1 hover:bg-black hover:text-white transition-colors uppercase font-bold text-sm',
      buttonSecondary: 'bg-gray-100 text-black border border-black px-4 py-1 hover:bg-gray-200 text-sm',
      input: 'bg-white border-b-2 border-black px-2 py-1 w-full outline-none font-bold placeholder-black/50',
      accentText: 'bg-black text-white px-1',
      badge: 'border border-black px-1 text-xs uppercase',
      shadow: ''
    },
    dark: {
      name: 'Matrix',
      wrapper: 'bg-black text-[#00ff00] font-mono',
      nav: 'bg-black border-b border-[#003300]',
      card: 'bg-black border border-[#003300] p-4 shadow-[0_0_10px_rgba(0,255,0,0.1)]',
      button: 'bg-transparent text-[#00ff00] border border-[#00ff00] px-4 py-1 hover:bg-[#00ff00] hover:text-black transition-colors uppercase text-sm',
      buttonSecondary: 'bg-transparent text-[#008800] border border-[#008800] px-4 py-1 hover:bg-[#003300] text-sm',
      input: 'bg-black border-b border-[#00ff00] px-2 py-1 w-full outline-none text-[#00ff00] placeholder-[#005500]',
      accentText: 'text-[#00ff00] font-bold animate-pulse',
      badge: 'bg-[#003300] text-[#00ff00] px-1 text-xs border border-[#00ff00]',
      shadow: ''
    },
    contrast: {
      name: 'Amber Monitor',
      wrapper: 'bg-black text-[#ffb000] font-mono',
      nav: 'bg-black border-b-2 border-[#ffb000]',
      card: 'bg-black border-2 border-[#ffb000] p-4',
      button: 'bg-[#ffb000] text-black px-4 py-1 font-bold hover:bg-black hover:text-[#ffb000] border-2 border-[#ffb000] uppercase',
      buttonSecondary: 'bg-black text-[#ffb000] border-2 border-[#ffb000] px-4 py-1 font-bold hover:bg-[#ffb000] hover:text-black',
      input: 'bg-black border-2 border-[#ffb000] px-2 py-1 w-full outline-none text-[#ffb000] font-bold',
      accentText: 'bg-[#ffb000] text-black px-1 font-bold',
      badge: 'bg-black border border-[#ffb000] text-[#ffb000] px-1 text-xs font-bold',
      shadow: ''
    }
  },
  'material-you': {
    light: {
      name: 'Pastel Garden',
      wrapper: 'bg-[#fdfcf4] text-[#1a1c19] font-sans',
      nav: 'bg-[#fdfcf4] border-b border-[#74796d]/20',
      card: 'bg-[#e2e3dd] rounded-[24px] p-6 shadow-sm hover:shadow-md transition-shadow',
      button: 'bg-[#386a20] text-white px-6 py-3 rounded-full font-medium hover:bg-[#386a20]/90 hover:shadow-md transition-all',
      buttonSecondary: 'bg-transparent text-[#386a20] border border-[#74796d] px-6 py-3 rounded-full hover:bg-[#386a20]/10',
      input: 'bg-[#e2e3dd] border-b-2 border-[#74796d] rounded-t-xl px-4 py-3 w-full focus:bg-[#d5d6d0] focus:border-[#386a20] outline-none transition-colors',
      accentText: 'text-[#386a20] font-bold',
      badge: 'bg-[#b7f397] text-[#042100] px-3 py-1 rounded-full text-xs font-bold',
      shadow: ''
    },
    dark: {
      name: 'Night Nature',
      wrapper: 'bg-[#1a1c19] text-[#e2e3dd] font-sans',
      nav: 'bg-[#1a1c19] border-b border-[#8e918a]/20',
      card: 'bg-[#2c312b] rounded-[24px] p-6',
      button: 'bg-[#9cd67d] text-[#0c3900] px-6 py-3 rounded-full font-bold hover:bg-[#b7f397] transition-colors',
      buttonSecondary: 'bg-transparent text-[#9cd67d] border border-[#8e918a] px-6 py-3 rounded-full hover:bg-[#9cd67d]/10',
      input: 'bg-[#2c312b] border-b-2 border-[#8e918a] rounded-t-xl px-4 py-3 w-full text-white focus:bg-[#363b35] focus:border-[#9cd67d] outline-none',
      accentText: 'text-[#9cd67d] font-bold',
      badge: 'bg-[#36492f] text-[#cbf2ad] px-3 py-1 rounded-full text-xs font-medium',
      shadow: 'shadow-lg shadow-black/40'
    },
    contrast: {
      name: 'High Fidelity',
      wrapper: 'bg-white text-black font-sans',
      nav: 'bg-[#e8def8] border-b-2 border-[#1d192b]',
      card: 'bg-[#f3edf7] rounded-[16px] border-2 border-[#1d192b] p-6',
      button: 'bg-[#6750a4] text-white px-6 py-3 rounded-full font-bold border-2 border-transparent hover:border-[#1d192b] hover:bg-[#6750a4]/90',
      buttonSecondary: 'bg-white text-[#6750a4] border-2 border-[#6750a4] px-6 py-3 rounded-full font-bold hover:bg-[#eaddff]',
      input: 'bg-white border-2 border-[#1d192b] rounded-[8px] px-4 py-3 w-full font-bold focus:bg-[#f3edf7]',
      accentText: 'text-[#6750a4] font-black',
      badge: 'bg-[#e8def8] text-[#1d192b] px-3 py-1 rounded-full text-xs font-bold border border-[#1d192b]',
      shadow: ''
    }
  }
};
