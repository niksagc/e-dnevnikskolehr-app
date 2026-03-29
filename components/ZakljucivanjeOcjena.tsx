'use client';
import { useState } from 'react';

export default function ZakljucivanjeOcjena() {
  const [grades, setGrades] = useState([
    { id: 1, name: 'Ivić, Ivan', grade: 4, locked: false },
    { id: 2, name: 'Horvat, Ana', grade: 5, locked: true },
  ]);

  const toggleLock = (id: number) => {
    setGrades(grades.map(g => g.id === id ? { ...g, locked: !g.locked } : g));
  };

  return (
    <div className="p-2">
      <h2 className="text-lg font-bold mb-2">Zaključivanje ocjena</h2>
      <table className="w-full border-collapse border border-gray-400 text-xs">
        <thead className="bg-gray-200">
          <tr>
            <th className="border border-gray-400 p-1 text-left">Učenik</th>
            <th className="border border-gray-400 p-1">Ocjena</th>
            <th className="border border-gray-400 p-1">Akcija</th>
          </tr>
        </thead>
        <tbody>
          {grades.map(g => (
            <tr key={g.id}>
              <td className="border border-gray-400 p-1">{g.name}</td>
              <td className="border border-gray-400 p-1 text-center">
                <input type="number" value={g.grade} disabled={g.locked} className="w-8 text-center bg-transparent" />
              </td>
              <td className="border border-gray-400 p-1 text-center">
                <button onClick={() => toggleLock(g.id)} className="text-xs underline text-blue-700">
                  {g.locked ? 'Otključaj' : 'Zaključaj'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
