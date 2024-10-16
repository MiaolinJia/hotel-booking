import { useRef, useEffect, useState } from "react";
import React from "react";

function MainNavigationPopupItem({ children }: { children: React.ReactNode }) {
  const popupRef = useRef<HTMLDivElement>(null);
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const [firstChild, secondChild] = React.Children.toArray(children);
  function handleClick() {
    setIsPopupOpen((preState) => !preState);
  }

  function hidePopup() {
    setIsPopupOpen(false);
  }
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        hidePopup();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="popup-container" ref={popupRef}>
      <button
        onClick={handleClick}
        className={isPopupOpen ? "nav-button-active header-btn" : "header-btn"}
      >
        {firstChild}
      </button>
      {isPopupOpen && <>{secondChild}</>}
    </div>
  );
}

export default MainNavigationPopupItem;
