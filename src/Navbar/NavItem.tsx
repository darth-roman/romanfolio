import React from "react"
import INavItems from "../Types/NavItems"


const NavItem: React.FC<INavItems> = ({title, link}: INavItems) => {
    return(
        <a href={link} className="hover:underline px-1 m-2 hover:bg-red-400">{title}</a>
    )
}

export default NavItem