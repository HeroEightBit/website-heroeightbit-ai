import Link from "next/link";
import { Dropdown } from "../components/drop-down";

export default function Resume() {

    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
            <h1 className="text-3xl font-bold">Resume</h1>
            <p className="mt-4 text-lg">This is where my resume will go. Stay tuned!</p>
            <div>
                <h2 className="text-2xl font-semibold mt-8">Experience</h2>
                <Dropdown />
            </div>
            <Link href="/https://www.linkedin.com/in/aaron-schultz-computerengineer/" className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" target="_blank">
                View LinkedIn Profile
            </Link>
        </main> 
        </div>
    )
} 