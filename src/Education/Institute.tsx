import IUniversity from "../Types/IUniversity"

const Institute = (props: Partial<IUniversity>) => {
    return(
        <div className="pl-15 p-5">
            <h3 className="text-2xl">{props.field}</h3>
            <small>
                {props.startYear} - {props.finishYear ? props.finishYear : 'Present'}
            </small>
            <p className="font-bold">
               {props.grade} at {props.uniName}
            </p>
        </div>
    )
}

export default Institute