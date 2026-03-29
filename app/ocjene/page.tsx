'use client';
import { useState } from 'react';
import Button from '@/components/Button';
import Modal from '@/components/Modal';

const grades = [
  { id: 1, student: 'Ivić, Ivan', subject: 'Matematika', grade: 4, date: '2026-03-25', note: 'Odlično znanje' },
  { id: 2, student: 'Horvat, Ana', subject: 'Engleski', grade: 5, date: '2026-03-26', note: 'Aktivna na satu' },
];

export default function OcjenePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Ocjene</h2>
        <Button onClick={() => setIsModalOpen(true)}>Dodaj ocjenu</Button>
      </div>
      <table className="w-full border-collapse border border-gray-300 text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-300 p-2 text-left">Učenik</th>
            <th className="border border-gray-300 p-2 text-left">Predmet</th>
            <th className="border border-gray-300 p-2">Ocjena</th>
            <th className="border border-gray-300 p-2 text-left">Datum</th>
            <th className="border border-gray-300 p-2 text-left">Bilješka</th>
          </tr>
        </thead>
        <tbody>
          {grades.map(g => (
            <tr key={g.id} className="hover:bg-blue-50">
              <td className="border border-gray-300 p-2">{g.student}</td>
              <td className="border border-gray-300 p-2">{g.subject}</td>
              <td className="border border-gray-300 p-2 text-center font-bold">{g.grade}</td>
              <td className="border border-gray-300 p-2">{g.date}</td>
              <td className="border border-gray-300 p-2">{g.note}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h3 className="font-bold mb-4">Dodaj novu ocjenu</h3>
        <input type="number" placeholder="Ocjena (1-5)" className="w-full p-2 mb-2 border" />
        <input type="date" className="w-full p-2 mb-2 border" />
        <textarea placeholder="Bilješka" className="w-full p-2 mb-2 border" />
        <Button onClick={() => setIsModalOpen(false)}>Spremi</Button>
      </Modal>
    </div>
  );
}
