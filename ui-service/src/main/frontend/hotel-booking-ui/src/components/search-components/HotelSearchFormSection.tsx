import DatePicker from "react-datepicker";
import SearchHotelComponent from "./RoomSelectorComponent.tsx";
import {
  HotelSearchFormSectionProps,
  Location,
} from "../../types/HotelSearchFormTypes.ts";
import { useEffect, useRef, useState } from "react";

// Debounce helper to prevent too many API calls
const useDebounce = (value: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

interface Suggestion {
  place_id: number;
  display_name: string;
  address: {
    city?: string;
    state?: string;
    country?: string;
    town?: string;
  };
}

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
  const [searchInputs, setSearchInputs] = useState<string[]>(
    formData.destinationAndDates.map((d) => d.location?.city || "")
  );
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const suggestionsRef = useRef<HTMLDivElement>(null);
  const debouncedSearch = useDebounce(
    activeIndex !== null ? searchInputs[activeIndex] : "",
    300
  );
  const isMulti = formData.hotelType === "MULTI";

  // Update searchInputs when hotels are added or removed
  useEffect(() => {
    setSearchInputs(
      formData.destinationAndDates.map((d) => d.location?.city || "")
    );
  }, [formData.destinationAndDates.length]);

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        suggestionsRef.current &&
        !suggestionsRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Fetch location suggestions
  useEffect(() => {
    const fetchSuggestions = async () => {
      if (!debouncedSearch || debouncedSearch.length < 3) {
        setSuggestions([]);
        return;
      }

      setIsLoading(true);
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
            debouncedSearch
          )}&addressdetails=1&limit=5`
        );
        const data = await response.json();
        setSuggestions(data);
        setShowSuggestions(true);
      } catch (error) {
        console.error("Error fetching suggestions:", error);
        setSuggestions([]);
      }
      setIsLoading(false);
    };

    fetchSuggestions();
  }, [debouncedSearch]);

  const handleInputChange = (index: number, value: string) => {
    setSearchInputs((prev) => {
      const newInputs = [...prev];
      newInputs[index] = value;
      return newInputs;
    });
    setActiveIndex(index);
    setShowSuggestions(true);
  };

  const handleSuggestionClick = (index: number, suggestion: Suggestion) => {
    console.log(suggestion);
    const location: Location = {
      city: suggestion.address.city || suggestion.address.town || "",
      state: suggestion.address.state || "",
      country: suggestion.address.country || "",
      id: suggestion.place_id.toString(),
    };

    // Update the search input
    setSearchInputs((prev) => {
      const newInputs = [...prev];
      newInputs[index] = suggestion.display_name;
      return newInputs;
    });

    // Update parent component's state
    handleDestinationChange(index, location);

    // Close suggestions
    setShowSuggestions(false);
    setActiveIndex(null);
  };

  const shouldShowDropdown =
    showSuggestions &&
    activeIndex !== null &&
    (isLoading ||
      suggestions.length > 0 ||
      (debouncedSearch && debouncedSearch.length >= 3));

  return (
    <form onSubmit={handleSubmit} className={className}>
      {formData.destinationAndDates.map((destinationAndDates, index) => (
        <div className={className} key={index}>
          <div className="label-remove-group">
            {isMulti && <label>Hotel {index + 1}</label>}
            {index >= 2 && (
              <button onClick={(event) => handleRemoveHotel(index, event)}>
                Remove
              </button>
            )}
          </div>

          <div className={isMulti ? "destination-date-group" : className}>
            <span>
              <input
                type="text"
                placeholder="Where to?"
                value={searchInputs[index]}
                onChange={(e) => handleInputChange(index, e.target.value)}
                onFocus={() => {
                  setActiveIndex(index);
                  setShowSuggestions(true);
                }}
                className={
                  isMulti
                    ? "multi-search-input search-input-size"
                    : "search-input"
                }
              />
              <div className="relative">
                {shouldShowDropdown && activeIndex === index && (
                  <div
                    ref={suggestionsRef}
                    className="absolute z-[9999] w-full mt-1 bg-white border rounded-md shadow-lg"
                  >
                    {isLoading ? (
                      <div className="p-2 text-gray-500">Loading...</div>
                    ) : suggestions.length > 0 ? (
                      <ul>
                        {suggestions.map((suggestion) => (
                          <li
                            key={suggestion.place_id}
                            onClick={() =>
                              handleSuggestionClick(index, suggestion)
                            }
                            className="p-2 cursor-pointer hover:bg-gray-100"
                          >
                            {suggestion.display_name}
                          </li>
                        ))}
                      </ul>
                    ) : debouncedSearch.length >= 3 ? (
                      <div className="p-2 text-gray-500">No results found</div>
                    ) : null}
                  </div>
                )}
              </div>
            </span>
            <span>
              <DatePicker
                selectsRange={true}
                startDate={destinationAndDates.checkInDate}
                endDate={destinationAndDates.checkOutDate}
                onChange={(dates) => handleDateChange(index, dates)}
                placeholderText="Check-in - Check-out"
                className={`date-picker-input ${
                  isMulti ? "multi-search-input" : "search-input"
                }`}
                filterDate={isDateSelectable}
                monthsShown={2}
              />
            </span>
          </div>
        </div>
      ))}
      {isMulti && (
        <div>
          <button className="add-hotel-button" onClick={handleAddHotel}>
            + Add another hotel
          </button>
          <label className="add-hotel-label">
            Add up to 5 hotels for your trip
          </label>
        </div>
      )}
      <div className={isMulti ? "counter-submit-group" : "single-hotel-form"}>
        <SearchHotelComponent
          rooms={formData.occupancy.rooms}
          adults={formData.occupancy.adults}
          children={formData.occupancy.children}
          onRoomDataChange={handleRoomDataChange}
        />
        <div className="submit-button">
          <button type="submit" className="search-button">
            Find Your Hotel
          </button>
          {!isMulti && (
            <p className="cancellation-text">
              Book a hotel with free cancellation for flexibility
            </p>
          )}
        </div>
      </div>
    </form>
  );
}
