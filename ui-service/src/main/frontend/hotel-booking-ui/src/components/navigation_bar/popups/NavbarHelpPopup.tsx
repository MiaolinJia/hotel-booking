import PopUpButton from "./PopupButton";

export default function NavBarHelpPopUp() {
  return (
    <div className="popup">
      <div className="popup-header">
        <h2>Priceline Help Center</h2>
      </div>
      <ul className="popup-list">
        <li>Frequently Asked Questions</li>
        <li>Find My Trip</li>
      </ul>
      <PopUpButton
        text="Travel Support/Contact Us"
        backGroundColor="#0068ef"
        textColor="white"
      />
    </div>
  );
}
