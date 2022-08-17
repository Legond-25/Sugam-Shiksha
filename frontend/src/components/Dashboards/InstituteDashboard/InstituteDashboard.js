import Sidebar from '../../Sidebar/Sidebar';
import DashboardNavbar from '../../Header/DashboardNavbar';
// import InsBasicForm from './InsBasicForm';
// import InsDetailForm from './InsDetailForm';
import InsDocApproval from './InsDocApproval';

const position = {
  position: 'relative',
};

const InstituteDashboard = (props) => {
  const icons = {
    Reports: 'fa-solid fa-chart-pie',
    Schedule: 'fa-solid fa-calendar',
    Target: 'fa-solid fa-bullseye',
    Watchlist: 'fa-solid fa-bookmark',
  };

  const disabled = ['Schedule', 'Target', 'Watchlist'];
  const enabled = ['Reports'];

  return (
    <div style={position}>
      <Sidebar icons={icons} disabled={disabled} enabled={enabled} />
      <DashboardNavbar />
      <div className="institute-dashboard">
        <h1 className="institute-dashboard__welcome">
          Hey there, welcome back
        </h1>
        <h2 className="institute-dashboard__header">
          Tell us about your <span>Institute...</span>
        </h2>
        {/* <InsBasicForm /> */}
        {/* <InsDetailForm /> */}
        <InsDocApproval />
      </div>
    </div>
  );
};

export default InstituteDashboard;
