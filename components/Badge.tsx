export default function Badge({ status }: { status: 'pending' | 'justified' | 'unjustified' }) {
  const colors = {
    pending: 'bg-yellow-100 text-yellow-800',
    justified: 'bg-green-100 text-green-800',
    unjustified: 'bg-red-100 text-red-800',
  };
  return <span className={`px-1 py-0 rounded-sm text-[10px] font-semibold ${colors[status]}`}>{status.toUpperCase()}</span>;
}
