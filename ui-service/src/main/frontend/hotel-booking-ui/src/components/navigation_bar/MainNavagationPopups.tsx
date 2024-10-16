import MainNavigationLinkItem from "./MainNavigationItem";
import MainNavigationPopupItem from "./MainNavigationPopupItem";
import NavBarLanguagePopUp from "./popups/NavbarLanguagePopup";
import NavBarHelpPopUp from "./popups/NavbarHelpPopup";
import NavBarFindMyTripPopUp from "./popups/NavbarFindMyTripPopup";
import NavBarSignInPopUp from "./popups/NavBarSignInPopup";

export default function MainNavagationPopups() {
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
        <MainNavigationPopupItem>
          <div className="language-flag" />
          <NavBarLanguagePopUp />
        </MainNavigationPopupItem>

        <MainNavigationPopupItem>
          Help
          <NavBarHelpPopUp />
        </MainNavigationPopupItem>

        <MainNavigationPopupItem>
          Find My Trip
          <NavBarFindMyTripPopUp />
        </MainNavigationPopupItem>

        <MainNavigationPopupItem>
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
          <NavBarSignInPopUp />
        </MainNavigationPopupItem>
      </div>
    </div>
  );
}
