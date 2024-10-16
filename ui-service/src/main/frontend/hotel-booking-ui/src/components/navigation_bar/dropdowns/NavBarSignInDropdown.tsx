import DropdownButton from "./DropdownButton";

export default function NavBarSignInDropdown() {
  return (
    <div className="dropdown" style={{ width: "358px" }}>
      <div className="vip-header">
        <div>
          <div
            className="dropdown-header vip-box"
            style={{
              padding: 0,
              color: "#003c8a",
            }}
          >
            Sign in, or join for free
          </div>
          <div className="vip-box" style={{ fontSize: 14 }}>
            Unlock savings, loyalty perks, and more when you become a VIP.
          </div>
        </div>
        <div>
          <img src="/join-vip-badge.svg" alt="icon" />
        </div>
      </div>

      <DropdownButton text="Sign In" backGroundColor="#0068ef" textColor="white" />
      <DropdownButton
        text="Create Account"
        backGroundColor="#edf0f3"
        textColor="#0068ef"
      />
      <ul className="dropdown-list">
        <li>
          <img src="/vip-dark.svg" alt="icon" />
          VIP Benefits
        </li>
        <li>
          <img src="/my-trips.svg" alt="icon" />
          My Trips
        </li>
        <li>
          <img src="/my-account.svg" alt="icon" />
          My Account
        </li>
        <li>
          <img src="/public/wallet.svg" alt="icon" />
          Wallet
        </li>
      </ul>
    </div>
  );
}
