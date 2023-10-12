import Pic from "./IPic";

export default interface Project{
    title: string,
    isLive: boolean,
    isComplete: boolean,
    linkToCode: string,
    linkToProject: string,
    startDate: Date,
    finishDate: Date,
    limes: number,
    pics: Pic[]
}