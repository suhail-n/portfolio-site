import React, { ReactNode, useState } from "react";
import Head from "next/head";
import Navbar from '../Navbar/Navbar';

type Props = {
    children: ReactNode;
};

const Layout = ({ children }: Props) => {
    const [theme, setTheme] = useState('dark');
    const classes = theme === "light" ? "bg-bgPrimary-light" : "dark bg-bgPrimary-dark";
    function onThemeSwitchHandler() {
        setTheme(theme === "light" ? "dark" : "light");
    }
    return (
        <div id="root" className={classes}>
            <div className="text-textPrimary-light bg-bgPrimary-light dark:bg-bgPrimary-dark dark:text-textPrimary-dark h-screen w-screen">
                <Head>
                    <title>Suhail Nooristani</title>
                    <meta name="description" content="suhail nooristani profile" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Navbar theme={theme} themeSwitchHandler={onThemeSwitchHandler} />
                <main>{children}</main>
            </div>
        </div>
    );
};

export default Layout;
