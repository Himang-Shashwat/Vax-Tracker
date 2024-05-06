import { useEffect, useState } from "react";
import SearchFilterReset from "../../ui/SearchFilterReset";
import axios from "axios";
import ChildCard from "../../ui/ChildCard";
import Spinner from "../../ui/Spinner";

export default function Children() {
  const [children, setChildren] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentStatusFilter, setCurrentStatusFilter] = useState("all");

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

  const handleSearch = (value) => setSearchQuery(value);

  const handleReset = () => {
    setSearchQuery("");
    setCurrentStatusFilter("all");
  };

  const filteredChildren = children.filter((record) =>
    record.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  console.log(children);
  return (
    <div className="w-[80%] mx-auto mt-4">
      <SearchFilterReset onSearch={handleSearch} onReset={handleReset} />
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="mt-2 grid grid-cols-3 gap-4">
          {filteredChildren.length > 0 ? (
            filteredChildren.map((record) => (
              <ChildCard key={record._id} data={record} onUpdate={onUpdate} />
            ))
          ) : (
            <p>No children found.</p>
          )}
        </div>
      )}
    </div>
  );
}
