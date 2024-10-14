import ReactCountryFlag from "react-country-flag";
import PopUpButton from "./PopupButton";
import { forwardRef } from "react";

const NavBarLanguagePopUpWithRef = forwardRef<HTMLDivElement, {}>((_, ref) => {
  return (
    <div className="popup" ref={ref}>
      <div className="popup-header">
        <h2>Select Your Language</h2>
      </div>
      <ul className="popup-list">
        <li>
          <ReactCountryFlag countryCode="US" style={{ fontSize: "2em" }} />
          English (US)
        </li>
        <li>
          <ReactCountryFlag countryCode="ES" style={{ fontSize: "2em" }} />
          Espanol (ES)
        </li>
        <li>
          <ReactCountryFlag countryCode="CA" style={{ fontSize: "2em" }} />
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
