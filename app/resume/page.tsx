

export default function Resume() {

    return (
        <div className="flex flex-col flex-1 items-center justify-start wrap-normal bg-zinc-50 font-sans dark:bg-black">
            <h1 className="text-3xl font-bold p-8 ">Resume</h1>
            <main className="flex flex-col wrap-normal flex-1 items-center justify-start bg-zinc-50 font-sans dark:bg-black">
                <p className="text-lg max-w-6xl whitespace-normal text-zinc-600 dark:text-white dark: dark:bg-zinc-800 p-4 rounded-2xl">Sr. Technical Support Engineer at Dynatrace with expertise in Real User Monitoring and workflow automation. Proven track record in resolving complex performance issues and enhancing service reliability. Strong leadership and critical thinking skills, driving team collaboration and empowering clients through effective troubleshooting strategies and quality assurance initiatives.</p>
                <div className="flex flex-col items-start mt-4">
                    <h2 className="text-2xl font-semibold mb-2">Experience</h2>
                    <div className="flex-1 text p-3 bg-red-900 rounded-t-md border-black">
                        <h2 className="flex-1 justify-start text-2xl font-semibold">Sr. Technical Support Engineer</h2>
                        <p className="text-md text-zinc-600 dark:text-zinc-400">Dynatrace | Jan 2024 - Current</p>
                        <ul className="list-disc list-inside mt-2 space-y-1 bg-silver-100 dark:bg-zinc-800 rounded-md p-4">
                            <li className="text-md text-zinc-600 dark:text-white">Functioned as Subject Matter Expert (SME) in Real User Monitoring (RUM), resolving complex performance bottlenecks for enterprise-level clients to improve service reliability.</li>
                            <li className="text-md text-zinc-600 dark:text-white">Led high-priority emergency calls and meetings, providing rapid technical leadership and resolution strategies during critical service disruptions.</li>
                            <li className="text-md text-zinc-600 dark:text-white">Collaborated with the Security Team as a technical reviewer, performing QA for new security tools to ensure reliability and operational readiness.</li>
                            <li className="text-md text-zinc-600 dark:text-white">Integrated Generative AI (Copilot/Gemini) into daily business tasks, automating workflows to streamline operations and minimize manual workload.</li>
                            <li className="text-md text-zinc-600 dark:text-white">Orchestrated weekly team meetings to align technical strategies and share knowledge, enhancing collaboration within support team.</li>
                            <li className="text-md text-zinc-600 dark:text-white">Authored authoritative public troubleshooting articles, empowering the global customer base to self-resolve complex technical challenges.</li>
                        </ul>
                    </div>
                    <div className="flex-1 text p-3 bg-red-900 rounded-b-md w-full">
                        <h2 className="flex-1 justify-start text-2xl font-semibold mt-2">Technical Support Engineer</h2>
                        <p className="text-md text-zinc-600 dark:text-zinc-400">Dynatrace | May 2021 - Jan 2024</p>
                        <ul className="list-disc list-inside mt-2 space-y-1 bg-silver-100 dark:bg-zinc-800 rounded-md p-4">
                            <li className="text-md text-zinc-600 dark:text-white">Directed troubleshooting calls with customers to identify root causes and implement effective performance solutions.</li>
                            <li className="text-md text-zinc-600 dark:text-white">Diagnosed complex technical issues across diverse technology stacks, enhancing ticket resolution efficiency.</li>
                            <li className="text-md text-zinc-600 dark:text-white">Specialized in RUM and mobile environments, delivering high-quality digital experiences across platforms.</li>
                            <li className="text-md text-zinc-600 dark:text-white">Engineered internal technical documentation to standardize troubleshooting procedures and accelerate team onboarding.</li>
                        </ul>
                    </div>
                </div>
                <div className="flex-1 items-start mt-4 w-full">
                    <h2 className="text-2xl font-semibold mt-8">Education</h2>
                    <div className="flex-1 text p-3 bg-red-900 rounded-md">
                        <h2 className="flex-1 justify-start text-2xl font-semibold mb-2">Bachelor of Science | Computer Engineering</h2>
                        <p className="text-md text-zinc-600 dark:text-zinc-400">Central Michigan University | Sep 2016 - May 2021</p>
                        <ul className="list-disc list-inside mt-2 space-y-1 bg-silver-100 dark:bg-zinc-800 rounded-md p-4">
                            <li className="text-md text-zinc-600 dark:text-white">Maintaining a GPA of 3.2/4.0</li>
                            <li className="text-md text-zinc-600 dark:text-white">Student work: Student Full-Stack Engineer.</li>
                        </ul>
                    </div>
                </div>
            </main>
        </div>
    )
}       
