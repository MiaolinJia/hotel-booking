import MainNavigationLinkItem from "./MainNavigationItem";
import MainNavigationPopupItem from "./MainNavigationPopupItem";
import NavBarLanguagePopUp from "./popups/NavbarLanguagePopup";
import NavBarHelpPopUp from "./popups/NavbarHelpPopup";
import NavBarFindMyTripPopUp from "./popups/NavbarFindMyTripPopup";
import NavBarSignInPopUp from "./popups/NavBarSignInPopup";

export default function MainNavagationPopups() {
  return (
    <ul className="right-nav">
      <MainNavigationLinkItem to="/penny" text="Penny" />

      <MainNavigationPopupItem text="Language">
        <NavBarLanguagePopUp />
      </MainNavigationPopupItem>

      <MainNavigationPopupItem text="Help">
        <NavBarHelpPopUp />
      </MainNavigationPopupItem>

      <MainNavigationPopupItem text="Find My Trip">
        <NavBarFindMyTripPopUp />
      </MainNavigationPopupItem>

      <MainNavigationPopupItem text="Sign In JOIN VIP">
        <NavBarSignInPopUp />
      </MainNavigationPopupItem>
    </ul>
  );
}
