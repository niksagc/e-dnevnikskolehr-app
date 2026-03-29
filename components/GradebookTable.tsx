'use client';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function GradebookTable() {
  const [grades, setGrades] = useState<any[]>([]);

  useEffect(() => {
    async function loadData() {
      const { data, error } = await supabase.from('grades').select('*');
      if (error) console.error("Greška:", error);
      else setGrades(data || []);
    }
    loadData();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Razredna knjiga</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Učenik ID</th>
            <th className="border p-2">Ocjena</th>
            <th className="border p-2">Bilješka</th>
          </tr>
        </thead>
        <tbody>
          {grades.map(g => (
            <tr key={g.id} className="border-b">
              <td className="border p-2">{g.student_id}</td>
              <td className="border p-2 font-bold text-center">{g.grade}</td>
              <td className="border p-2">{g.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
