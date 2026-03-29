export default function Header() {
  return (
    <header className="bg-[#1e3a8a] text-white p-4 w-full">
      <div className="container mx-auto max-w-[1200px] flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white/20 rounded"></div>
          <h1 className="text-xl font-bold">e-Dnevnik</h1>
        </div>
        <div className="flex items-center gap-4 text-sm">
          <span>Korisnik: Marko Marković</span>
          <button className="bg-white/10 hover:bg-white/20 px-3 py-1 rounded">Odjava</button>
        </div>
      </div>
    </header>
  );
}
