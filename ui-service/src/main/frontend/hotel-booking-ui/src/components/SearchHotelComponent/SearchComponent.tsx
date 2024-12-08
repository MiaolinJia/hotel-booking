import './styles/HotelBooking.css';
import JoinVipComponent from "./JoinVipComponent.tsx";
import HotelSearchSectionComponent from "./HotelSearchSectionComponent.tsx";


function SearchHotelComponent() {
    return (
        <div className="hotel-search-container">
            <HotelSearchSectionComponent/>
            <JoinVipComponent/>
        </div>
    );
}


export default SearchHotelComponent;