import Link from 'next/link';
import { SITE_CONFIG } from '../constants/site';

const Sidebar = () => {
  return (
    <aside className="fixed left-0 top-0 h-screen w-48 bg-red-900 text-white p-4">
      <div className="mb-8 font-bold text-xl">{SITE_CONFIG.name}</div>
      <nav className="flex flex-col gap-2">
        <Link href="/" className="hover:bg-red-800 p-2 rounded transition">Home</Link>
        <Link href="/resume" className="hover:bg-red-800 p-2 rounded transition">Resume</Link>
        <Link href="/projects" className="hover:bg-red-800 p-2 rounded transition">Projects</Link>
        <Link href="/recipes" className="hover:bg-red-800 p-2 rounded transition">Recipes</Link>
        <Link href="/about" className="hover:bg-red-800 p-2 rounded transition">About</Link>
      </nav>
    </aside>
  );
};

export default Sidebar;