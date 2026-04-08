import Tiles from "./components/Tiles";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="mb-8">
          <h1 className="text-lg">Welcome to My Website</h1>
          <p className="mt-4 text-md">
            This website has a few objectives.</p>
          <ol className="list-decimal list-inside mt-2">
            <li>A fun project for learning and growth</li>
            <li>To store my resume and experience</li>
            <li>To showcase my projects </li>
            <li>To share recipes and cooking tips</li>
            <li>To share fun open source software!</li>
            <li>To provide a way for people to learn more about me</li>
          </ol>
        </div>
        <div className="mb-8 w-full">
          <Tiles />
        </div>
      </main>
    </div>
  );
}
