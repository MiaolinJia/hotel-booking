import MainNavigationLinkItem from "./MainNavigationItem";

export default function MainNavagationLinks() {
    return (
        <ul>
          <MainNavigationLinkItem to="/" text="priceline" className="left"/>
          <MainNavigationLinkItem to="/hotels" text="Hotels" className="left"/>
          <MainNavigationLinkItem to="/cars" text="Cars" className="left"/>
          <MainNavigationLinkItem to="/flights" text="Flights" className="left"/>
          <MainNavigationLinkItem to="/vacationpackages" text="Bundle + Save" className="left"/>
          <MainNavigationLinkItem to="/cruises" text="Cruises" className="left"/>
          <MainNavigationLinkItem to="/experiences" text="Experiences" className="left"/>
        </ul>
    );
}   