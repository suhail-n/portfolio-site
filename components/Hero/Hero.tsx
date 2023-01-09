const Hero = () => {
    return (
        <section id="hero" className="flex justify-center bg-bgPrimary-light dark:bg-bgPrimary-dark">
            <div className="flex flex-col justify-center min-h-screen max-h-screen p-10 sm:p-0">
                <h1 className="text-textSecondary-light dark:text-textSecondary-dark my-5 text-lg">Hi, my name is</h1>
                <h2 className="text-2xl md:text-4xl md:my-5 dark:text-textPrimary-dark">Suhail Nooristani.</h2>
                <h3 className="text-2xl md:text-4xl text-gray-500">I create life through the web.</h3>
                <div className="max-w-md">
                    <p className="sm:text-sm md:text-base text-textPrimary-light dark:text-textPrimary-dark my-10">I'm a full stack software engineer specializing in web and automation solutions. Currently, I'm focused on building my frontend and design skills.</p>
                </div>
                <div className="flex gap-5">
                    <a href="https://github.com/suhail-n" aria-label="GitHub" rel="noopener noreferrer" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-github dark:text-textSecondary-dark text-textSecondary-light transition-transform hover:-translate-y-1"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                    </a>
                    <a href="https://www.linkedin.com/in/suhail-nooristani" aria-label="Linkedin" rel="noopener noreferrer" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-linkedin dark:text-textSecondary-dark text-textSecondary-light transition-transform hover:-translate-y-1"><title>LinkedIn</title><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle
                        ></svg>
                    </a>
                </div>
            </div>
        </section >
    )
}
export default Hero