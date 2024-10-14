import MainNavagationLinks from "./MainNavagationLinks";
import MainNavagationPopups from "./MainNavagationPopups";
import "./navigationStyle.css";

const MainNavigation: React.FC = () => {
  return (
    <header>
      <nav>
        <MainNavagationLinks />
        <MainNavagationPopups />
      </nav>
    </header>
  );
};

export default MainNavigation;
