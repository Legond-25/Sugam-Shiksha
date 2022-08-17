import DashboardNavbar from '../../Header/DashboardNavbar';
import Sidebar from '../../Sidebar/Sidebar';
import Bot from '../../Bot/Bot';
// import IndustryForm from './IndustryForm/IndustryForm';

const position = {
  position: 'relative',
};

const IndustryDashboard = (props) => {
  const icons = {
    Reports: 'fa-solid fa-chart-pie',
  };

  const disabled = [''];
  const enabled = [''];

  return (
    <div style={position}>
      <Sidebar icons={icons} disabled={disabled} enabled={enabled} />
      <DashboardNavbar />
      <Bot />
      {/* <IndustryForm /> */}
    </div>
  );
};

export default IndustryDashboard;
