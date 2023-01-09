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
    const classes = `border-b-[1px] border-b-textSecondary-light dark:border-b-textSecondary-dark text-textSecondary-light dark:text-textSecondary-dark italic`
    function onJobClickHandler(index: number) {
        setActive(index);
    }

    return (
        <div className="container flex flex-col sm:flex-row sm:space-x-5 min-h-[400px] max-h-[400px]">
            <div className="side-company flex sm:flex-col gap-3">
                {jobs.map((job, i) => {
                    return (
                        <h1 onClick={_ => onJobClickHandler(i)} className={`cursor-pointer hover:text-textSecondary-light hover:dark:text-textSecondary-dark mb-3 sm:mb-0 ${i === active ? classes : "dark:text-gray-400 text-gray-500"} sm:hover:translate-y-[-0.25rem] sm:transition-transform`} key={i}>{job.company}</h1>
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
    )
}
export default JobPanel