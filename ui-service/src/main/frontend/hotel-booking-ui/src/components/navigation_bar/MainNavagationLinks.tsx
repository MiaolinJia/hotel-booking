import MainNavigationLinkItem from "./MainNavigationItem";

export default function MainNavagationLinks() {
  return (
    <ul className="left-nav">
      <MainNavigationLinkItem to="priceline" text="priceline" />
      <MainNavigationLinkItem to="/" text="Hotels" />
      <MainNavigationLinkItem to="/cars" text="Cars" />
      <MainNavigationLinkItem to="/flights" text="Flights" />
      <MainNavigationLinkItem to="/vacationpackages" text="Bundle + Save" />
      <MainNavigationLinkItem to="/cruises" text="Cruises" />
      <MainNavigationLinkItem to="/experiences" text="Experiences" />
    </ul>
  );
}
