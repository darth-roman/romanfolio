import IProject from '../Types/IProject'
const Project = (props: Partial<IProject>) => {
    return(
        <div className="mx-3 my-3 mt-6 shadow-xl shadow-secondary-2/50 flex flex-col self-start rounded-lg bg-white dark:bg-dark-1 sm:shrink-0 sm:grow" >
            <a href="#!">
            <img
                className="rounded-t-lg p-2"
                src="https://tecdn.b-cdn.net/img/new/standard/city/041.webp"
                alt="Hollywood Sign on The Hill" />
            </a>

            <div className="p-2 divide-y divide-secondary-3">
                <div>
                    <h5
                        className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-light">
                        {props.title}
                    </h5>
                    <p className="mb-4 text-base text-light">
                        {props.desc}
                    </p>
                </div>
                <div>
                    <span>
                        Status: {props.isComplete ? "Done" : "Under Construction"}
                    </span> <br />
                    <span>
                        Live? {props.isLive ? `Yes, Link: ${props.linkToProject}` : `No`}
                    </span> <br />
                    <span>
                        Domaine: {props.domaine}
                    </span> <br />
                    <span>
                        Repo: {props.linkToCode ? `${props.linkToCode}`:`No code yet`}
                    </span>
                </div>
            </div>

        </div>
    )
}

export default Project