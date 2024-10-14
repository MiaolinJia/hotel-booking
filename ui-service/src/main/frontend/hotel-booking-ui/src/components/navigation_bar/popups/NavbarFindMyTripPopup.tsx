import PopUpButton from "./PopupButton";

export default function NavBarFindMyTripPopUp() {
  return (
    <div className="popup">
      <div className="popup-header">
        <h2>My Trips</h2>
      </div>
      <ul className="popup-list">
        <li>My Trips</li>
        <li>View, Print or Email Your Itinerary</li>
      </ul>
      <PopUpButton
        text="Find My Trips"
        backGroundColor="#0068ef"
        textColor="white"
      />
    </div>
  );
}
