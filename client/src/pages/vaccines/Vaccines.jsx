import { useEffect, useState } from "react";
import axios from "axios";
import VaccineCard from "../../ui/VaccineCard";
import Spinner from "../../ui/Spinner";

export default function Vaccines() {
  const [vaccines, setVaccines] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchVaccines = () => {
    setIsLoading(true);
    axios
      .get("http://localhost:3000/api/v1/vaccines")
      .then((response) => {
        setVaccines(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching vaccines:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchVaccines();
  }, []);

  const handleSearch = (value) => setSearchQuery(value);

  const filteredVaccines = vaccines.filter((vaccine) =>
    vaccine.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="m-4">
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="mt-2 grid grid-cols-3 gap-4">
          {filteredVaccines.length > 0 ? (
            filteredVaccines.map((vaccine) => (
              <VaccineCard key={vaccine._id} data={vaccine} />
            ))
          ) : (
            <p>No vaccines found.</p>
          )}
        </div>
      )}
    </div>
  );
}
