import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-4">e-Dnevnik</h1>
      <p className="mb-4">Dobrodošli u sustav e-Dnevnik.</p>
      <Link href="/ocjene" className="text-blue-500 hover:underline">
        Idi na popis ocjena
      </Link>
    </main>
  );
}
