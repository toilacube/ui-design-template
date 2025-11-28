import React, { useState, useEffect } from 'react';
import { StyleDefinition } from '../types';
import { ArrowLeft } from 'lucide-react';

interface DemoPageProps {
  styleDef: StyleDefinition;
  onBack: () => void;
}

const DemoPage: React.FC<DemoPageProps> = ({ styleDef, onBack }) => {
  const [iframeSrc, setIframeSrc] = useState<string>('');

  useEffect(() => {
    setIframeSrc(`/demo-content/${styleDef.id}.html`);
  }, [styleDef.id]);

  return (
    <div className="relative w-full h-screen bg-gray-50 overflow-hidden">
      {/* Floating Back Button */}
      <button 
        onClick={onBack} 
        className="absolute top-4 left-4 z-50 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-300 group border border-gray-200"
        aria-label="Go Back"
      >
        <ArrowLeft size={24} className="text-gray-700 group-hover:-translate-x-1 transition-transform duration-300" />
      </button>

      {/* Full Screen Iframe */}
      <div className="w-full h-full">
        {iframeSrc && (
          <iframe 
            src={iframeSrc} 
            title={`${styleDef.name} Demo`}
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
      </div>
    </div>
  );
};

export default DemoPage;
