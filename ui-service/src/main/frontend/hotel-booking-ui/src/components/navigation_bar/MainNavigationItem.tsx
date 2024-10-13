import { NavLink } from "react-router-dom";

function MainNavigationLinkItem({ to, text }: { to: string; text: string }) {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) => (isActive ? "link-active" : undefined)}
      >
        {text}
      </NavLink>
    </li>
  );
}

export default MainNavigationLinkItem;
