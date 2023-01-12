const Contact = () => {
    return (
        <section id="contact" className="flex justify-center bg-bgPrimary-light dark:bg-bgPrimary-dark">
            <div className="flex flex-col justify-center min-h-screen max-h-screen p-10 sm:p-0 gap-5">
                <h1 className="dark:text-textPrimary-dark text-xl"><span className="text-sm text-textSecondary-light dark:text-textSecondary-dark">03. </span>CONTACT</h1>
                <h2 className="text-2xl md:text-4xl md:my-5 dark:text-textPrimary-dark">Let's Get In Touch!</h2>
                <h3 className="text-[14px] sm:text-base text-gray-500 dark:text-gray-400 my-2 max-w-sm lg:max-w-xl sm:max-w-lg">I'm currently living the dream as a Senior Software Engineer and I'm not searching for any new opportunities. However, I'm always open for a coffee chat. Feel free to send me a message</h3>
                <a href="https://www.linkedin.com/in/suhail-nooristani" target="_blank" className="dark:hover:bg-slate-700 hover:bg-red-100 p-4 w-40 h-14 border-[1px] text-center flex justify-center items-center border-textSecondary-light dark:border-textSecondary-dark text-textSecondary-light dark:text-textSecondary-dark mt-5"><p>Lets Chat</p>
                    <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 icon icon-tabler icon-tabler-coffee dark:text-textSecondary-dark" width={24} height={24} viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M3 14c.83 .642 2.077 1.017 3.5 1c1.423 .017 2.67 -.358 3.5 -1c.83 -.642 2.077 -1.017 3.5 -1c1.423 -.017 2.67 .358 3.5 1"></path>
                        <path d="M8 3a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2"></path>
                        <path d="M12 3a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2"></path>
                        <path d="M3 10h14v5a6 6 0 0 1 -6 6h-2a6 6 0 0 1 -6 -6v-5z"></path>
                        <path d="M16.746 16.726a3 3 0 1 0 .252 -5.555"></path>
                    </svg>
                </a>
            </div>
        </section>
    )
}
export default Contact