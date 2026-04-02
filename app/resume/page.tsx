import Link from "next/link";
import { Dropdown } from "../components/Dropdown";
import { RESUME_INFO } from "../constants/site";

export default function Resume() {

    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <h1 className="text-3xl font-bold p-8">Resume</h1>
            <main className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
                <div className="flex flex-col items-start mt-4">
                    <h2 className="text-2xl font-semibold mt-8">Experience</h2>
                    <Dropdown title={RESUME_INFO.experience[0].title} description={RESUME_INFO.experience[0].description} startDate={RESUME_INFO.experience[0].startDate} endDate={RESUME_INFO.experience[0].endDate} />
                    <Dropdown title={RESUME_INFO.experience[1].title} description={RESUME_INFO.experience[1].description} startDate={RESUME_INFO.experience[1].startDate} endDate={RESUME_INFO.experience[1].endDate} />
                </div>
                <div className="flex flex-col items-start mt-4">
                    <h2 className="text-2xl font-semibold mt-8">Education</h2>
                    <Dropdown title={RESUME_INFO.education[0].degree} description={RESUME_INFO.education[0].institution} startDate={RESUME_INFO.education[0].startDate} endDate={RESUME_INFO.education[0].endDate} />
                </div>
            </main>
        </div>
    )
} 