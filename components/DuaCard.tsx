
import React, { useState } from 'react';
import { Dua } from '../types';
import { HeartIcon, CopyIcon } from './Icons';

interface DuaCardProps {
  dua: Dua;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
}

export const DuaCard: React.FC<DuaCardProps> = ({ dua, isFavorite, onToggleFavorite }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const text = `${dua.title}\n\n${dua.arabic}\n\n${dua.transliteration}\n\n${dua.translation}\n\nReference: ${dua.reference}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100 hover:shadow-md transition-shadow group">
      <div className="flex justify-between items-start mb-4">
        <div>
          <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wider bg-emerald-50 px-2 py-1 rounded-md">
            {dua.category}
          </span>
          <h3 className="mt-2 text-xl font-bold text-stone-800">{dua.title}</h3>
        </div>
        <div className="flex gap-2">
          <button 
            onClick={handleCopy}
            className="p-2 text-stone-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-full transition-colors relative"
            title="Copy Dua"
          >
            <CopyIcon />
            {copied && (
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-stone-800 text-white text-[10px] px-2 py-1 rounded">
                Copied!
              </span>
            )}
          </button>
          <button 
            onClick={() => onToggleFavorite(dua.id)}
            className={`p-2 rounded-full transition-colors ${
              isFavorite 
                ? 'text-rose-500 bg-rose-50 hover:bg-rose-100' 
                : 'text-stone-400 hover:text-rose-500 hover:bg-rose-50'
            }`}
            title={isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
          >
            <HeartIcon fill={isFavorite ? 'currentColor' : 'none'} />
          </button>
        </div>
      </div>

      <div className="space-y-6">
        <p className="text-3xl leading-relaxed text-right font-arabic text-stone-900 leading-[1.8]" dir="rtl">
          {dua.arabic}
        </p>
        
        <div className="space-y-3">
          <p className="text-sm italic text-stone-500 leading-relaxed">
            {dua.transliteration}
          </p>
          <p className="text-base text-stone-700 leading-relaxed font-medium">
            {dua.translation}
          </p>
        </div>

        <div className="pt-4 border-t border-stone-50 flex justify-between items-center">
          <span className="text-[10px] text-stone-400 font-medium uppercase tracking-widest">
            {dua.reference}
          </span>
        </div>
      </div>
    </div>
  );
};
