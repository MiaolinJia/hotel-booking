import { NavLink } from "react-router-dom";

function MainNavigationLinkItem({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) => (isActive ? "link-active" : undefined)}
      >
        {children}
      </NavLink>
    </li>
  );
}

export default MainNavigationLinkItem;
