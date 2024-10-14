import { useRef, useEffect, useState } from "react";

function MainNavigationPopupItem({
  text,
  children,
}: {
  text: string;
  children: React.ReactNode;
}) {
  const popupRef = useRef<HTMLDivElement>(null);
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);

  function handleClick() {
    setIsPopupOpen((preState) => !preState);
  }

  function hidePopup() {
    setIsPopupOpen(false);
  }
  // Handle click outside of the popup to close it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        hidePopup();
      }
    };
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="popup-container" ref={popupRef}>
      <li onClick={handleClick}>{text}</li>
      {isPopupOpen && <div className="popup">{children}</div>}
    </div>
  );
}

export default MainNavigationPopupItem;
