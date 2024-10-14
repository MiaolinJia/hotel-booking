import PopUpButton from "./PopupButton";

export default function NavBarSignInPopUp() {
  return (
    <div className="popup">
      <div className="popup-header">
        <h2>
          Sign in, or join for free Unlock savings, loyalty perks, and more when
          you become a VIP.
        </h2>
      </div>
      <PopUpButton text="Sign In" backGroundColor="#0068ef" textColor="white" />
      <PopUpButton
        text="Create Account"
        backGroundColor="#edf0f3"
        textColor="#0068ef"
      />
      <ul className="popup-list">
        <li>VIP Benefits</li>
        <li>My Trips</li>
        <li>My Account</li>
        <li>Wallet</li>
      </ul>
    </div>
  );
}
