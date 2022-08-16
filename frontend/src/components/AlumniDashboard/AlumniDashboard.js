import DashboardNavbar from "../Header/DashboardNavbar";
import Sidebar from "../Sidebar/Sidebar";
import Bot from "../Bot/Bot";
import AlumniForm from "./AlumniForm/AlumniForm";

const position = {
  position: "relative",
};

const AlumniDashboard = (props) => {
  const icons = {
    Reports: "fa-solid fa-chart-pie",
    Reports: "fa-solid fa-chart-pie",
  };
  return (
    <div style={position} className="alumniDashboard">
      <Sidebar icons={icons} />
      <DashboardNavbar />
      <Bot />
      {/* <AlumniForm /> */}
    </div>
  );
};

export default AlumniDashboard;
