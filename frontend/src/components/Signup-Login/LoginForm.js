import React, {
  useState,
  useEffect,
  useReducer,
  useRef,
  useCallback,
} from 'react';

import validator from 'validator';
import { sendPostRequest } from '../../utils/sendHttp';
import { showAlert } from '../../utils/alerts';
import Input from './../UI/Input/Input';
import ForgotPassword from './ForgotPassword';
import OtpModal from './OtpModal';

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

const LoginForm = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);
  const [showForgot, setShowForgot] = useState(false);
  const [showOtp, setShowOtp] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: '',
    isValid: null,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: '',
    isValid: null,
  });

  // const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isPassVisible, setPassVisible] = useState('visibility_off');

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);

    return () => {
      clearTimeout(identifier);
    };
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: 'USER_INPUT', val: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: 'USER_INPUT', val: event.target.value });
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: 'INPUT_BLUR' });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: 'INPUT_BLUR' });
  };

  const passwordVisibleHandler = (event) => {
    if (event.target.innerHTML === 'visibility_off') {
      event.target.parentElement.children[1].type = 'string';
      setPassVisible('visibility');
    } else {
      event.target.parentElement.children[1].type = 'password';
      setPassVisible('visibility_off');
    }
  };

  const submitHandler = useCallback(
    async (event) => {
      event.preventDefault();
      // setIsLoading(true);
      setError(null);
      try {
        if (formIsValid) {
          const data = {
            email: emailState.value,
            password: passwordState.value,
          };
          const res = await sendPostRequest(
            'http://localhost:8080/api/v1/auth/login',
            data
          );

          if (res.data.status === 'success') {
            showAlert('success', 'Logged in successfully');
          }
        } else if (!emailIsValid) {
          emailInputRef.current.focus();
          setError('Please enter a valid email address');
        } else {
          passwordInputRef.current.focus();
          setError('Length of password must be greater than 8');
        }
      } catch (err) {
        showAlert('error', err.response.data.message);
      }

      // setIsLoading(false);
    },
    [emailIsValid, emailState.value, formIsValid, passwordState.value]
  );

  const showForgotModalHandler = (event) => {
    event.preventDefault();
    setShowForgot(true);
  };

  const showOtpModalHandler = (event) => {
    event.preventDefault();
    setShowOtp(true);
  };

  return (
    <>
      <form className="login__form" onSubmit={submitHandler}>
        <div className="login__form--header">
          <p>Login</p>
        </div>

        <div className="login__form--body">
          <div className="login__form--group">
            <Input
              ref={emailInputRef}
              id="email"
              label={
                <span className="material-icons login__form--icon">email</span>
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

          <div className="login__form--group">
            <Input
              ref={passwordInputRef}
              id="password"
              label={
                <span className="material-icons login__form--icon">lock</span>
              }
              type="password"
              name="password"
              placeholder="Password"
              isValid={passwordIsValid}
              value={passwordState.value}
              onChange={passwordChangeHandler}
              onBlur={validatePasswordHandler}
            />
            <span
              className="material-icons login__form--eye-icon"
              onClick={passwordVisibleHandler}
            >
              {isPassVisible}
            </span>
          </div>

          {error && (
            <p className="login__form--error">
              <i className="fa-solid fa-circle-exclamation"></i>
              {error}
            </p>
          )}
        </div>

        <div className="login__form--footer">
          <p>
            Don't have an account? <button type="button">Signup</button>
          </p>
          <p>
            <a href="#modal" onClick={showForgotModalHandler}>
              Forgot Password?
            </a>
          </p>
          <button className="login--btn btn" type="submit">
            Submit
          </button>
          <div className="login__form--alt">
            <p>or</p>
            <a href="#google">
              <i className="fa-brands fa-google"></i>
            </a>
            <a href="#modal" onClick={showOtpModalHandler}>
              <i className="fa-solid fa-envelope"></i>
            </a>
          </div>
        </div>
      </form>
      <ForgotPassword
        onShow={showForgot}
        onClose={() => setShowForgot(false)}
      />
      <OtpModal onShow={showOtp} onClose={() => setShowOtp(false)} />
    </>
  );
};

export default LoginForm;
