import React from "react"

interface NavbarProps {
    title: string,
    link: string
}

const NavItem: React.FC<NavbarProps> = ({title, link}) => {
    return(
        <h1>
            {title} and {link}
        </h1>
    )
}

export default NavItem