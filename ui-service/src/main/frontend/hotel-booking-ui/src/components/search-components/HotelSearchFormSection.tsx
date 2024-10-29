import DatePicker from "react-datepicker";
import SearchHotelComponent from "./RoomSelectorComponent.tsx";
import {HotelSearchFormSectionProps} from "../../types/HotelSearchFormTypes.ts";

export default function HotelSearchFormSection({
                                                   className,
                                                   formData,
                                                   handleDestinationChange,
                                                   handleDateChange,
                                                   handleRoomDataChange,
                                                   handleSubmit,
                                                   isDateSelectable,
                                                   handleAddHotel,
                                                   handleRemoveHotel,
                                               }: HotelSearchFormSectionProps) {
    const isMulti = formData.hotelType === "multi";
    return (
        <form onSubmit={handleSubmit} className={className}>
            {formData.destinationAndDates.map((destinationAndDates, index) => (
                <div className={className}>
                    <div className='label-remove-group'>
                        {isMulti && <label>Hotel {index + 1}</label>}
                        {index >= 2 && (
                            <button
                                onClick={(event) =>
                                    handleRemoveHotel(index, event)
                                }
                            >
                                Remove
                            </button>
                        )}
                    </div>
                    <div
                        className={
                            isMulti ? "destination-date-group" : className
                        }
                    >
                        <span>
                            <input
                                type='text'
                                name='destination'
                                placeholder='Where to?'
                                value={destinationAndDates.destination}
                                onChange={(e) => handleDestinationChange(index, e)}
                                className={
                                    isMulti
                                        ? "multi-search-input search-input-size"
                                        : "search-input"
                                }
                            />
                        </span>

                        <span>
                            <DatePicker
                                selectsRange={true}
                                startDate={destinationAndDates.startDate}
                                endDate={destinationAndDates.endDate}
                                onChange={(dates) =>
                                    handleDateChange(index, dates)
                                }
                                placeholderText='Check-in - Check-out'
                                className={`date-picker-input ${
                                    isMulti
                                        ? "multi-search-input"
                                        : "search-input"
                                }`}
                                filterDate={isDateSelectable}
                            />
                        </span>
                    </div>
                </div>
            ))}
            {isMulti && (
                <div>
                    <button
                        className='add-hotel-button'
                        onClick={handleAddHotel}
                    >
                        + Add another hotel
                    </button>
                    <label className='add-hotel-label'>
                        Add up to 5 hotels for your trip
                    </label>
                </div>
            )}
            <div
                className={
                    isMulti ? "counter-submit-group" : "single-hotel-form"
                }
            >
                <SearchHotelComponent
                    rooms={formData.rooms}
                    adults={formData.adults}
                    children={formData.children}
                    onRoomDataChange={handleRoomDataChange}
                />
                <div className='submit-button'>
                    <button type='submit' className='search-button'>
                        Find Your Hotel
                    </button>
                    {!isMulti && (
                        <p className='cancellation-text'>
                            Book a hotel with free cancellation for flexibility
                        </p>
                    )}
                </div>
            </div>
        </form>
    );
}
