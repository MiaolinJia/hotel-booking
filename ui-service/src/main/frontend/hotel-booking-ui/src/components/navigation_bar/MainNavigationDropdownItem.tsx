import { useRef, useEffect, useState } from "react";
import React from "react";

function MainNavigationDropdownItem({ children }: { children: React.ReactNode }) {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [firstChild, secondChild] = React.Children.toArray(children);
  function handleClick() {
    setIsDropdownOpen((preState) => !preState);
  }

  function hideDropdown() {
    setIsDropdownOpen(false);
  }
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        hideDropdown();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="dropdown-container" ref={dropdownRef}>
      <button
        onClick={handleClick}
        className={isDropdownOpen ? "nav-button-active header-btn" : "header-btn"}
      >
        {firstChild}
      </button>
      {isDropdownOpen && <>{secondChild}</>}
    </div>
  );
}

export default MainNavigationDropdownItem;
