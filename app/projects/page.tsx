function Projects() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
            <h1 className="text-3xl font-bold">Projects</h1>
            <p className="mt-4 text-md">
                This page is a work in progress, but here are some of the projects I have worked on:</p>
            <ol className="list-decimal list-inside mt-2">
                <li><a href="https://github.com/HeroEightBit/website-heroeightbit-ai" className="text-red-500 hover:underline">HeroEightbit.com</a> - My personal website</li>
                <li><a href="https://github.com/HeroEightBit/interviewer-assistant" className="text-red-500 hover:underline">Interviewer Assistant</a> - A web application for conducting interviews</li>

            </ol>
        </main> 
        </div>  
    )
} 

    
export default Projects;