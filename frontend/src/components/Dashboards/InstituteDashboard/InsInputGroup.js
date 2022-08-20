import { useState } from 'react';

import { showAlert } from '../../../utils/alerts';
import { sendPatchRequest } from '../../../utils/sendHttp';

import Input from '../../UI/Input/Input';

const InsInputGroup = (props) => {
  const [name, setName] = useState('');
  const [hod, setHod] = useState('');

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const hodChangeHandler = (event) => {
    setHod(event.target.value);
  };

  const submitHandler = async (event) => {
    try {
      event.preventDefault();
      console.log(event);

      const data = {
        nameOfDepartment: name,
        nameOfHod: hod,
      };

      const res = await sendPatchRequest(
        `/api/v1/institute/${props.instituteId}/addDepartment`,
        data
      );

      if (res.data.status === 'success') {
        showAlert('success', 'Department added successfully');
      }
    } catch (err) {
      showAlert('error', err.response.data.message);
    }
  };

  return (
    <form className="institute-detail__input-group" onSubmit={submitHandler}>
      <div className="institute-detail__input">
        <Input
          id="name_of_department"
          label={
            <span className="institute-detail__label">Name of Department</span>
          }
          type="text"
          name="name_of_department"
          placeholder="Name of Department"
          required
          onChange={nameChangeHandler}
          value={name}
        />
      </div>

      <div className="institute-detail__input">
        <Input
          id="name_of_hod"
          label={<span className="institute-detail__label">Name of HOD</span>}
          type="text"
          name="name_of_hod"
          placeholder="Name of HOD"
          required
          onChange={hodChangeHandler}
          value={hod}
        />
      </div>

      <div className="institute-detail__input-submit">
        <button className="btn institute-detail__input-btn" type="submit">
          Add Department
        </button>
      </div>
    </form>
  );
};

export default InsInputGroup;
