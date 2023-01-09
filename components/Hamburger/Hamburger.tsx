import classes from "./Hamburger.module.css";

type HamburgerProps = {
    open: boolean;
    onClickHandler: () => void;
    classList?: string[];
}

const Hamburger = ({ open, onClickHandler, classList }: HamburgerProps) => {
    const openClass = open ? classes.open : "";

    let hamburgerClasses = [`${classes.hamburger} ${openClass} md:hidden`, ...classList ?? []].join(" ");

    return (
        <div className={hamburgerClasses} onClick={onClickHandler}>
            <span className={`${classes.top} bg-textPrimary-light dark:bg-textPrimary-dark`}></span>
            <span className={`${classes.middle} bg-textPrimary-light dark:bg-textPrimary-dark`}></span>
            <span className={`${classes.bottom} bg-textPrimary-light dark:bg-textPrimary-dark`}></span>
        </div>
    )
}
export default Hamburger