import React from 'react';
import { StyleDefinition } from '../types';
import { ArrowRight, Palette, Sparkles } from 'lucide-react';
import { StylePreviews } from './StylePreviews';

interface StyleCardProps {
  styleDef: StyleDefinition;
  onClick: (id: string) => void;
}

const StyleCard: React.FC<StyleCardProps> = ({ styleDef, onClick }) => {
  const PreviewComponent = StylePreviews[styleDef.id];

  return (
    <div 
      className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer border border-gray-100 h-full"
      onClick={() => onClick(styleDef.id)}
    >
      <div className="relative h-48 w-full overflow-hidden bg-gray-50 border-b border-gray-100">
        {PreviewComponent ? (
            <PreviewComponent />
        ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-400 text-sm">
                No Preview Available
            </div>
        )}
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />
        <div className="absolute bottom-4 left-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10 pointer-events-none">
           <span className="flex items-center gap-2 font-medium text-sm">Explore Style <ArrowRight size={14} /></span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-2 text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
          {styleDef.name}
        </h3>
        <p className="mb-4 text-sm text-gray-500 line-clamp-2">
          {styleDef.description}
        </p>

        <div className="mt-auto space-y-3 border-t border-gray-100 pt-4">
          <div className="flex items-start gap-2 text-xs text-gray-600">
            <Palette size={14} className="mt-0.5 shrink-0 text-blue-500" />
            <span className="line-clamp-1">{styleDef.colorSchemes}</span>
          </div>
          <div className="flex items-start gap-2 text-xs text-gray-600">
            <Sparkles size={14} className="mt-0.5 shrink-0 text-purple-500" />
            <span className="line-clamp-1">{styleDef.effects}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StyleCard;
