import HospitalDashboard from "./dashboards/HospitalDashboard";
import ParentDashboard from "./dashboards/ParentDashboard";
import { useSelector } from "react-redux";

export default function Home() {
  const { currentUser } = useSelector((state) => state.user);

  return currentUser.role === "hospital" ? (
    <HospitalDashboard />
  ) : (
    <ParentDashboard />
  );
}
