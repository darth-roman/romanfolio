import IPic from "../Types/IPic"


const Picture = ({title, src, credit}: IPic) => {
    return(
        <img src={src} alt={`${title} @${credit}`} className="hexagon rotation"/>
    )
}

export default Picture