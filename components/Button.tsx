export default function Button({ children, onClick }: { children: React.ReactNode, onClick?: () => void }) {
  return <button onClick={onClick} className="bg-blue-700 hover:bg-blue-800 text-white px-2 py-0.5 rounded-sm text-xs">{children}</button>;
}
