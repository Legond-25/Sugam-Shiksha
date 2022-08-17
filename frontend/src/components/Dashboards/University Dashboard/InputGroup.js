import { useState } from 'react';

import Input from '../../UI/Input/Input';
import DepartmentModal from './DepartmentModal';

const InputGroup = (props) => {
  const [departmentModal, setDepartmentModal] = useState(false);

  return (
    <form className="university-detail__input-group">
      <div className="university-detail__input">
        <Input
          id="category_of_department"
          label={
            <span className="university-detail__label">
              Category of Department
            </span>
          }
          type="text"
          name="category_of_department"
          placeholder="Category of Department"
          required
        />
      </div>

      <div className="university-detail__input">
        <Input
          id="name_of_department"
          label={
            <span className="university-detail__label">Name of Department</span>
          }
          type="text"
          name="name_of_department"
          placeholder="Name of Department"
          required
        />
      </div>

      <div className="university-detail__input">
        <Input
          id="name_of_hod"
          label={<span className="university-detail__label">Name of HOD</span>}
          type="text"
          name="name_of_hod"
          placeholder="Name of HOD"
          required
        />
      </div>

      <div className="university-detail__input-submit">
        <button
          className="btn university-detail__input-btn"
          type="submit"
          onClick={() => setDepartmentModal(true)}
        >
          Add Department
        </button>
      </div>

      <DepartmentModal
        onShow={departmentModal}
        onClose={() => setDepartmentModal(false)}
      ></DepartmentModal>
    </form>
  );
};

export default InputGroup;
