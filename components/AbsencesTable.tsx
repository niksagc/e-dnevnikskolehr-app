import Badge from './Badge';

const absences = [
  { id: 1, name: 'Ivić, Ivan', date: '2026-03-29', status: 'pending' },
  { id: 2, name: 'Horvat, Ana', date: '2026-03-28', status: 'justified' },
  { id: 3, name: 'Kovač, Marko', date: '2026-03-27', status: 'unjustified' },
];

export default function AbsencesTable() {
  return (
    <table className="w-full border-collapse border border-gray-400 text-xs">
      <thead className="bg-gray-200">
        <tr>
          <th className="border border-gray-400 p-1 text-left">Učenik</th>
          <th className="border border-gray-400 p-1 text-left">Datum</th>
          <th className="border border-gray-400 p-1 text-left">Status</th>
        </tr>
      </thead>
      <tbody>
        {absences.map(a => (
          <tr key={a.id} className="hover:bg-gray-50">
            <td className="border border-gray-400 p-1">{a.name}</td>
            <td className="border border-gray-400 p-1">{a.date}</td>
            <td className="border border-gray-400 p-1"><Badge status={a.status as any} /></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
