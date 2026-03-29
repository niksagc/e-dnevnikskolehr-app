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
    <nav className="bg-white border-b border-gray-200">
      <div className="container mx-auto max-w-[1200px] flex gap-6 px-6">
        {tabs.map((tab) => (
          <Link
            key={tab.name}
            href={tab.href}
            className={`py-3 text-sm ${pathname === tab.href ? 'border-b-2 border-blue-600 font-bold text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
          >
            {tab.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
