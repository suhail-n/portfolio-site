type PanelItemProps = {
    job: {
        company: string;
        title: string;
        startDate: string;
        endDate: string;
        description: string[];
    },
    active: boolean;
}
const PanelItem = ({ job, active }: PanelItemProps) => {
    const { company, title, startDate, endDate, description } = job;
    if (!active) return <></>;
    return (
        <div className="flex flex-col gap-3 w-ful overflow-hidden">
            <div className="title">
                <h1 className="text-lg">{title} <span className="text-textSecondary-light dark:text-textSecondary-dark">@{company}</span></h1>
                <h2 className="text-[0.9rem] dark:text-gray-400 text-black">{startDate} - {endDate}</h2>
            </div>
            <ul className="flex flex-col gap-3 max-h-96 overflow-y-auto">
                {description.map((desc, i) => {
                    return (
                        <li key={i} className="before:content-['↗_'] text-sm dark:text-gray-400 text-gray-800 before:text-textSecondary-light dark:before:text-textSecondary-dark">{desc}</li>
                    )
                })}
            </ul>
        </div>
    );
}
export default PanelItem