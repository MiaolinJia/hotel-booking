import { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { BadgeDollarSign } from "lucide-react";
import { AppDispatch } from "../../store";
import { useDispatch } from "react-redux";
import { searchHotelList } from "../../store/modules/hotels";
import {
  ChildAge,
  FormData,
  Location,
} from "../../types/HotelSearchFormTypes.ts";
import HotelSearchFormSection from "./HotelSearchFormSection.tsx";
import { addSearchAndSave } from "../../store/modules/recentSearches.ts";

function HotelSearchSectionComponent() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);
  const isDateSelectable = (date: Date) => {
    return date >= today; // Allow selection of today and future dates
  };

  const [formData, setFormData] = useState<FormData>({
    hotelType: "SINGLE",
    destinationAndDates: [
      { location: undefined, checkInDate: today, checkOutDate: tomorrow },
    ],
    occupancy: {
      rooms: 1,
      adults: 2,
      children: 0,
      childrenAges: [],
    },
    addCar: false,
    addFlight: false,
  });

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (formData.hotelType === "SINGLE") {
        const offset = window.scrollY;
        setIsSticky(offset > 500);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleDateChange = (
    index: number,
    dates: [Date | null, Date | null]
  ) => {
    const [start, end] = dates;
    setFormData((prevState) => ({
      ...prevState,
      destinationAndDates: prevState.destinationAndDates.map((item, i) =>
        i === index
          ? {
              ...item,
              checkInDate: start || undefined,
              checkOutDate: end || undefined,
            }
          : item
      ),
    }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleDestinationChange = (index: number, e: Location) => {
    setFormData((prevState) => ({
      ...prevState,
      destinationAndDates: prevState.destinationAndDates.map((item, i) =>
        i === index
          ? {
              ...item,
              location: {
                city: e.city,
                state: e.state,
                country: e.country,
                id: e.id,
              },
            }
          : item
      ),
    }));
  };

  const handleHotelTypeChange = (type: "SINGLE" | "MULTI") => {
    if (type === "MULTI") {
      setFormData((prevState) => ({
        ...prevState,
        destinationAndDates: [
          { location: undefined, checkInDate: today, checkOutDate: tomorrow },
          {
            location: undefined,
            checkInDate: undefined,
            checkOutDate: undefined,
          },
        ],
        hotelType: type,
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        destinationAndDates: [
          { location: undefined, checkInDate: today, checkOutDate: tomorrow },
        ],
        hotelType: type,
      }));
    }
  };

  const handleChildAgeChange = (childId: number, age: number | null) => {
    setFormData((prevState) => ({
      ...prevState,
      occupancy: {
        ...prevState.occupancy,
        childrenAges: prevState.occupancy.childrenAges.map((child) =>
          child.id === childId ? { ...child, age } : child
        ),
      },
    }));
  };

  const handleRoomDataChange = (
    key: "rooms" | "adults" | "children",
    value: number,
    childrenAges?: ChildAge[]
  ) => {
    setFormData((prev) => ({
      ...prev,
      occupancy: {
        ...prev.occupancy,
        [key]: value,
        ...(childrenAges ? { childrenAges } : {}),
      },
    }));
  };

  const handleAddHotel = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setFormData((prevState) => ({
      ...prevState,
      destinationAndDates: [
        ...prevState.destinationAndDates,
        {
          location: undefined,
          checkInDate: undefined,
          checkOutDate: undefined,
        },
      ],
    }));
  };

  const handleRemoveHotel = (
    index: number,
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    setFormData((prevState) => {
      const newDestinationAndDates = [...prevState.destinationAndDates];
      newDestinationAndDates.splice(index, 1);
      return {
        ...prevState,
        destinationAndDates: newDestinationAndDates,
      };
    });
  };

  const dispatch = useDispatch<AppDispatch>();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData);
    dispatch(searchHotelList(formData));
    dispatch(addSearchAndSave(formData));
  };

  const isSingleHotelSearch = formData.hotelType === "SINGLE";
  const className = isSingleHotelSearch
    ? "single-hotel-form"
    : "multi-hotel-form";

  const stickyClass = isSingleHotelSearch && isSticky ? "sticky" : "";

  return (
    <div className={`hotel-search-section ${stickyClass}`}>
      <div className={`search-box ${stickyClass}`}>
        {(!isSticky || !isSingleHotelSearch) && (
          <div>
            <div className={"search-box-title"}>
              Searching for a place to stay?
            </div>

            <div className="hotel-type-selection">
              <label>
                <input
                  type="radio"
                  name="hotelType"
                  checked={formData.hotelType === "SINGLE"}
                  onChange={() => handleHotelTypeChange("SINGLE")}
                />
                <span>Single Hotel</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="hotelType"
                  checked={formData.hotelType === "MULTI"}
                  onChange={() => handleHotelTypeChange("MULTI")}
                />
                <span>Multi Hotel</span>
              </label>
            </div>
          </div>
        )}

        <HotelSearchFormSection
          className={className}
          formData={formData}
          handleInputChange={handleInputChange}
          handleDestinationChange={handleDestinationChange}
          handleDateChange={handleDateChange}
          handleRoomDataChange={handleRoomDataChange}
          handleChildAgeChange={handleChildAgeChange}
          handleSubmit={handleSubmit}
          isDateSelectable={isDateSelectable}
          handleAddHotel={handleAddHotel}
          handleRemoveHotel={handleRemoveHotel}
        />

        {isSingleHotelSearch && (
          <div className="bundle-options">
            <label className="bundle-option">
              <BadgeDollarSign size={16} color="#026702" />
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
        )}
      </div>
    </div>
  );
}

export default HotelSearchSectionComponent;
