'use client';

export default function Svjedodzbe() {
  const students = [
    { id: 1, name: 'Ivić, Ivan', avg: 4.5 },
    { id: 2, name: 'Horvat, Ana', avg: 5.0 },
  ];

  return (
    <div className="p-2">
      <h2 className="text-lg font-bold mb-2">Generiranje svjedodžbi</h2>
      <table className="w-full border-collapse border border-gray-400 text-xs">
        <thead className="bg-gray-200">
          <tr>
            <th className="border border-gray-400 p-1 text-left">Učenik</th>
            <th className="border border-gray-400 p-1">Prosjek</th>
            <th className="border border-gray-400 p-1">Akcija</th>
          </tr>
        </thead>
        <tbody>
          {students.map(s => (
            <tr key={s.id}>
              <td className="border border-gray-400 p-1">{s.name}</td>
              <td className="border border-gray-400 p-1 text-center">{s.avg.toFixed(2)}</td>
              <td className="border border-gray-400 p-1 text-center">
                <button className="text-xs underline text-blue-700">Generiraj</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
