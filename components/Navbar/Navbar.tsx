import Hamburger from "../Hamburger/Hamburger";
import classes from "./Navbar.module.css";
import { useState, useEffect } from 'react';

type NavbarProps = {
    themeSwitchHandler: () => void;
    theme: string;
}

const Navbar = ({ themeSwitchHandler, theme }: NavbarProps) => {
    const [open, setOpen] = useState(false);
    useEffect(() => {
        const mainElement = document.querySelector("main");
        const handleOutsideClick = () => {
            setOpen(false);
        }
        mainElement?.addEventListener("click", handleOutsideClick);

        return () => {
            mainElement?.removeEventListener("click", handleOutsideClick);
        }
    }, []);

    function hamburgerClickHandler() {
        setOpen(!open);
    }

    return (
        <nav className="container p-6 text-sm fixed bg-bgPrimary-light dark:bg-bgPrimary-dark bg-opacity-100">

            {/* Navbar */}
            <div className="flex justify-between items-center">
                <a href="#hero" className="dark:text-textPrimary-dark hover:text-textSecondary-light dark:hover:text-textSecondary-dark">
                    <div className="ml-5 rounded-full dark:border-textSecondary-dark border-textSecondary-light border-2 h-12 w-12 flex justify-center items-center">
                        <strong>

                            S N
                        </strong>
                        {/* <img src="" alt="" /> */}
                    </div>
                </a>
                <div className="justify-between hidden md:flex">
                    <ul className="nav-items hidden md:flex space-x-16 mr-20">
                        <li>
                            <a className="dark:text-textPrimary-dark hover:text-textSecondary-light dark:hover:text-textSecondary-dark" href="#about">01.About</a>
                        </li>
                        <li>
                            <a className="dark:text-textPrimary-dark hover:text-textSecondary-light dark:hover:text-textSecondary-dark" href="#experience">02.Experience</a>
                        </li>
                        <li>
                            <a className="dark:text-textPrimary-dark hover:text-textSecondary-light dark:hover:text-textSecondary-dark" href="#contact">03.Contact</a>
                        </li>
                    </ul>
                    <span className="cursor-pointer dark:text-textPrimary-dark hover:text-textSecondary-light dark:hover:text-textSecondary-dark transition-transform hover:scale-125" onClick={themeSwitchHandler}>
                        {theme === "light" && (<svg viewBox="0 0 24 24" width="24" height="24" className=""><path fill="currentColor" d="M9.37,5.51C9.19,6.15,9.1,6.82,9.1,7.5c0,4.08,3.32,7.4,7.4,7.4c0.68,0,1.35-0.09,1.99-0.27C17.45,17.19,14.93,19,12,19 c-3.86,0-7-3.14-7-7C5,9.07,6.81,6.55,9.37,5.51z M12,3c-4.97,0-9,4.03-9,9s4.03,9,9,9s9-4.03,9-9c0-0.46-0.04-0.92-0.1-1.36 c-0.98,1.37-2.58,2.26-4.4,2.26c-2.98,0-5.4-2.42-5.4-5.4c0-1.81,0.89-3.42,2.26-4.4C12.92,3.04,12.46,3,12,3L12,3z"></path></svg>)}
                        {theme === "dark" && (<svg viewBox="0 0 24 24" width="24" height="24" className="lightToggleIcon_pyhR"><path fill="currentColor" d="M12,9c1.65,0,3,1.35,3,3s-1.35,3-3,3s-3-1.35-3-3S10.35,9,12,9 M12,7c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5 S14.76,7,12,7L12,7z M2,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S1.45,13,2,13z M20,13l2,0c0.55,0,1-0.45,1-1 s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S19.45,13,20,13z M11,2v2c0,0.55,0.45,1,1,1s1-0.45,1-1V2c0-0.55-0.45-1-1-1S11,1.45,11,2z M11,20v2c0,0.55,0.45,1,1,1s1-0.45,1-1v-2c0-0.55-0.45-1-1-1C11.45,19,11,19.45,11,20z M5.99,4.58c-0.39-0.39-1.03-0.39-1.41,0 c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0s0.39-1.03,0-1.41L5.99,4.58z M18.36,16.95 c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0c0.39-0.39,0.39-1.03,0-1.41 L18.36,16.95z M19.42,5.99c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41 s1.03,0.39,1.41,0L19.42,5.99z M7.05,18.36c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06 c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L7.05,18.36z"></path></svg>)}
                    </span>
                </div>
                <span className="ml-auto mr-5 z-10 md:hidden cursor-pointer dark:text-textPrimary-dark hover:text-textSecondary-light dark:hover:text-textSecondary-dark" onClick={themeSwitchHandler}>
                    {theme === "light" && (<svg viewBox="0 0 24 24" width="24" height="24" className=""><path fill="currentColor" d="M9.37,5.51C9.19,6.15,9.1,6.82,9.1,7.5c0,4.08,3.32,7.4,7.4,7.4c0.68,0,1.35-0.09,1.99-0.27C17.45,17.19,14.93,19,12,19 c-3.86,0-7-3.14-7-7C5,9.07,6.81,6.55,9.37,5.51z M12,3c-4.97,0-9,4.03-9,9s4.03,9,9,9s9-4.03,9-9c0-0.46-0.04-0.92-0.1-1.36 c-0.98,1.37-2.58,2.26-4.4,2.26c-2.98,0-5.4-2.42-5.4-5.4c0-1.81,0.89-3.42,2.26-4.4C12.92,3.04,12.46,3,12,3L12,3z"></path></svg>)}
                    {theme === "dark" && (<svg viewBox="0 0 24 24" width="24" height="24" className="lightToggleIcon_pyhR"><path fill="currentColor" d="M12,9c1.65,0,3,1.35,3,3s-1.35,3-3,3s-3-1.35-3-3S10.35,9,12,9 M12,7c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5 S14.76,7,12,7L12,7z M2,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S1.45,13,2,13z M20,13l2,0c0.55,0,1-0.45,1-1 s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S19.45,13,20,13z M11,2v2c0,0.55,0.45,1,1,1s1-0.45,1-1V2c0-0.55-0.45-1-1-1S11,1.45,11,2z M11,20v2c0,0.55,0.45,1,1,1s1-0.45,1-1v-2c0-0.55-0.45-1-1-1C11.45,19,11,19.45,11,20z M5.99,4.58c-0.39-0.39-1.03-0.39-1.41,0 c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0s0.39-1.03,0-1.41L5.99,4.58z M18.36,16.95 c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0c0.39-0.39,0.39-1.03,0-1.41 L18.36,16.95z M19.42,5.99c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41 s1.03,0.39,1.41,0L19.42,5.99z M7.05,18.36c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06 c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L7.05,18.36z"></path></svg>)}
                </span>
                <Hamburger onClickHandler={hamburgerClickHandler} open={open} classList={["z-10"]} />
            </div>
            {/* Mobile Menu */}
            <aside id="mobile" className={`${classes.mobile} ${open ? classes.open : ""} md:hidden flex justify-center bg-bgSecondary-light dark:bg-bgSecondary-dark`}>
                <ul className={`nav-items md:hidden flex flex-col justify-center text-lg h-[70%] space-y-11 overflow-hidden drop-shadow-lg`}>
                    {/* <ul className={`mx-auto nav-items md:hidden flex flex-col ${classes.mobileMenuItems}`}> */}
                    <li>
                        <a className="dark:text-textPrimary-dark hover:text-textSecondary-light dark:hover:text-textSecondary-dark" href="#about">01.About</a>
                    </li>
                    <li>
                        <a className="dark:text-textPrimary-dark hover:text-textSecondary-light dark:hover:text-textSecondary-dark" href="#experience">02.Experience</a>
                    </li>
                    <li>
                        <a className="dark:text-textPrimary-dark hover:text-textSecondary-light dark:hover:text-textSecondary-dark" href="#contact">03.Contact</a>
                    </li>

                </ul>
            </aside>
        </nav>
    );
};
export default Navbar;
