import DropdownButton from "./DropdownButton";

export default function NavBarHelpDropdown() {
  return (
    <div className="dropdown">
      <div className="dropdown-header">Priceline Help Center</div>
      <ul className="dropdown-list">
        <li>Frequently Asked Questions</li>
        <li>Find My Trip</li>
      </ul>
      <DropdownButton
        text="Travel Support/Contact Us"
        backGroundColor="#0068ef"
        textColor="white"
      />
    </div>
  );
}
