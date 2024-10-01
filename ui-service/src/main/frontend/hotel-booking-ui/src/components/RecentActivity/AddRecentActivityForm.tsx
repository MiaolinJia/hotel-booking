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
    <form onSubmit={handleSubmit} className="mb-4 p-4 bg-gray-100 rounded">
      <h2 className="text-xl font-bold mb-2">Add New Activity</h2>
      <div className="grid grid-cols-2 gap-4">
        <select
          name="type"
          value={activity.type}
          onChange={handleChange}
          className="p-2 border rounded"
        >
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
          className="p-2 border rounded"
          required
        />
        <input
          type="text"
          name="state"
          value={activity.state}
          onChange={handleChange}
          placeholder="State"
          className="p-2 border rounded"
          required
        />
        <input
          type="date"
          name="startDate"
          value={activity.startDate}
          onChange={handleChange}
          className="p-2 border rounded"
          required
        />
        <input
          type="date"
          name="endDate"
          value={activity.endDate}
          onChange={handleChange}
          className="p-2 border rounded"
          required
        />
      </div>
      <button
        type="submit"
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add Activity
      </button>
    </form>
  );
};

export default AddActivityForm;
