import Sidebar from '../Sidebar/Sidebar';
import DashboardNavbar from '../Header/DashboardNavbar';
import UniBasicForm from './UniBasicForm';
import UniDetailForm from './UniDetailForm';

const position = {
  position: 'relative',
};

const UniversityDashboard = (props) => {
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
      <div className="university-dashboard">
        <h1 className="university-dashboard__welcome">
          Hey there, welcome back
        </h1>
        <h2 className="university-dashboard__header">
          Tell us about your <span>University...</span>
        </h2>
        {/* <UniBasicForm /> */}
        <UniDetailForm />
      </div>
    </div>
  );
};

export default UniversityDashboard;
