'use client';
import { useState, useEffect } from 'react';
import { db } from '@/lib/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';

export default function ClassSelector({ onSelect }: { onSelect: (classId: string) => void }) {
  const [classes, setClasses] = useState<any[]>([]);

  useEffect(() => {
    const fetchClasses = async () => {
      // Mock data for now, will be replaced with Firebase query
      const mockClasses = [
        { id: '1', name: '4.a', teacher: 'Ivić, Ivan', description: '4. razred srednje škole', role: 'main' },
        { id: '2', name: '3.b', teacher: 'Horvat, Ana', description: '3. razred srednje škole', role: 'assistant' },
      ];
      setClasses(mockClasses);
    };
    fetchClasses();
  }, []);

  return (
    <div className="p-2">
      <h2 className="text-lg font-bold mb-2">Odabir razredne knjige</h2>
      <table className="w-full border-collapse border border-gray-400 text-xs">
        <thead className="bg-gray-200">
          <tr>
            <th className="border border-gray-400 p-1 text-left">Razred</th>
            <th className="border border-gray-400 p-1 text-left">Razrednik</th>
            <th className="border border-gray-400 p-1 text-left">Opis</th>
          </tr>
        </thead>
        <tbody>
          {classes.map(c => (
            <tr 
              key={c.id} 
              onClick={() => onSelect(c.id)}
              className={`cursor-pointer hover:bg-gray-100 ${c.role === 'main' ? 'bg-green-100' : c.role === 'assistant' ? 'bg-orange-100' : 'bg-white'}`}
            >
              <td className="border border-gray-400 p-1 font-bold">{c.name}</td>
              <td className="border border-gray-400 p-1">{c.teacher}</td>
              <td className="border border-gray-400 p-1">{c.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
