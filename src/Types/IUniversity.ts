export default interface IUniversity {
    uniName: string,
    city: string,
    field: string
    grade: string,
    startYear: number,
    finishYear?: number,
    isGraduated: boolean
}