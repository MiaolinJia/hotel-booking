import { NavLink } from "react-router-dom";

const MainNavigation: React.FC = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
