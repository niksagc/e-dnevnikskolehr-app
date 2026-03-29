'use client';
import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

export default function GradeEntry() {
  const [students, setStudents] = useState<any[]>([]);
  const [subjects, setSubjects] = useState<any[]>([]);
  const [formData, setFormData] = useState({ student_id: '', subject_id: '', grade: 1, description: '' });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadData() {
      const { data: s } = await supabase.from('students').select('id, first_name, last_name');
      const { data: sub } = await supabase.from('subjects').select('id, name');
      setStudents(s || []);
      setSubjects(sub || []);
    }
    loadData();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.from('grades').insert([formData]);
    setLoading(false);
    if (error) alert('Greška: ' + error.message);
    else alert('Ocjena uspješno unesena!');
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 border rounded shadow-sm bg-white">
      <h2 className="text-xl font-bold mb-4">Unos ocjene</h2>
      <select className="w-full p-2 mb-4 border" onChange={e => setFormData({...formData, student_id: e.target.value})}>
        <option value="">Odaberi učenika</option>
        {students.map(s => <option key={s.id} value={s.id}>{s.last_name} {s.first_name}</option>)}
      </select>
      <select className="w-full p-2 mb-4 border" onChange={e => setFormData({...formData, subject_id: e.target.value})}>
        <option value="">Odaberi predmet</option>
        {subjects.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
      </select>
      <input type="number" min="1" max="5" className="w-full p-2 mb-4 border" placeholder="Ocjena (1-5)" onChange={e => setFormData({...formData, grade: parseInt(e.target.value)})} />
      <textarea className="w-full p-2 mb-4 border" placeholder="Bilješka" onChange={e => setFormData({...formData, description: e.target.value})} />
      <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded" disabled={loading}>
        {loading ? 'Spremanje...' : 'Unesi ocjenu'}
      </button>
    </form>
  );
}
