import MainNavigationPopupItem from "./MainNavigationPopupItem";
import NavbarPopup from "./NavbarPopup";
import { useState } from "react";

export default function MainNavagationPopups() {
    const[isPopupVisible, setIsPopupVisible] = useState(false);
    function handleClick() {
        setIsPopupVisible((preState) => !preState);
    }   

    return (
        <>
            <ul>
                <MainNavigationPopupItem text="Penny" className="right" handleClick={handleClick}/>
                <MainNavigationPopupItem text="Language" className="right" handleClick={handleClick}/>
                <MainNavigationPopupItem text="Help" className="right" handleClick={handleClick}/>
                <MainNavigationPopupItem text="Find My Trip" className="right" handleClick={handleClick}/>
                <MainNavigationPopupItem text="Sign In JOIN VIP" className="right" handleClick={handleClick}/>
            </ul>
             <NavbarPopup isPopupVisible={isPopupVisible}/>
        </>
    );
        
}