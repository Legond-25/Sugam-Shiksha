import { useState } from 'react';
import Input from '../../UI/Input/Input';
import UniInputGroup from './UniInputGroup';

const UniDetailForm = (props) => {
  const [noOfDepartments, setNoOfDepartments] = useState(0);
  const [inputList, setInputList] = useState([]);

  const createInputHandler = (event) => {
    for (let i = 1; i <= noOfDepartments; i++) {
      setInputList((prevInputList) => {
        return [
          ...prevInputList,
          <UniInputGroup
            key={i}
            userId={props.id}
            setFormFilled={props.setFormFilled}
            uniName={props.name}
          />,
        ];
      });
    }
  };

  const departmentChangeHandler = (event) => {
    setInputList([]);
    setNoOfDepartments(event.target.value);
  };

  return (
    <div className="university-detail__form">
      <div className="university-detail__form-group">
        <Input
          id="no_of_departments"
          label={
            <span className="university-detail__label">No. of Departments</span>
          }
          type="number"
          name="no_of_departments"
          placeholder="No. of Departments"
          required
          onChange={departmentChangeHandler}
          value={noOfDepartments}
          min="0"
        />

        <button
          className="university-detail__enter"
          type="button"
          onClick={createInputHandler}
        >
          <i className="fa-solid fa-circle-plus"></i>
        </button>
      </div>

      {inputList.map((inputGroup) => {
        return inputGroup;
      })}

      <div className="university-detail__submit">
        <button type="button" className="btn university-detail__btn">
          Submit
        </button>
      </div>
    </div>
  );
};

export default UniDetailForm;
