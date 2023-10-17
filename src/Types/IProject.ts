import Pic from "./IPic";

export default interface IProject{
    title: string,
    isLive: boolean,
    isComplete: boolean,
    linkToCode: string,
    linkToProject: string,
    startDate: string,
    finishDate: string,
    limes: number,
    pics: Pic[],
    domaine: string,
    desc: string
}