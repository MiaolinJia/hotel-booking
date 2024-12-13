import React, { useState } from "react";
import { SearchFormData } from "../../types/RecenSearchTypes";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { addSearchAndSave } from "../../store/modules/recentSearches";

const AddActivityForm: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [searchFormData, setSearchFormData] = useState<SearchFormData>({
    hotelType: "single",
    destination: "",
    startDate: new Date(),
    endDate: new Date(),
    rooms: 1,
    adults: 1,
    children: 0,
    bundleSave: false,
    addCar: false,
    addFlight: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setSearchFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSearchFormData((prev) => ({
      ...prev,
      [name]: new Date(value),
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted with data:", searchFormData);
    dispatch(addSearchAndSave(searchFormData));
    setSearchFormData({
      hotelType: "single",
      destination: "",
      startDate: new Date(),
      endDate: new Date(),
      rooms: 1,
      adults: 1,
      children: 0,
      bundleSave: false,
      addCar: false,
      addFlight: false,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Activity</h2>
      <div>
        <select
          name="hotelType"
          value={searchFormData.hotelType}
          onChange={handleChange}
        >
          <option value="single">Single</option>
          <option value="multi">Multi</option>
        </select>
        <input
          type="text"
          name="destination"
          value={searchFormData.destination}
          onChange={handleChange}
          placeholder="Destination"
          required
        />
        <input
          type="date"
          name="startDate"
          value={searchFormData.startDate?.toISOString().split("T")[0]}
          onChange={handleDateChange}
          required
        />
        <input
          type="date"
          name="endDate"
          value={searchFormData.endDate?.toISOString().split("T")[0]}
          onChange={handleDateChange}
          required
        />
        <input
          type="number"
          name="rooms"
          value={searchFormData.rooms}
          onChange={handleChange}
          min="1"
          required
        />
        <input
          type="number"
          name="adults"
          value={searchFormData.adults}
          onChange={handleChange}
          min="1"
          required
        />
        <input
          type="number"
          name="children"
          value={searchFormData.children}
          onChange={handleChange}
          min="0"
          required
        />
        <label>
          <input
            type="checkbox"
            name="bundleSave"
            checked={searchFormData.bundleSave}
            onChange={handleChange}
          />
          Bundle & Save
        </label>
        <label>
          <input
            type="checkbox"
            name="addCar"
            checked={searchFormData.addCar}
            onChange={handleChange}
          />
          Add Car
        </label>
        <label>
          <input
            type="checkbox"
            name="addFlight"
            checked={searchFormData.addFlight}
            onChange={handleChange}
          />
          Add Flight
        </label>
      </div>
      <button type="submit">Add Activity</button>
    </form>
  );
};
export default AddActivityForm;
