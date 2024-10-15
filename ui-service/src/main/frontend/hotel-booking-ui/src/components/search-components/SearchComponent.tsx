import './styles/HotelBooking.css';
import JoinVipComponent from "./JoinVipComponent.tsx";
import HotelSearchSectionComponent from "./HotelSearchSectionComponent.tsx";
import {Provider} from "react-redux";
import store from "../../store";
import HotelListComponent from "./HotelListComponent.tsx";


function SearchHotelComponent() {
    return (
        <Provider store={store}>
            <div className="hotel-search-container">
                <HotelSearchSectionComponent/>
                <JoinVipComponent/>
            </div>
            <HotelListComponent/>

        </Provider>
    );
}


export default SearchHotelComponent;