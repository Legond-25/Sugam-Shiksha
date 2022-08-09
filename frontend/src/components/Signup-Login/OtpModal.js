import React, {
  useState,
  useEffect,
  useReducer,
  useRef,
  useCallback,
} from 'react';
import Modal from '../UI/Modal/Modal';
import validator from 'validator';
import { sendPostRequest } from './../../utils/sendHttp';
import Input from './../UI/Input/Input';

const emailReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: validator.isEmail(state.value) };
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: validator.isEmail(state.value) };
  }
  return { value: '', isValid: false };
};

const OtpModal = (props) => {
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: '',
    isValid: null,
  });

  const emailRef = useRef();

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: 'USER_INPUT', val: event.target.value });
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: 'INPUT_BLUR' });
  };

  const { isValid: emailIsValid } = emailState;

  const submitHandler = useCallback(
    async (event) => {
      event.preventDefault();
      setError(null);
      setSuccess(null);

      try {
        if (emailIsValid) {
          const data = {
            email: emailState.value,
          };
          const res = await sendPostRequest(
            'http://localhost:8080/api/v1/auth/forgotPassword',
            data
          );

          if (res.data.status === 'success') {
            setSuccess('Otp sent to email successfully');
          }
        } else if (!emailState.isValid) {
          emailRef.current.focus();
          setError('Please enter a valid email address');
        }
      } catch (err) {
        setError(err.response.data.message);
      }
    },
    [emailIsValid, emailState.isValid, emailState.value]
  );

  useEffect(() => {
    submitHandler();
  }, [submitHandler]);

  return (
    <Modal
      header="One Time Password"
      text="Enter your email and we will send you a code for you to login"
      show={props.onShow}
      close={props.onClose}
      icon="fa-solid fa-key"
    >
      <form className="modal__body--form" onSubmit={submitHandler}>
        <div className="modal__form--group">
          <Input
            ref={emailRef}
            id="emailOptional"
            label={
              <span className="material-icons modal__form--icon">email</span>
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

        {error && (
          <p className="modal__form--error">
            <i className="fa-solid fa-circle-exclamation"></i>
            {error}
          </p>
        )}

        {success && (
          <p className="modal__form--success">
            <i class="fa-solid fa-circle-check"></i>
            {success}
          </p>
        )}

        <div className="modal__footer">
          <button className="btn modal__btn modal__btn--submit" type="submit">
            Submit
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default OtpModal;
