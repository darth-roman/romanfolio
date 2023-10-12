import INavItems from "../Types/INavItems"
import NavItem from "./NavItem"

const Navbar = () => {

    const items: INavItems[] = [
        {title: "Home", link: "#home"},
        {title: "About", link: "#about"},
        {title: "Education", link: "#education"},
        {title: "Projects", link: "#projects"},
        {title: "Socials", link: "#socials"},

    ]

    return (
        <ul>
        {
            items.map(item => <NavItem title={item.title} link={item.link}/>)
        }
        </ul>
    )
}

export default Navbar