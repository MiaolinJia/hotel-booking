import {useState} from "react";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import {BadgeDollarSign} from 'lucide-react';
import {AppDispatch} from "../../store";
import {useDispatch} from 'react-redux';
import {searchHotelList} from '../../store/modules/hotels';
import SearchHotelComponent from "./RoomSelectorComponent.tsx";


interface FormData {
    hotelType: 'single' | 'multi';
    destination: string;
    startDate: Date | undefined;
    endDate: Date | undefined;
    rooms: number;
    adults: number;
    children: number;
    bundleSave: boolean;
    addCar: boolean;
    addFlight: boolean;
}

function HotelSearchSectionComponent() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);
    const isDateSelectable = (date: Date) => {
        return date >= today; // Allow selection of today and future dates
    };

    const [formData, setFormData] = useState<FormData>({
        hotelType: 'single',
        destination: '',
        startDate: today,
        endDate: tomorrow,
        rooms: 1,
        adults: 2,
        children: 0,
        bundleSave: false,
        addCar: false,
        addFlight: false
    });


    const handleDateChange = (dates: [Date | null, Date | null]) => {
        const [start, end] = dates;
        setFormData(prevState => ({
            ...prevState,
            startDate: start || undefined,
            endDate: end || undefined,
        }));
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value, type, checked} = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleHotelTypeChange = (type: 'single' | 'multi') => {
        setFormData(prevState => ({
            ...prevState,
            hotelType: type
        }));
    };

    const handleRoomDataChange = (key: 'rooms' | 'adults' | 'children', value: number) => {
        setFormData(prevState => ({
            ...prevState,
            [key]: value
        }));
    };

    const dispatch = useDispatch<AppDispatch>();
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form submitted with data:', formData);
        dispatch(searchHotelList());
    };

    return (
        <div className="hotel-search-section">
            <div className="search-box">
                <h2>Searching for a place to stay?</h2>

                <div className="hotel-type-selection">
                    <label>
                        <input
                            type="radio"
                            name="hotelType"
                            checked={formData.hotelType === 'single'}
                            onChange={() => handleHotelTypeChange('single')}
                        />
                        <span>Single Hotel</span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="hotelType"
                            checked={formData.hotelType === 'multi'}
                            onChange={() => handleHotelTypeChange('multi')}
                        />
                        <span>Multi Hotel</span>
                    </label>
                </div>

                <form onSubmit={handleSubmit} className="search-form">
                    <input
                        type="text"
                        name="destination"
                        placeholder="Where to?"
                        value={formData.destination}
                        onChange={handleInputChange}
                        className="search-input"
                    />
                    <DatePicker
                        selectsRange={true}
                        startDate={formData.startDate}
                        endDate={formData.endDate}
                        onChange={handleDateChange}
                        placeholderText="Check-in - Check-out"
                        className="search-input date-picker-input"
                        filterDate={isDateSelectable}
                    />
                    <SearchHotelComponent
                        rooms={formData.rooms}
                        adults={formData.adults}
                        children={formData.children}
                        onRoomDataChange={handleRoomDataChange}
                    />
                    <div className="submit-button">
                        <button type="submit" className="search-button">Find Your Hotel</button>
                        <p className="cancellation-text">Book a hotel with free cancellation for flexibility</p>
                    </div>
                </form>
                <div className="bundle-options">
                    <label className="bundle-option">
                        <input
                            type="checkbox"
                            name="bundleSave"
                            checked={formData.bundleSave}
                            onChange={handleInputChange}
                        />
                        <BadgeDollarSign size={16} color="#026702"/>
                        <span className="bundle-text">Bundle + Save</span>
                    </label>
                    <label className="bundle-option">
                        <input
                            type="checkbox"
                            name="addCar"
                            checked={formData.addCar}
                            onChange={handleInputChange}
                        />
                        <span>Add a car</span>
                    </label>
                    <label className="bundle-option">
                        <input
                            type="checkbox"
                            name="addFlight"
                            checked={formData.addFlight}
                            onChange={handleInputChange}
                        />
                        <span>Add a flight</span>
                    </label>
                </div>
            </div>
        </div>
    );
}

export default HotelSearchSectionComponent;