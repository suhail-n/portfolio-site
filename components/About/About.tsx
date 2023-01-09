const About = () => {
    return (
        <section id="about" className="flex justify-center bg-bgPrimary-light dark:bg-bgPrimary-dark">
            <div className="flex flex-col justify-center min-h-screen max-h-screen sm:max-w-screen-lg p-10">

                {/* <h1 className="text-textPrimary-light dark:text-textPrimary-dark my-5 self-center sm:self-baseline">About Me</h1> */}
                <div className="self-center sm:self-baseline mt-10 sm:mt-0">
                    <h1 className="text-textPrimary-light dark:text-textPrimary-dark my-5 uppercase text-xl"><span className="text-sm text-textSecondary-light dark:text-textSecondary-dark">01. </span>About Me</h1>
                </div>
                <div className="flex flex-col sm:flex-row justify-center">
                    <figure className="my-5 sm:ml-0 sm:m-5">
                        <img className="w-24 h-auto md:w-32 md:h-auto rounded-full mx-auto" src="/images/profile.jpeg" alt="profile image" />
                    </figure>
                    <div className="content container">
                        <p className="text-sm sm:text-base text-textPrimary-light dark:text-textPrimary-dark my-10 mb-0">I'm a full-stack engineer who has been involved in various forms of work related to automation solutions including test automation, scripting, system design, and web development using many technologies. My self-starter personality drives me to continuously learn and experiment with new technologies.</p>
                        <div className="content container my-5">
                            <p className="text-sm sm:text-base text-textPrimary-light dark:text-textPrimary-dark">Here are a few technologies I am currently working with:</p>
                            <div className="skills flex justify-between sm:justify-start my-5 text-sm sm:text-base">
                                <ul className="flex flex-col sm:mr-14">
                                    <li className="before:content-['↗_'] before:text-textSecondary-light dark:before:text-textSecondary-dark">TypeScript</li>
                                    <li className="before:content-['↗_'] before:text-textSecondary-light dark:before:text-textSecondary-dark">JavaScript</li>
                                    <li className="before:content-['↗_'] before:text-textSecondary-light dark:before:text-textSecondary-dark">Tailwind CSS</li>
                                </ul>
                                <ul className="flex flex-col">
                                    <li className="before:content-['↗_'] before:text-textSecondary-light dark:before:text-textSecondary-dark">Next.js (React)</li>
                                    <li className="before:content-['↗_'] before:text-textSecondary-light dark:before:text-textSecondary-dark">MySQL</li>
                                    <li className="before:content-['↗_'] before:text-textSecondary-light dark:before:text-textSecondary-dark">PHP</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About