import { useState } from "react";
import axios from "axios";

const AddChildForm = ({ onAddChildSuccess, onCancel }) => {
  const [childData, setChildData] = useState({
    name: "",
    dateOfBirth: "",
    gender: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setChildData({ ...childData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/child",
        childData,
        {
          withCredentials: true,
        }
      );
      if (response.status === 201) {
        // Child added successfully
        onAddChildSuccess();
      } else {
        // Handle error
        console.error("Error adding child:", response.data.error);
      }
    } catch (error) {
      console.error("Error adding child:", error);
    }
  };

  return (
    <div className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Add Child</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2" htmlFor="name">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={childData.name}
              onChange={handleChange}
              className="w-full border rounded-md py-2 px-3"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-semibold mb-2"
              htmlFor="dateOfBirth"
            >
              Date of Birth:
            </label>
            <input
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
              value={childData.dateOfBirth}
              onChange={handleChange}
              className="w-full border rounded-md py-2 px-3"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-semibold mb-2"
              htmlFor="gender"
            >
              Gender:
            </label>
            <select
              id="gender"
              name="gender"
              value={childData.gender}
              onChange={handleChange}
              className="w-full border rounded-md py-2 px-3"
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onCancel}
              className="mr-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-md"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
            >
              Add Child
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddChildForm;
