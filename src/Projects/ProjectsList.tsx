import Project from './Project'
import IProject from '../Types/IProject'

const projectsList: Partial<IProject>[] = [
    {title: "Portfolio", isLive: false, isComplete: false, linkToCode: "", linkToProject:"", startDate: `${new Date().getDay()}/${new Date().getMonth()}`, finishDate: `${new Date().getDay()}/${new Date().getMonth()}`, limes: 0, pics: [{title: "My Project Pic", src: "", credit: "@Roman"}], domaine: "HR", desc: "Lorem ipsum"},
    {title: "Plant Tracker", isLive: false, isComplete: false, linkToCode: "", linkToProject:"", startDate: `${new Date().getDay()}/${new Date().getMonth()}`, finishDate: `${new Date().getDay()}/${new Date().getMonth()}`, limes: 0, pics: [{title: "My Project Pic", src: "", credit: "@Roman"}], domaine: "Botany", desc: "Lorem ipsum"},
    {title: "Travel Tracker", isLive: false, isComplete: false, linkToCode: "", linkToProject:"", startDate: `${new Date().getDay()}/${new Date().getMonth()}`, finishDate: `${new Date().getDay()}/${new Date().getMonth()}`, limes: 0, pics: [{title: "My Project Pic", src: "", credit: "@Roman"}], domaine: "Tourism", desc: "Lorem ipsum"}
]
const ProjectsList = () => {
    return(
        <>
        <h1 className="text-4xl my-3 py-3 px-6">#Projects</h1>
        <div className="grid grid-cols-3" id='projects'>
            {
                projectsList.map(project => <Project 
                    title={project.title} 
                    isLive={project.isLive} 
                    isComplete={project.isComplete} 
                    linkToCode={project.linkToCode}
                    linkToProject={project.linkToProject}  
                    startDate={project.startDate}
                    finishDate={project.finishDate}
                    limes={project.limes}
                    pics={project.pics}
                    domaine={project.domaine}
                    desc={project.desc}
                />)
            }
        </div>
        </>
    )
}

export default ProjectsList