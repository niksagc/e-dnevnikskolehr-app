'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const tabs = [
  { name: 'Dashboard', href: '/' },
  { name: 'Razredi', href: '/razredi' },
  { name: 'Učenici', href: '/ucenici' },
  { name: 'Ocjene', href: '/ocjene' },
  { name: 'Izostanci', href: '/izostanci' },
  { name: 'Nastava', href: '/nastava' },
  { name: 'Ispiti', href: '/ispiti' },
  { name: 'Izvještaji', href: '/izvjestaji' },
];

export default function NavTabs() {
  const pathname = usePathname();
  return (
    <nav className="bg-white border-b border-gray-400">
      <div className="container mx-auto max-w-[1100px] flex gap-2 px-2">
        {tabs.map((tab) => (
          <Link
            key={tab.name}
            href={tab.href}
            className={`py-1 px-2 text-xs ${pathname === tab.href ? 'border-b-2 border-[#1e40af] font-bold text-[#1e40af]' : 'text-gray-700 hover:text-[#1e40af]'}`}
          >
            {tab.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
