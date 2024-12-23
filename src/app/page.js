'use client';
import Link from 'next/link';

export default function Home() {
  return (
    <div>

<Header/>

    <main>
    <Link href="/login">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Ir a Login
        </button>
      </Link>|
    </main>

</div>
  );
}

export function Header() {
  return (
      <header className = "">
          <h1 className = "">Futura barra de navegación</h1>
      </header>
  );
}
