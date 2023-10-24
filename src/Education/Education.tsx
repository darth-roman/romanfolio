import IUniversity from "../Types/IUniversity"
import Institute from "./Institute"

const unis: IUniversity[] = [
    {
        uniName: "University of Constantine 2",
        city: "Constantine",
        field: "Computer Sciences",
        grade: "Bachelor",
        startYear: 2016,
        finishYear: 2020,
        isGraduated: true
    },
    {
        uniName: "University of Constantine 3",
        city: "Constantine",
        field: "Pharmacy",
        grade: "MD Doctor",
        startYear: 2022,
        isGraduated: false
    }
]
const Education = () => {
    return(
        <>
            <div className="flex flex-col my-3 py-3 px-6" id="education">
            <h1 className="text-4xl">#Education</h1>
                {
                    unis.map(uni => 
                        <Institute 
                            uniName={uni.uniName}
                            city={uni.city} 
                            field={uni.field} 
                            grade={uni.grade} 
                            startYear={uni.startYear} 
                            finishYear={uni.finishYear} 
                            isGraduated={uni.isGraduated} 
                        />)
                }
            </div>
        </>
    )
}

export default Education