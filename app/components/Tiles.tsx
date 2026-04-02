import Link from 'next/link';

const Tiles = () => {
  return (
    <div>
      <nav className="bg-gray-600 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 p-4 rounded">
        <Link href="/" className="hover:bg-slate-800 p-4 rounded text-center transition">Home</Link>
        <Link href="/resume" className="hover:bg-slate-800 p-4 rounded text-center transition">Resume</Link>
        <Link href="/projects" className="hover:bg-slate-800 p-4 rounded text-center transition">Projects</Link>
        <Link href="/recipes" className="hover:bg-slate-800 p-4 rounded text-center transition">Recipes</Link>
        <Link href="/about" className="hover:bg-slate-800 p-4 rounded text-center transition">About</Link>
      </nav>
    </div>
  );
};

export default Tiles;