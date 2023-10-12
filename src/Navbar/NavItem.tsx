import React from "react"
import INavItems from "../Types/INavItems"


const NavItem: React.FC<INavItems> = ({title, link}: INavItems) => {
    return(
        <a href={link} className="hover:underline px-1 m-2 hover:bg-primary">{title}</a>
    )
}

export default NavItem