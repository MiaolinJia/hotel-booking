import PopUpButton from "./PopupButton";
import { forwardRef } from "react";

const NavBarLanguagePopUpWithRef = forwardRef<HTMLDivElement, {}>((_, ref) => {
  return (
    <div className="popup" ref={ref}>
      <div className="popup-header">Select Your Language</div>
      <ul className="popup-list">
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
      <PopUpButton
        text="Travel Support/Contact Us"
        backGroundColor="#0068ef"
        textColor="white"
      />
    </div>
  );
});

export default NavBarLanguagePopUpWithRef;
