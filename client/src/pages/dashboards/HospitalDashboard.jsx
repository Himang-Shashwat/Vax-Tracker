import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import ImmunizationCard from "../../ui/ImmunizationCard";
import Spinner from "../../ui/Spinner";

export default function HospitalDashboard() {
  const { currentUser } = useSelector((state) => state.user);
  const [immunizations, setImmunizations] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("http://localhost:3000/api/v1/immunizations", {
        withCredentials: true,
      })
      .then((data) => {
        setImmunizations(data.data.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-3xl">Welcome Back, {currentUser.name}</h1>
      <p className="mt-2">Here are your scheduled vaccinations</p>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <div className="mt-2 grid grid-cols-2 gap-4">
            {immunizations && immunizations.length > 0 ? (
              immunizations.map((record) => (
                <ImmunizationCard key={record._id} data={record} />
              ))
            ) : (
              <p>No scheduled vaccinations found.</p>
            )}
          </div>
        </>
      )}
    </div>
  );
}
