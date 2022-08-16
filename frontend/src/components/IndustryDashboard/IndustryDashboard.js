import DashboardNavbar from "../../Header/DashboardNavbar";
import Sidebar from "../../Sidebar/Sidebar";
import Bot from "../../Bot/Bot";
import IndustryForm from "./IndustryForm";

const position = {
  position: "relative",
};

const IndustryDashboard = (props) => {
  const icons = {
    Reports: "fa-solid fa-chart-pie",
    Reports: "fa-solid fa-chart-pie",
  };
  return (
    <div style={position}>
      <Sidebar icons={icons} />
      <DashboardNavbar />
      <Bot />
      {/* <IndustryForm /> */}
    </div>
  );
};

export default IndustryDashboard;
