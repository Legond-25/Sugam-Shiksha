import React, {
  useRef,
  useReducer,
  useState,
  useEffect,
  useContext,
} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import validator from 'validator';
import { sendPostRequest } from '../../utils/sendHttp';
import { showAlert } from '../../utils/alerts';

import Input from '../UI/Input/Input';
import AuthContext from '../../store/auth-context';

// Defined Reducers
const emailReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: validator.isEmail(state.value) };
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: validator.isEmail(state.value) };
  }
  return { value: '', isValid: false };
};
const passwordReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.trim().length > 8 };
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.trim().length > 8 };
  }
  return { value: '', isValid: false };
};
const confirmPasswordReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.trim().length > 8 };
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.trim().length > 8 };
  }
  return { value: '', isValid: false };
};

const SignupForm = () => {
  // Declared AuthContext
  const authCtx = useContext(AuthContext);

  // Declared Navigate
  const navigate = useNavigate();

  // Declared Refs
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const confirmPasswordInputRef = useRef();
  const firstnameInputRef = useRef();
  const lastnameInputRef = useRef();

  // Declared States
  const [formIsValid, setFormIsValid] = useState(false);
  const [error, setError] = useState(null);
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [isPassVisible, setPassVisible] = useState('visibility_off');
  const [isConfirmPassVisible, setConfirmPassVisible] =
    useState('visibility_off');

  // Declared Reducers
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: '',
    isValid: null,
  });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: '',
    isValid: null,
  });
  const [confirmPasswordState, dispatchConfirmPassword] = useReducer(
    confirmPasswordReducer,
    {
      value: '',
      isValid: null,
    }
  );

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;
  const { isValid: confirmPasswordIsValid } = confirmPasswordState;

  // Declared Effects
  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(emailIsValid && passwordIsValid && confirmPasswordIsValid);
    }, 500);

    return () => {
      clearTimeout(identifier);
    };
  }, [emailIsValid, passwordIsValid, confirmPasswordIsValid]);

  // Defined Change Handlers
  const emailChangeHandler = (event) => {
    dispatchEmail({ type: 'USER_INPUT', val: event.target.value });
  };
  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: 'USER_INPUT', val: event.target.value });
  };
  const confirmPasswordChangeHandler = (event) => {
    dispatchConfirmPassword({ type: 'USER_INPUT', val: event.target.value });
  };
  const firstnameChangeHandler = (event) => {
    setFirstname(event.target.value);
  };
  const lastnameChangeHandler = (event) => {
    setLastname(event.target.value);
  };

  // Defined Validate Handlers
  const validateEmailHandler = () => {
    dispatchEmail({ type: 'INPUT_BLUR' });
  };
  const validatePasswordHandler = () => {
    dispatchPassword({ type: 'INPUT_BLUR' });
  };
  const validateConfirmPasswordHandler = () => {
    dispatchConfirmPassword({ type: 'INPUT_BLUR' });
  };

  // Defined Submit Handlers
  const submitHandler = async (event) => {
    event.preventDefault();
    const userType = authCtx.userType;
    // setIsLoading(true);
    setError(null);
    try {
      if (formIsValid) {
        const data = {
          firstName: firstname,
          lastName: lastname,
          email: emailState.value,
          user: userType,
          password: passwordState.value,
          passwordConfirm: confirmPasswordState.value,
        };
        const res = await sendPostRequest(
          'http://localhost:8080/api/v1/auth/signup',
          data
        );

        if (res.data.status === 'success') {
          showAlert('success', 'User registered successfully');
          console.log(res);
        }
      } else if (!emailIsValid) {
        emailInputRef.current.focus();
        setError('Please enter a valid email address');
      } else if (!passwordIsValid) {
        passwordInputRef.current.focus();
        setError('Length of password must be greater than 8');
      } else {
        confirmPasswordInputRef.current.focus();
        setError('Length of password must be greater than 8');
      }
    } catch (err) {
      showAlert('error', err.response.data.message);
    }

    // setIsLoading(false);
  };

  // Declared Visible Handlers
  const passwordVisibleHandler = (event) => {
    if (event.target.innerHTML === 'visibility_off') {
      event.target.parentElement.children[1].type = 'string';
      setPassVisible('visibility');
    } else {
      event.target.parentElement.children[1].type = 'password';
      setPassVisible('visibility_off');
    }
  };
  const confirmPasswordVisibleHandler = (event) => {
    if (event.target.innerHTML === 'visibility_off') {
      event.target.parentElement.children[4].type = 'string';
      setConfirmPassVisible('visibility');
    } else {
      event.target.parentElement.children[4].type = 'password';
      setConfirmPassVisible('visibility_off');
    }
  };

  return (
    <form className="signup__form" onSubmit={submitHandler}>
      <div className="signup__form--header">
        <p>Register</p>
      </div>

      <div className="signup__form--body">
        <div className="signup__form--group">
          <Input
            ref={firstnameInputRef}
            id="firstname"
            label={
              <span className="material-icons signup__form--icon">person</span>
            }
            type="text"
            name="firstname"
            placeholder="Firstname"
            required
            value={firstname}
            onChange={firstnameChangeHandler}
          />

          <Input
            ref={lastnameInputRef}
            id="lastname"
            label=""
            type="text"
            name="lastname"
            placeholder="Lastname"
            required
            value={lastname}
            onChange={lastnameChangeHandler}
          />
        </div>

        <div className="signup__form--group">
          <Input
            ref={emailInputRef}
            id="email"
            label={
              <span className="material-icons signup__form--icon">email</span>
            }
            type="email"
            name="email"
            placeholder="Email"
            required
            isValid={emailIsValid}
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>

        <div className="signup__form--group">
          <Input
            ref={passwordInputRef}
            id="password"
            label={
              <span className="material-icons signup__form--icon">lock</span>
            }
            type="password"
            name="password"
            placeholder="Password"
            required
            isValid={passwordIsValid}
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
          <span
            className="material-icons signup__form--eye-icon"
            onClick={passwordVisibleHandler}
          >
            {isPassVisible}
          </span>

          <Input
            ref={confirmPasswordInputRef}
            id="passwordConfirm"
            label=""
            type="password"
            name="passwordConfirm"
            placeholder="Confirm Password"
            required
            isValid={confirmPasswordIsValid}
            value={confirmPasswordState.value}
            onChange={confirmPasswordChangeHandler}
            onBlur={validateConfirmPasswordHandler}
          />
          <span
            className="material-icons signup__form--eye-icon"
            onClick={confirmPasswordVisibleHandler}
          >
            {isConfirmPassVisible}
          </span>
        </div>
      </div>

      <div className="signup__form--footer">
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
        {error && (
          <p className="signup__form--error">
            <i className="fa-solid fa-circle-exclamation"></i>
            {error}
          </p>
        )}
        <button className="signup--btn btn" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default SignupForm;
