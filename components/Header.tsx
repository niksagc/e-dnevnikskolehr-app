export default function Header() {
  return (
    <header className="bg-[#1e40af] text-white p-2 w-full">
      <div className="container mx-auto max-w-[1100px] flex justify-between items-center">
        <div className="flex items-center gap-2">
          <h1 className="text-sm font-bold">e-Dnevnik</h1>
        </div>
        <div className="flex items-center gap-4 text-xs">
          <span>Marko Marković</span>
          <button className="bg-white/10 hover:bg-white/20 px-2 py-0.5 rounded-sm">Odjava</button>
        </div>
      </div>
    </header>
  );
}
