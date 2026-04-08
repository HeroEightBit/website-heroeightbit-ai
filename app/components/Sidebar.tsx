import Link from 'next/link';
import { SITE_CONFIG } from '../constants/site';

const Sidebar = () => {
  return (
    <aside className="">
      <div className="mb-2 text-xl font-bold">{SITE_CONFIG.name}</div>
      <hr />
      <nav className="flex flex-col gap-2 mt-4">
        <Link href="/" className="hover:bg-red-800 p-2 rounded transition">Home</Link>
        <Link href="/resume" className="hover:bg-red-800 p-2 rounded transition">Resume</Link>
        <Link href="/projects" className="hover:bg-red-800 p-2 rounded transition">Projects</Link>
        <Link href="/fun-software" className="hover:bg-red-800 p-2 rounded transition">Software</Link>
        <Link href="/recipes" className="hover:bg-red-800 p-2 rounded transition">Recipes</Link>
        <Link href="/about" className="hover:bg-red-800 p-2 rounded transition">About</Link>
      </nav>
    </aside>
  );
};

export default Sidebar;