import { NavLink } from "react-router-dom";

function MainNavigationLinkItem({ className, to, text }: { className: string, to: string, text: string }) {
    return (
        <li className={className}>
            <NavLink to={to}>{text}</NavLink>
        </li>
    )
}

export default MainNavigationLinkItem;