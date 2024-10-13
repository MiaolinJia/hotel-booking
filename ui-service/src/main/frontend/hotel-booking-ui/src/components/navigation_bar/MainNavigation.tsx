import MainNavagationLinks from "./MainNavagationLinks";
import MainNavagationPopups from "./MainNavagationPopups";

const MainNavigation: React.FC = () => {
  return (
    <header>
      <nav>
        <ul>
          <li className="left-nav">
            <MainNavagationLinks />
          </li>
          <li className="right-nav">
            <MainNavagationPopups />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
