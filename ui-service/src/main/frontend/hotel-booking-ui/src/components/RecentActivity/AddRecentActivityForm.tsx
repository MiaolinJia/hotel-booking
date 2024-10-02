import React, { useState } from "react";
import { RecentActivity } from "./types";

interface AddActivityFormProps {
  addActivity: (activity: Omit<RecentActivity, "id">) => void;
}

const AddActivityForm: React.FC<AddActivityFormProps> = ({ addActivity }) => {
  const [activity, setActivity] = useState<Omit<RecentActivity, "id">>({
    type: "hotel",
    city: "",
    state: "",
    startDate: "",
    endDate: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setActivity((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addActivity(activity);
    // Reset form
    setActivity({
      type: "hotel",
      city: "",
      state: "",
      startDate: "",
      endDate: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Activity</h2>
      <div>
        <select name="type" value={activity.type} onChange={handleChange}>
          <option value="hotel">Hotel</option>
          <option value="flight">Flight</option>
          <option value="car">Car</option>
        </select>
        <input
          type="text"
          name="city"
          value={activity.city}
          onChange={handleChange}
          placeholder="City"
          required
        />
        <input
          type="text"
          name="state"
          value={activity.state}
          onChange={handleChange}
          placeholder="State"
          required
        />
        <input
          type="date"
          name="startDate"
          value={activity.startDate}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="endDate"
          value={activity.endDate}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Add Activity</button>
    </form>
  );
};

export default AddActivityForm;
