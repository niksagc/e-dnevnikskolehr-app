'use client';
import { useState } from 'react';

export default function RazredStatus() {
  const [locked, setLocked] = useState(false);

  return (
    <div className="p-2 border border-gray-400">
      <h2 className="text-lg font-bold mb-2">Status razreda</h2>
      <p className="text-xs mb-2">Status: {locked ? <span className="text-red-600 font-bold">ZAKLJUČANO</span> : <span className="text-green-600 font-bold">OTKLJUČANO</span>}</p>
      <button 
        onClick={() => setLocked(!locked)}
        className={`px-2 py-0.5 text-xs text-white ${locked ? 'bg-gray-500' : 'bg-red-700'}`}
      >
        {locked ? 'Otključaj razred' : 'Zaključaj razred'}
      </button>
    </div>
  );
}
