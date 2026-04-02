import Link from "next/link";
import { Dropdown } from "../components/Dropdown";
import { RESUME_INFO } from "../constants/site";

export default function Resume() {

    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
                <h1 className="text-3xl font-bold">Resume</h1>
                <div className="flex flex-col items-start mt-4">
                    <h2 className="text-2xl font-semibold mt-8">Experience</h2>
                    <Dropdown title={RESUME_INFO.experience[0].title } description={RESUME_INFO.experience[0].description} startDate={RESUME_INFO.experience[0].startDate} endDate={RESUME_INFO.experience[0].endDate} />
                </div>
            </main>
        </div>
    )
} 