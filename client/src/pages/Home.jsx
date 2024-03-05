import LandingPage from "../components/LandingPage";
import HospitalDashboard from "./dashboards/HospitalDashboard";
import ParentDashboard from "./dashboards/ParentDashboard";
import { useSelector } from "react-redux";

export default function Home() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <>
      {currentUser == null && <LandingPage />}
      {currentUser?.role === "hospital" && <HospitalDashboard />}
      {currentUser?.role === "user" && <ParentDashboard />}
    </>
  );
}
