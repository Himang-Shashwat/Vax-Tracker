import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ChildCard from "../../ui/ChildCard";
import Spinner from "../../ui/Spinner";
import AddChildForm from "../../ui/AddChildForm";

export default function Children() {
  const [children, setChildren] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isAddChildFormVisible, setIsAddChildFormVisible] = useState(false);

  const fetchChildren = () => {
    setIsLoading(true);
    axios
      .get("http://localhost:3000/api/v1/child", {
        withCredentials: true,
      })
      .then((data) => {
        setChildren(data.data.data);
      })
      .catch((err) => {
        console.error("Error fetching children:", err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchChildren();
  }, []);

  const onUpdate = () => {
    fetchChildren();
  };

  const handleAddChild = () => {
    setIsAddChildFormVisible(true);
  };

  const handleCancelAddChild = () => {
    setIsAddChildFormVisible(false);
  };

  const handleAddChildSuccess = () => {
    setIsAddChildFormVisible(false);
    onUpdate();
  };

  return (
    <div className="w-[80%] mx-auto mt-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Children</h2>
        <button
          onClick={handleAddChild}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Add Child
        </button>
      </div>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="mt-2 grid grid-cols-3 gap-4">
          {children.map((child) => (
            <ChildCard key={child._id} data={child} onUpdate={onUpdate} />
          ))}
        </div>
      )}
      {isAddChildFormVisible && (
        <AddChildForm
          onAddChild={handleAddChildSuccess}
          onCancel={handleCancelAddChild}
        />
      )}
    </div>
  );
}
