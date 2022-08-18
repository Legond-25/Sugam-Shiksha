import { useState } from 'react';

import Input from '../../UI/Input/Input';

import { sendPatchRequest } from '../../../utils/sendHttp';
import { showAlert } from '../../../utils/alerts';

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

const UniBasicForm = (props) => {
  const [formData, setFormData] = useState({
    university_name: '',
    university_code: '',
    university_type: '',
    university_address: '',
    university_head: '',
    no_affiliated_institutes: '',
  });

  const inputChangeHandler = (event) => {
    event.preventDefault();

    const value = event.target.value;
    const name = event.target.name;

    setFormData((prevState) => {
      if (name === 'university_name') {
        return {
          university_name: value,
          university_code: prevState.university_code,
          university_type: prevState.university_type,
          university_address: prevState.university_address,
          university_head: prevState.university_head,
          no_affiliated_institutes: prevState.no_affiliated_institutes,
        };
      } else if (name === 'university_code') {
        return {
          university_name: prevState.university_name,
          university_code: value,
          university_type: prevState.university_type,
          university_address: prevState.university_address,
          university_head: prevState.university_head,
          no_affiliated_institutes: prevState.no_affiliated_institutes,
        };
      } else if (name === 'university_type') {
        return {
          university_name: prevState.university_name,
          university_code: prevState.university_code,
          university_type: value,
          university_address: prevState.university_address,
          university_head: prevState.university_head,
          no_affiliated_institutes: prevState.no_affiliated_institutes,
        };
      } else if (name === 'university_address') {
        return {
          university_name: prevState.university_name,
          university_code: prevState.university_code,
          university_type: prevState.university_type,
          university_address: value,
          university_head: prevState.university_head,
          no_affiliated_institutes: prevState.no_affiliated_institutes,
        };
      } else if (name === 'university_head') {
        return {
          university_name: prevState.university_name,
          university_code: prevState.university_code,
          university_type: prevState.university_type,
          university_address: prevState.university_address,
          university_head: value,
          no_affiliated_institutes: prevState.no_affiliated_institutes,
        };
      } else {
        return {
          university_name: prevState.university_name,
          university_code: prevState.university_code,
          university_type: prevState.university_type,
          university_address: prevState.university_address,
          university_head: prevState.university_head,
          no_affiliated_institutes: value,
        };
      }
    });
  };

  const submitHandler = async (event) => {
    try {
      event.preventDefault();

      const data = {
        universityName: formData.university_name,
        universityCode: formData.university_code,
        universityType: formData.university_type,
        universityAddress: formData.university_address,
        universityHead: formData.university_head,
        noAffiliatedInstitutes: formData.no_affiliated_institutes,
        formFilled: {
          basic: true,
        },
      };

      const res = await sendPatchRequest(
        `/api/v1/university/${props.id}`,
        data
      );

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
    <form className="university-basic__form" onSubmit={submitHandler}>
      <div className="university-basic__form-group">
        <Input
          id="university_name"
          label={
            <span className="university-basic__label">University Name</span>
          }
          type="text"
          name="university_name"
          placeholder="University Name"
          required
          value={formData.university_name}
          onChange={inputChangeHandler}
        />
      </div>

      <div className="university-basic__form-group">
        <Input
          id="university_code"
          label={
            <span className="university-basic__label">University Code</span>
          }
          type="text"
          name="university_code"
          placeholder="University Code"
          required
          value={formData.university_code}
          onChange={inputChangeHandler}
        />
      </div>

      <div className="university-basic__form-group">
        <label htmlFor="dropdown-toggle" className="university-basic__label">
          University Type
        </label>
        <button
          type="button"
          id="dropdown-toggle"
          className="university-basic__toggle round"
          onClick={showDropdownHandler}
        >
          --- Please Select One ---
        </button>

        <div className="university-basic__dropdown">
          <Input
            id="central_university"
            label={
              <span className="university-basic__radio-label">
                Central University
              </span>
            }
            labelClick={onClickDropdownHandler}
            type="radio"
            name="university_type"
            value="Central University"
            hidden
            onChange={inputChangeHandler}
          />

          <Input
            id="state_university"
            label={
              <span className="university-basic__radio-label">
                State University
              </span>
            }
            labelClick={onClickDropdownHandler}
            type="radio"
            name="university_type"
            value="State University"
            hidden
            onChange={inputChangeHandler}
          />

          <Input
            id="deemed_university"
            label={
              <span className="university-basic__radio-label">
                Deemed University
              </span>
            }
            labelClick={onClickDropdownHandler}
            type="radio"
            name="university_type"
            value="Deemed University"
            hidden
            onChange={inputChangeHandler}
          />

          <Input
            id="institutes_under_national_importance"
            label={
              <span className="university-basic__radio-label">
                Institutes Under National Importance
              </span>
            }
            labelClick={onClickDropdownHandler}
            type="radio"
            name="university_type"
            value="Institutes Under National Importance"
            hidden
            onChange={inputChangeHandler}
          />
        </div>
      </div>

      <div className="university-basic__form-group">
        <Input
          id="university_address"
          label={
            <span className="university-basic__label">University Address</span>
          }
          type="text"
          name="university_address"
          placeholder="University Address"
          required
          value={formData.university_address}
          onChange={inputChangeHandler}
        />
      </div>

      <div className="university-basic__form-group">
        <Input
          id="university_head"
          label={
            <span className="university-basic__label">University Head</span>
          }
          type="text"
          name="university_head"
          placeholder="University Head"
          required
          value={formData.university_head}
          onChange={inputChangeHandler}
        />
      </div>

      <div className="university-basic__form-group">
        <Input
          id="no_affiliated_institutes"
          label={
            <span className="university-basic__label">
              No. of Affiliated Institutes
            </span>
          }
          type="number"
          name="no_affiliated_institutes"
          placeholder="No. of Affiliated Institutes"
          required
          value={formData.no_affiliated_institutes}
          onChange={inputChangeHandler}
        />
      </div>

      <div className="university-basic__submit">
        <button type="submit" className="btn university-basic__btn">
          Next
          <i className="fa-solid fa-arrow-right-long"></i>
        </button>
      </div>
    </form>
  );
};

export default UniBasicForm;
