import Link from 'next/link';

const Sidebar = () => {
  return (
    <aside className="fixed left-0 top-0 h-screen w-48 bg-slate-900 text-white p-4 border-r border-slate-800">
      <div className="mb-8 font-bold text-xl">HeroEightBit</div>
      <nav className="flex flex-col gap-2">
        <Link href="/" className="hover:bg-slate-800 p-2 rounded transition">Dashboard</Link>
        <Link href="/resume" className="hover:bg-slate-800 p-2 rounded transition">Resume</Link>
        <Link href="/recipes" className="hover:bg-slate-800 p-2 rounded transition">Recipes</Link>
      </nav>
    </aside>
  );
};

export default Sidebar;