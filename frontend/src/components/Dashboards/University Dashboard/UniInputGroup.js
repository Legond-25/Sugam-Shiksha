import { useEffect, useState, useRef, useReducer } from 'react';
import { showAlert } from '../../../utils/alerts';

import Input from '../../UI/Input/Input';
import DepartmentModal from './DepartmentModal';

// Defined Reducers
const categoryReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: state.value.trim().length !== 0 };
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.trim().length !== 0 };
  }
  return { value: '', isValid: false };
};
const nameReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.trim().length !== 0 };
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.trim().length !== 0 };
  }
  return { value: '', isValid: false };
};
const hodReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.trim().length !== 0 };
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.trim().length !== 0 };
  }
  return { value: '', isValid: false };
};

const InputGroup = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);
  const [departmentModal, setDepartmentModal] = useState(false);

  // Declared Reducers
  const [categoryState, dispatchCategory] = useReducer(categoryReducer, {
    value: '',
    isValid: null,
  });
  const [nameState, dispatchName] = useReducer(nameReducer, {
    value: '',
    isValid: null,
  });
  const [hodState, dispatchHod] = useReducer(hodReducer, {
    value: '',
    isValid: null,
  });

  const { isValid: categoryIsValid } = categoryState;
  const { isValid: nameIsValid } = nameState;
  const { isValid: hodIsValid } = hodState;

  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(categoryIsValid && nameIsValid && hodIsValid);
    }, 500);

    return () => {
      clearTimeout(identifier);
    };
  }, [categoryIsValid, nameIsValid, hodIsValid]);

  // Defined useRefs
  const departmentCategoryRef = useRef();
  const departmentNameRef = useRef();
  const departmentHodRef = useRef();

  // Defined Change Handlers
  const categoryChangeHandler = (event) => {
    dispatchCategory({ type: 'USER_INPUT', val: event.target.value });
  };
  const nameChangeHandler = (event) => {
    dispatchName({ type: 'USER_INPUT', val: event.target.value });
  };
  const hodChangeHandler = (event) => {
    dispatchHod({ type: 'USER_INPUT', val: event.target.value });
  };

  const validateCategoryHandler = () => {
    dispatchCategory({ type: 'INPUT_BLUR' });
  };
  const validateNameHandler = () => {
    dispatchName({ type: 'INPUT_BLUR' });
  };
  const validateHodHandler = () => {
    dispatchHod({ type: 'INPUT_BLUR' });
  };

  const formFilledHandler = () => {
    if (formIsValid) {
      setDepartmentModal(true);
    } else {
      showAlert('error', 'Please enter department details');
    }
  };

  return (
    <form className="university-detail__input-group">
      <div className="university-detail__input">
        <Input
          ref={departmentCategoryRef}
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
          isValid={categoryIsValid}
          value={categoryState.value}
          onChange={categoryChangeHandler}
          onBlur={validateCategoryHandler}
        />
      </div>

      <div className="university-detail__input">
        <Input
          ref={departmentNameRef}
          id="name_of_department"
          label={
            <span className="university-detail__label">Name of Department</span>
          }
          type="text"
          name="name_of_department"
          placeholder="Name of Department"
          required
          isValid={nameIsValid}
          value={nameState.value}
          onChange={nameChangeHandler}
          onBlur={validateNameHandler}
        />
      </div>

      <div className="university-detail__input">
        <Input
          ref={departmentHodRef}
          id="name_of_hod"
          label={<span className="university-detail__label">Name of HOD</span>}
          type="text"
          name="name_of_hod"
          placeholder="Name of HOD"
          required
          isValid={hodIsValid}
          value={hodState.value}
          onChange={hodChangeHandler}
          onBlur={validateHodHandler}
        />
      </div>

      <div className="university-detail__input-submit">
        <button
          className="btn university-detail__input-btn"
          type="button"
          onClick={formFilledHandler}
        >
          Add Department
        </button>
      </div>

      <DepartmentModal
        onShow={departmentModal}
        onClose={() => setDepartmentModal(false)}
        category={categoryState.value}
        name={nameState.value}
        hod={hodState.value}
        userId={props.userId}
        setFormFilled={props.setFormFilled}
      ></DepartmentModal>
    </form>
  );
};

export default InputGroup;
