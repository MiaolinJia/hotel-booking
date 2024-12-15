import './styles/HotelList.css';
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchHotelList} from "../../store/modules/hotels.ts";
import {AppDispatch, RootState} from "../../store";


function HotelListComponent() {
    // triple action
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        dispatch(fetchHotelList())
    }, [dispatch]);
    // get hotel list
    const {hotelList} = useSelector((state: RootState) => state.hotels)

    return (

        <div className="hotel-container">
            <h1 className="hotel-title">Hotel List</h1>
            <div className="hotel-card-container">
                {hotelList.map((hotel) => (
                    <div key={hotel.id} className="hotel-card">
                        <h2>{hotel.name}</h2>
                        <p>Address: {hotel.address}</p>
                        <p>Rating: {hotel.rating}</p>
                        <p>Price: {hotel.price} {hotel.currency}</p>
                        <p>Amenities: {hotel.amenities.join(', ')}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HotelListComponent;