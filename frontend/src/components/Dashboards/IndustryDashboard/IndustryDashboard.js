import { useState, useEffect } from 'react';

import DashboardNavbar from '../../Header/DashboardNavbar';
import Sidebar from '../../Sidebar/Sidebar';
import IndustryBasicForm from './IndustryForm/IndustryBasicForm';
import IndustryDetailForm from './IndustryForm/IndustryDetailForm';
import Bot from '../../Bot/Bot';

import { sendGetRequest } from '../../../utils/sendHttp';

const position = {
  position: 'relative',
};

const IndustryDashboard = (props) => {
  const [industryId, setIndustryId] = useState('');
  const [formFilled, setFormFilled] = useState({
    basic: false,
    detailed: false,
    docs: false,
  });

  const fetchIndustry = async () => {
    const res = await sendGetRequest('/api/v1/industry/getIndOfUser');

    setIndustryId(res.data.data.data.id);
    setFormFilled(res.data.data.data.formFilled);
  };

  useEffect(() => {
    fetchIndustry();
  }, []);

  const formFilledHandler = (formFilled) => {
    setFormFilled(formFilled);
  };

  const icons = {
    Reports: 'fa-solid fa-chart-pie',
  };

  const disabled = [''];
  const enabled = [''];

  return (
    <div style={position}>
      <Sidebar icons={icons} disabled={disabled} enabled={enabled} />
      <DashboardNavbar />
      {!formFilled.basic && (
        <IndustryBasicForm id={industryId} setFormFilled={formFilledHandler} />
      )}

      {formFilled.basic && !formFilled.detailed && (
        <IndustryDetailForm id={industryId} setFormFilled={formFilledHandler} />
      )}
      {/* <Bot /> */}
    </div>
  );
};

export default IndustryDashboard;
