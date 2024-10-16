import DropdownButton from "./DropdownButton";
import { forwardRef } from "react";

const NavBarLanguageDropdownWithRef = forwardRef<HTMLDivElement, object>((_, ref) => {
  return (
    <div className="dropdown" ref={ref}>
      <div className="dropdown-header">Select Your Language</div>
      <ul className="dropdown-list">
        <li>
          <div className="language-flag" />
          English (US)
        </li>
        <li>
          <div
            className="language-flag"
            style={{ backgroundPositionX: "-285px" }}
          />
          Espanol (ES)
        </li>
        <li>
          <div
            className="language-flag"
            style={{ backgroundPositionX: "-40px" }}
          />
          Francais (CA)
        </li>
      </ul>
      <DropdownButton
        text="Travel Support/Contact Us"
        backGroundColor="#0068ef"
        textColor="white"
      />
    </div>
  );
});

export default NavBarLanguageDropdownWithRef;
