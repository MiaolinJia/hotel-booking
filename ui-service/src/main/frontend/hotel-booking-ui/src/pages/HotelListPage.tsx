import DatePicker from "react-datepicker";
import SearchHotelComponent from "../components/SearchHotelComponent/RoomSelectorComponent.tsx";
import {ChildAge} from "../types/HotelSearchFormTypes.ts";
import ViewMapComponent from "../components/FilterComponent/ViewMapComponent.tsx";
import SortDropdownComponent from "../components/FilterComponent/SortDropdownComponent.tsx";
import SavingsModeComponent from "../components/FilterComponent/SavingModeComponent.tsx";
import PropertyTypesFilterComponent from "../components/FilterComponent/PropertyTypesFilterComponent.tsx";
import HotelListCardsPage from "./HotelListCardsPage.tsx";

function HotelListPage() {

    const handleRoomDataChange = (
        key: "rooms" | "adults" | "children",
        value: number,
        childrenAges?: ChildAge[]
    ) => {
        console.log({
            key,
            value,
            childrenAges
        });
    };

    return (
        <div>
            <div className="w-full bg-gray-100 py-4">
                <div className="max-w-7xl min-w-min mx-auto">
                    <div className="flex gap-4">
                        <div className="flex items-center rounded-lg w-1/4">
                            <input
                                type='text'
                                name='destination'
                                placeholder='Where to?'
                                className="search-input"
                            />
                        </div>

                        <div className="flex items-center rounded-lg w-1/4">
                            <DatePicker
                                selectsRange={true}
                                startDate={new Date('2024-12-10')}
                                endDate={new Date('2024-12-11')}
                                placeholderText='Check-in - Check-out'
                                className="search-input w-full"
                                filterDate={date => {
                                    const today = new Date();
                                    today.setHours(0, 0, 0, 0);
                                    return date >= today;
                                }}
                                monthsShown={2}
                            />
                        </div>

                        <div className="flex items-center rounded-lg w-1/4">
                            <SearchHotelComponent
                                rooms={2}
                                adults={2}
                                children={0}
                                onRoomDataChange={handleRoomDataChange}
                            />
                        </div>

                        <button className="bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700">
                            Update Search
                        </button>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl min-w-min mx-auto">
                <div className="flex justify-center w-full">
                    <div className="w-1/4 p-4 font-montserrat text-base">

                        <ViewMapComponent
                            center={[39.2904, -76.6122]} // need get coordinates from search
                            zoom={10}
                            height="200px"
                        />


                        <SortDropdownComponent/>
                        <SavingsModeComponent numDeals={20}/>
                        <PropertyTypesFilterComponent />

                        {/*<div>Your Budget Per night</div>*/}
                        {/*<div>Deals</div>*/}
                        {/*<div>Amenities</div>*/}
                        {/*<div>Neighborhoods</div>*/}
                        {/*<div>Guest Rating</div>*/}
                        {/*<div>Hotel Star Level</div>*/}
                        {/*<div>Rate Options</div>*/}
                        {/*<div>Brands</div>*/}
                        {/*<div>Property Themes</div>*/}
                        {/*<div>Savings Mode</div>*/}
                        {/*<div>Map</div>*/}
                        {/*<div>Special discounts whtn you call</div>*/}
                    </div>

                    <div className="w-3/4 p-4 font-montserrat text-base">
                        <HotelListCardsPage />
                    </div>
                </div>
            </div>
        </div>

    );
}

export default HotelListPage;