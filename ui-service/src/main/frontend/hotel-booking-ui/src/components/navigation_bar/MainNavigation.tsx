import MainNavagationLinks from "./MainNavagationLinks";
import MainNavagationDropdown from "./MainNavagationDropdowns";
import "./navigationStyle.css";

const MainNavigation: React.FC = () => {
  return (
    <header>
      <nav>
        <MainNavagationLinks />
        <MainNavagationDropdown />
      </nav>
    </header>
  );
};

export default MainNavigation;
