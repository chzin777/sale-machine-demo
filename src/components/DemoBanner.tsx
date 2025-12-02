import React from 'react';

export default function DemoBanner() {
  return (
    <div className="fixed bottom-4 left-4 z-50 bg-gray-800/90 backdrop-blur-sm text-white px-3 py-2 rounded-lg shadow-lg text-xs font-medium border border-gray-700/50">
      <div className="flex items-center gap-2">
        <span className="opacity-70">🎭</span>
        <span className="opacity-90">Modo Demonstração</span>
      </div>
    </div>
  );
}
