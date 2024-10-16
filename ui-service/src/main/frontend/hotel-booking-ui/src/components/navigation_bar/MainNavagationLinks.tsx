import MainNavigationLinkItem from "./MainNavigationItem";

export default function MainNavagationLinks() {
  return (
    <ul className="left-nav">
      <MainNavigationLinkItem to="priceline">
        <img src="/priceline-logo.svg" className="priceline-icon" />
      </MainNavigationLinkItem>
      <MainNavigationLinkItem to="/">Hotels</MainNavigationLinkItem>
      <MainNavigationLinkItem to="/cars">Cars</MainNavigationLinkItem>
      <MainNavigationLinkItem to="/flights">Flights</MainNavigationLinkItem>
      <MainNavigationLinkItem to="/vacationpackages">
        Bundle + Save
      </MainNavigationLinkItem>
      <MainNavigationLinkItem to="/cruises">Cruises</MainNavigationLinkItem>
      <MainNavigationLinkItem to="/experiences">
        Experiences
      </MainNavigationLinkItem>
    </ul>
  );
}
