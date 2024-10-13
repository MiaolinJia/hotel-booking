import MainNavigationLinkItem from "./MainNavigationItem";
import MainNavigationPopupItem from "./MainNavigationPopupItem";
import { useRef, useState, useEffect } from "react";
import NavBarLanguagePopUp from "./popups/NavbarLanguagePopup";
import NavBarHelpPopUp from "./popups/NavbarHelpPopup";
import NavBarFindMyTripPopUp from "./popups/NavbarFindMyTripPopup";
import NavBarSignInPopUp from "./popups/NavBarSignInPopup";

export default function MainNavagationPopups() {
  const [itemClicks, setItemClicks] = useState<boolean[]>([
    false,
    false,
    false,
    false,
  ]);

  function handleClick(itemId: number) {
    setItemClicks((preState) =>
      preState.map((item, index) => {
        if (index === itemId) {
          return !item;
        } else {
          return item ? !item : item;
        }
      })
    );
  }

  const popupRef = useRef<HTMLDivElement>(null);

  // Handle click outside of the popup to close it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [popupRef]);

  return (
    <div className="help-container">
      <ul>
        <MainNavigationLinkItem to="/penny" text="Penny" />
        <MainNavigationPopupItem
          text="Language"
          isOpen={itemClicks[0]}
          handleClick={() => handleClick(0)}
        >
          <NavBarLanguagePopUp />
        </MainNavigationPopupItem>

        <MainNavigationPopupItem
          text="Help"
          isOpen={itemClicks[1]}
          handleClick={() => handleClick(1)}
        >
          <NavBarHelpPopUp />
        </MainNavigationPopupItem>

        <MainNavigationPopupItem
          text="Find My Trip"
          isOpen={itemClicks[2]}
          handleClick={() => handleClick(2)}
        >
          <NavBarFindMyTripPopUp />
        </MainNavigationPopupItem>
        <MainNavigationPopupItem
          text="Sign In JOIN VIP"
          isOpen={itemClicks[3]}
          handleClick={() => handleClick(3)}
        >
          <NavBarSignInPopUp />
        </MainNavigationPopupItem>
      </ul>
    </div>
  );
}
