import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import ChildCard from "../../ui/ChildCard";
import Spinner from "../../ui/Spinner";
import SearchFilterReset from "../../ui/SearchFilterReset";

export default function ParentDashboard() {
  const { currentUser } = useSelector((state) => state.user);
  const [children, setChildren] = useState([]);
  const [isLoadingChildren, setIsLoadingChildren] = useState(false);
  const [isLoadingImmunizations, setIsLoadingImmunizations] = useState(false);
  const [immunizations, setImmunizations] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentStatusFilter, setCurrentStatusFilter] = useState("all");

  useEffect(() => {
    fetchChildren();
    fetchImmunizations();
  }, []);

  const fetchChildren = () => {
    setIsLoadingChildren(true);
    axios
      .get("http://localhost:3000/api/v1/child", {
        withCredentials: true,
      })
      .then((data) => {
        setChildren(data.data.data);
        console.log(data.data.data);
      })
      .catch((err) => {
        console.error("Error fetching children:", err);
      })
      .finally(() => {
        setIsLoadingChildren(false);
      });
  };

  const fetchImmunizations = () => {
    setIsLoadingImmunizations(true);
    axios
      .get("http://localhost:3000/api/v1/immunizations", {
        withCredentials: true,
      })
      .then((data) => {
        setImmunizations(data.data.data);
      })
      .catch((err) => {
        console.error("Error fetching immunizations:", err);
      })
      .finally(() => {
        setIsLoadingImmunizations(false);
      });
  };

  const onUpdateChildren = () => {
    fetchChildren();
    fetchImmunizations();
  };

  const handleSearch = (value) => setSearchQuery(value);
  const handleFilter = (value) => setCurrentStatusFilter(value);

  const handleReset = () => {
    setSearchQuery("");
    setCurrentStatusFilter("all");
  };

  const getUpcomingVaccine = (childId) => {
    const childImmunizations = immunizations.filter(
      (record) => record.childId._id === childId
    );
    const upcomingVaccine = childImmunizations.find(
      (record) => new Date(record.administerOn) > new Date()
    );
    return upcomingVaccine;
  };

  return (
    <div className="w-[80%] mx-auto m-4">
      <h1 className="text-3xl">Welcome Back, {currentUser.name}</h1>
      <SearchFilterReset
        onSearch={handleSearch}
        onFilter={handleFilter}
        onReset={handleReset}
      />
      {isLoadingChildren || isLoadingImmunizations ? (
        <Spinner />
      ) : (
        <div>
          <div className="grid grid-cols-2 gap-4">
            {children.map((child) => {
              const upcomingVaccine = getUpcomingVaccine(child._id);
              return (
                <div key={child._id}>
                  <ChildCard data={child} onUpdate={onUpdateChildren} />
                  {upcomingVaccine && (
                    <div>
                      <p>Upcoming Vaccine: {upcomingVaccine.vaccineType}</p>
                      <p>Administer On: {upcomingVaccine.administerOn}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
