'use client';
import { useState } from 'react';

const initialData = [
  { id: 1, name: 'Ivić, Ivan', grades: { mat: 4, eng: 3, fiz: 5 } },
  { id: 2, name: 'Horvat, Ana', grades: { mat: 5, eng: 5, fiz: 4 } },
];

export default function RazrednaKnjiga() {
  const [data, setData] = useState(initialData);

  const updateGrade = (id: number, subject: string, val: string) => {
    const num = parseInt(val) || 0;
    setData(data.map(s => s.id === id ? { ...s, grades: { ...s.grades, [subject]: num } } : s));
  };

  return (
    <table className="w-full border-collapse border border-gray-300 text-sm">
      <thead className="bg-gray-100">
        <tr>
          <th className="border border-gray-300 p-2 text-left">Učenik</th>
          <th className="border border-gray-300 p-2">Matematika</th>
          <th className="border border-gray-300 p-2">Engleski</th>
          <th className="border border-gray-300 p-2">Fizika</th>
          <th className="border border-gray-300 p-2">Prosjek</th>
        </tr>
      </thead>
      <tbody>
        {data.map(s => {
          const avg = (s.grades.mat + s.grades.eng + s.grades.fiz) / 3;
          return (
            <tr key={s.id} className="hover:bg-blue-50">
              <td className="border border-gray-300 p-2">{s.name}</td>
              {['mat', 'eng', 'fiz'].map(sub => (
                <td key={sub} className="border border-gray-300 p-1">
                  <input type="number" min="1" max="5" value={s.grades[sub as keyof typeof s.grades]} onChange={(e) => updateGrade(s.id, sub, e.target.value)} className="w-full text-center bg-transparent" />
                </td>
              ))}
              <td className="border border-gray-300 p-2 text-center font-bold">{avg.toFixed(2)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
