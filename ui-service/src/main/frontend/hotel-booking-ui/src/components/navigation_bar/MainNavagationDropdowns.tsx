import MainNavigationLinkItem from "./MainNavigationItem";
import MainNavigationDropdownItem from "./MainNavigationDropdownItem";
import NavBarLanguagePopUp from "./dropdowns/NavbarLanguageDropdown";
import NavBarHelpDropdown from "./dropdowns/NavbarHelpDropdown";
import NavBarFindMyTripDropdown from "./dropdowns/NavbarFindMyTripDropdown";
import NavBarSignInDropdown from "./dropdowns/NavBarSignInDropdown";

export default function MainNavagationDropdown() {
  return (
    <div className="right-nav-group">
      <MainNavigationLinkItem to="/penny">
        <div className="penny-group">
          <img
            src="/penny-icon.svg"
            alt="icon"
            style={{ paddingLeft: "8px" }}
          />
          <span style={{ marginRight: "4px", paddingRight: "8px" }}>Penny</span>
        </div>
      </MainNavigationLinkItem>
      <div className="right-nav">
        <MainNavigationDropdownItem>
          <div className="language-flag" />
          <NavBarLanguagePopUp />
        </MainNavigationDropdownItem>

        <MainNavigationDropdownItem>
          Help
          <NavBarHelpDropdown />
        </MainNavigationDropdownItem>

        <MainNavigationDropdownItem>
          Find My Trip
          <NavBarFindMyTripDropdown />
        </MainNavigationDropdownItem>

        <MainNavigationDropdownItem>
          <div className="sign-in-vip-group">
            <img src="/join-vip-badge.svg" alt="icon" />
            <div className="sign-in-vip">
              <span className="vip-btn-box">Sign In</span>
              <span
                className="vip-btn-box"
                style={{
                  fontWeight: "700",
                  color: "black",
                }}
              >
                JOIN VIP
              </span>
            </div>
          </div>
          <NavBarSignInDropdown />
        </MainNavigationDropdownItem>
      </div>
    </div>
  );
}
