import DropdownButton from "./DropdownButton";

export default function NavBarFindMyTripDropdown() {
  return (
    <div className="dropdown">
      <div className="dropdown-header">My Trips</div>
      <ul className="dropdown-list">
        <li>My Trips</li>
        <li>View, Print or Email Your Itinerary</li>
      </ul>
      <DropdownButton
        text="Find My Trips"
        backGroundColor="#0068ef"
        textColor="white"
      />
    </div>
  );
}
