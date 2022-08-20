import { useState } from 'react';

import { sendPatchRequest } from '../../../utils/sendHttp';
import { showAlert } from '../../../utils/alerts';

import Input from '../../UI/Input/Input';

const onClickDropdownHandler = (event) => {
  const value = event.target.innerHTML;

  event.target.parentElement.parentElement.previousElementSibling.innerHTML =
    value;
  event.target.parentElement.parentElement.previousElementSibling.value = value;

  event.target.parentElement.parentElement.previousElementSibling.style.color =
    'black';

  event.target.parentElement.parentElement.style.display = 'none';
};

const showDropdownHandler = (event) => {
  event.target.nextSibling.style.display = 'block';
};

const InsBasicForm = (props) => {
  const [formData, setFormData] = useState({
    institute_name: '',
    institute_code: '',
    institute_type: '',
    institute_address: '',
    institute_head: '',
    funding_status: '',
    autonomy_status: '',
  });

  const inputChangeHandler = (event) => {
    event.preventDefault();

    const value = event.target.value;
    const name = event.target.name;

    setFormData((prevState) => {
      if (name === 'institute_name') {
        return {
          institute_name: value,
          institute_code: prevState.institute_code,
          institute_type: prevState.institute_type,
          institute_address: prevState.institute_address,
          institute_head: prevState.institute_head,
          autonomy_status: prevState.autonomy_status,
          funding_status: prevState.funding_status,
        };
      } else if (name === 'institute_code') {
        return {
          institute_name: prevState.institute_name,
          institute_code: value,
          institute_type: prevState.institute_type,
          institute_address: prevState.institute_address,
          institute_head: prevState.institute_head,
          autonomy_status: prevState.autonomy_status,
          funding_status: prevState.funding_status,
        };
      } else if (name === 'institute_type') {
        return {
          institute_name: prevState.institute_name,
          institute_code: prevState.institute_code,
          institute_type: value,
          institute_address: prevState.institute_address,
          institute_head: prevState.institute_head,
          autonomy_status: prevState.autonomy_status,
          funding_status: prevState.funding_status,
        };
      } else if (name === 'institute_address') {
        return {
          institute_name: prevState.institute_name,
          institute_code: prevState.institute_code,
          institute_type: prevState.institute_type,
          institute_address: value,
          institute_head: prevState.institute_head,
          autonomy_status: prevState.autonomy_status,
          funding_status: prevState.funding_status,
        };
      } else if (name === 'institute_head') {
        return {
          institute_name: prevState.institute_name,
          institute_code: prevState.institute_code,
          institute_type: prevState.institute_type,
          institute_address: prevState.institute_address,
          institute_head: value,
          autonomy_status: prevState.autonomy_status,
          funding_status: prevState.funding_status,
        };
      } else if (name === 'autonomy_status') {
        return {
          institute_name: prevState.institute_name,
          institute_code: prevState.institute_code,
          institute_type: prevState.institute_type,
          institute_address: prevState.institute_address,
          institute_head: prevState.institute_head,
          autonomy_status: value,
          funding_status: prevState.funding_status,
        };
      } else {
        return {
          institute_name: prevState.institute_name,
          institute_code: prevState.institute_code,
          institute_type: prevState.institute_type,
          institute_address: prevState.institute_address,
          institute_head: prevState.institute_head,
          autonomy_status: prevState.autonomy_status,
          funding_status: value,
        };
      }
    });
  };

  const submitHandler = async (event) => {
    try {
      event.preventDefault();

      const data = {
        instituteName: formData.institute_name,
        instituteCode: formData.institute_code,
        instituteType: formData.institute_type,
        instituteAddress: formData.institute_address,
        principal: formData.institute_head,
        autonomyStatus: formData.autonomy_status,
        fundingStatus: formData.funding_status,
        formFilled: {
          basic: true,
        },
      };

      const res = await sendPatchRequest(`/api/v1/institute/${props.id}`, data);

      if (res.data.status === 'success') {
        showAlert('success', 'Basic information form submitted');
        props.setFormFilled({
          basic: true,
          detailed: false,
          docs: false,
        });
      }
    } catch (err) {
      showAlert('error', err.response.data.message);
    }
  };

  return (
    <form className="institute-basic__form" onSubmit={submitHandler}>
      <div className="institute-basic__form-group">
        <Input
          id="institute_name"
          label={<span className="institute-basic__label">Institute Name</span>}
          type="text"
          name="institute_name"
          placeholder="Institute Name"
          required
          value={formData.institute_name}
          onChange={inputChangeHandler}
        />
      </div>

      <div className="institute-basic__form-group">
        <Input
          id="institute_code"
          label={<span className="institute-basic__label">Institute Code</span>}
          type="text"
          name="institute_code"
          placeholder="institute Code"
          required
          value={formData.institute_code}
          onChange={inputChangeHandler}
        />
      </div>

      <div className="institute-basic__form-group">
        <label htmlFor="dropdown-toggle" className="institute-basic__label">
          Institute Type
        </label>
        <button
          type="button"
          id="dropdown-toggle"
          className="institute-basic__toggle round"
          onClick={showDropdownHandler}
        >
          --- Please Select One ---
        </button>

        <div className="institute-basic__dropdown">
          <Input
            id="government_institute"
            label={
              <span className="institute-basic__radio-label">
                Government Institute
              </span>
            }
            labelClick={onClickDropdownHandler}
            type="radio"
            name="institute_type"
            value="government"
            hidden
            onChange={inputChangeHandler}
          />

          <Input
            id="non-government_institute"
            label={
              <span className="institute-basic__radio-label">
                Non-Government Institute
              </span>
            }
            labelClick={onClickDropdownHandler}
            type="radio"
            name="institute_type"
            value="non-government"
            hidden
            onChange={inputChangeHandler}
          />
        </div>
      </div>

      <div className="institute-basic__form-group">
        <Input
          id="institute_address"
          label={
            <span className="institute-basic__label">Institute Address</span>
          }
          type="text"
          name="institute_address"
          placeholder="Institute Address"
          required
          value={formData.institute_address}
          onChange={inputChangeHandler}
        />
      </div>

      <div className="institute-basic__form-group">
        <label htmlFor="dropdown-toggle" className="institute-basic__label">
          Funding Status
        </label>
        <button
          type="button"
          id="dropdown-toggle"
          className="institute-basic__toggle round"
          onClick={showDropdownHandler}
        >
          --- Please Select One ---
        </button>

        <div className="institute-basic__dropdown">
          <Input
            id="aided_institute"
            label={<span className="institute-basic__radio-label">Aided</span>}
            labelClick={onClickDropdownHandler}
            type="radio"
            name="funding_status"
            value="aided"
            hidden
            onChange={inputChangeHandler}
          />

          <Input
            id="unaided_institute"
            label={
              <span className="institute-basic__radio-label">Un-Aided</span>
            }
            labelClick={onClickDropdownHandler}
            type="radio"
            name="funding_status"
            value="un-aided"
            hidden
            onChange={inputChangeHandler}
          />
        </div>
      </div>

      <div className="institute-basic__form-group">
        <Input
          id="institute_head"
          label={
            <span className="institute-basic__label">
              Name of the Principal
            </span>
          }
          type="text"
          name="institute_head"
          placeholder="Institute Head"
          required
          value={formData.institute_head}
          onChange={inputChangeHandler}
        />
      </div>

      <div className="institute-basic__form-group ">
        <label htmlFor="dropdown-toggle" className="institute-basic__label">
          Autonomy Status
        </label>

        <div className="institute-basic__radio">
          <label htmlFor="true" className="auto_check">
            Yes
          </label>
          <input
            type="radio"
            id="true"
            name="autonomy_status"
            value="true"
            onChange={inputChangeHandler}
          />
          <label htmlFor="false" className="auto_check">
            No
          </label>
          <input
            type="radio"
            id="false"
            name="autonomy_status"
            value="false"
            onChange={inputChangeHandler}
          />
        </div>
      </div>

      <div className="institute-basic__submit">
        <button type="submit" className="btn institute-basic__btn">
          Next
          <i className="fa-solid fa-arrow-right-long"></i>
        </button>
      </div>
    </form>
  );
};

export default InsBasicForm;
