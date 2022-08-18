import { useEffect, useState } from 'react';

import Sidebar from '../../Sidebar/Sidebar';
import DashboardNavbar from '../../Header/DashboardNavbar';
import UniBasicForm from './UniBasicForm';
import UniDetailForm from './UniDetailForm';

import { sendGetRequest } from '../../../utils/sendHttp';

const position = {
  position: 'relative',
};

const UniversityDashboard = (props) => {
  const [universityId, setUniversityId] = useState('');
  const [formFilled, setFormFilled] = useState({
    basic: false,
    detailed: false,
    docs: false,
  });

  const icons = {
    Reports: 'fa-solid fa-chart-pie',
    Schedule: 'fa-solid fa-calendar',
    Target: 'fa-solid fa-bullseye',
    Watchlist: 'fa-solid fa-bookmark',
  };

  const disabled = ['Schedule', 'Target', 'Watchlist'];
  const enabled = ['Reports'];

  const fetchUniversity = async () => {
    const res = await sendGetRequest('/api/v1/university/getUniOfUser');

    setUniversityId(res.data.data.data.id);

    setFormFilled(res.data.data.data.formFilled);
  };

  useEffect(() => {
    fetchUniversity();
  }, []);

  const formFilledHandler = (formFilled) => {
    setFormFilled(formFilled);
  };

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
        {!formFilled.basic && (
          <UniBasicForm id={universityId} setFormFilled={formFilledHandler} />
        )}
        {formFilled.basic && !formFilled.detailed && (
          <UniDetailForm id={universityId} setFormFilled={formFilledHandler} />
        )}
      </div>
    </div>
  );
};

export default UniversityDashboard;
