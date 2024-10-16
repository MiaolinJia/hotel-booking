import PopUpButton from "./PopupButton";

export default function NavBarHelpPopUp() {
  return (
    <div className="popup">
      <div className="popup-header">Priceline Help Center</div>
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
