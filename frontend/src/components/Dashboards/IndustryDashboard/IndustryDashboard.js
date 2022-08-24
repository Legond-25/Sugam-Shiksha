import { useState, useEffect } from 'react';

import DashboardNavbar from '../../Header/DashboardNavbar';
import Sidebar from '../../Sidebar/Sidebar';
import IndustryBasicForm from './IndustryForm/IndustryBasicForm';
import IndustryDetailForm from './IndustryForm/IndustryDetailForm';
import Bot from '../../Bot/Bot';

import { sendGetRequest } from '../../../utils/sendHttp';
import { showAlert } from '../../../utils/alerts';

const position = {
  position: 'relative',
};

const IndustryDashboard = (props) => {
  const [industryId, setIndustryId] = useState('');
  const [formFilled, setFormFilled] = useState({
    basic: false,
    detailed: false,
    bot: false,
  });
  const [bot, getBot] = useState([]);

  const fetchIndustry = async () => {
    try {
      const res = await sendGetRequest('/api/v1/industry/getIndOfUser');

      setIndustryId(res.data.data.data.id);
      setFormFilled(res.data.data.data.formFilled);
    } catch (err) {
      showAlert('error', err.response.data.message);
    }
  };

  useEffect(() => {
    fetchIndustry();
  }, []);

  const formFilledHandler = (formFilled) => {
    setFormFilled(formFilled);
  };

  const fetchBot = async () => {
    try {
      const res = await sendGetRequest('/api/v1/industry/industryBot');

      getBot(res.data.data);
    } catch (err) {
      showAlert('error', err.response.data.message);
    }
  };

  useEffect(() => {
    fetchBot();
  }, []);

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
      {formFilled.basic && formFilled.detailed && !formFilled.bot && (
        <Bot setFormFilled={formFilledHandler} id={industryId} bot={bot} />
      )}
    </div>
  );
};

export default IndustryDashboard;
