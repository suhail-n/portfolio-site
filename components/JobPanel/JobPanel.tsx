import PanelItem from "./PanelItem/PanelItem";
import { useState } from 'react';

type JobPanelProps = {
    jobs: {
        company: string;
        title: string;
        startDate: string;
        endDate: string;
        description: string[];
    }[]
}

const JobPanel = ({ jobs }: JobPanelProps) => {
    const [active, setActive] = useState(0);
    const classes = `border-b-[1px] border-b-textSecondary-light dark:border-b-textSecondary-dark text-textSecondary-light dark:text-textSecondary-dark`
    function onJobClickHandler(index: number) {
        setActive(index);
    }

    return (
        <>
            {/* Mobile View */}
            <div className="sm:hidden side-company flex gap-4 h-16 w-[80vw] overflow-scroll">
                {jobs.map((job, i) => {
                    return (
                        <>
                            {/* <span onClick={_ => onJobClickHandler(i)} className={`border-opacity-20 pr-3 border-r-2 h-6 border-red-300 dark:border-gray-400 dark:border-opacity-10 whitespace-nowrap cursor-pointer hover:text-textSecondary-light hover:dark:text-textSecondary-dark ${i === active ? classes : "dark:text-gray-400 text-gray-500"} sm:hover:translate-y-[-0.25rem] sm:transition-transform`} key={i}>{job.company}</span> */}
                            <span key={i} onClick={_ => onJobClickHandler(i)} className={`border-opacity-20 h-8 border-red-300 dark:border-gray-400 dark:border-opacity-10 whitespace-nowrap cursor-pointer hover:text-textSecondary-light hover:dark:text-textSecondary-dark ${i === active ? classes : "dark:text-gray-400 text-gray-500"} sm:hover:translate-y-[-0.25rem] sm:transition-transform`} key={i}>{job.company}</span>
                            <span key={i + jobs.length} className="border-r-2 h-6 border-red-300 dark:border-gray-400 dark:border-opacity-10 border-opacity-20"></span>
                        </>
                    )
                })}
            </div>
            <div className="side-description sm:hidden">
                {jobs.map((job, i) => {
                    return (
                        <PanelItem active={active == i} key={i} job={job} />
                    )
                })}
            </div>
            {/* Desktop View */}
            <div className="container hidden sm:flex sm:flex-row sm:space-x-5 min-h-[400px] max-h-[400px]">
                {/* <div className="container flex-col sm:flex-row sm:space-x-5 min-h-[400px] max-h-[400px]"> */}
                <div className="side-company flex sm:flex-col gap-3">
                    {jobs.map((job, i) => {
                        return (
                            <h1 onClick={_ => onJobClickHandler(i)} className={`whitespace-nowrap text-textPrimary cursor-pointer hover:text-textSecondary-light hover:dark:text-textSecondary-dark mb-3 sm:mb-0 ${i === active ? classes : "dark:text-gray-400 text-gray-500"} sm:hover:translate-y-[-0.25rem] sm:transition-transform`} key={i}>{job.company}</h1>
                        )
                    })}
                </div>
                <br className="sm:hidden" />
                <div className="side-description">
                    {jobs.map((job, i) => {
                        return (
                            <PanelItem active={active == i} key={i} job={job} />
                        )
                    })}
                </div>
            </div>
        </>
    )
}
export default JobPanel