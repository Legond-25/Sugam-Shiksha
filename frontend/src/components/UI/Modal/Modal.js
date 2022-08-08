import React, {
  useState,
  useEffect,
  useReducer,
  useRef,
  useCallback,
} from 'react';
import validator from 'validator';
import { sendPostRequest } from './../../../utils/sendHttp';
import { showAlert } from './../../../utils/alerts';
import Input from './../Input/Input';

const emailReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: validator.isEmail(state.value) };
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: validator.isEmail(state.value) };
  }
  return { value: '', isValid: false };
};

const Modal = (props) => {
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

      try {
        if (emailIsValid) {
          const data = {
            email: emailState.value,
          };
          const res = await sendPostRequest(props.url, data);

          if (res.data.status === 'success') {
            showAlert(
              'success',
              'Password reset link sent to email successfully'
            );
          }
        } else if (!emailState.isValid) {
          emailRef.current.focus();
          setError('Please enter a valid email address');
        }
      } catch (err) {
        showAlert('error', err.response.data.message);
      }
    },
    [emailIsValid, emailState.isValid, props.url, emailState.value]
  );

  useEffect(() => {
    submitHandler();
  }, [submitHandler]);

  return (
    <div className="modal" id="modal">
      <div className="modal__content">
        <div className="modal__header">
          <div>
            <p className="modal__header--heading">{props.header}</p>
            <p className="modal__header--text">{props.text}</p>
          </div>
          <a href="#login" className="modal__close">
            &times;
          </a>
        </div>
        <div className="modal__body">
          <form className="modal__body--form" onSubmit={submitHandler}>
            <div className="modal__form--group">
              <Input
                ref={emailRef}
                id="emailOptional"
                label={
                  <span className="material-icons modal__form--icon">
                    email
                  </span>
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

            <div className="modal__footer">
              <button
                className="btn modal__btn modal__btn--submit"
                type="submit"
              >
                Submit
              </button>

              <button
                className="btn modal__btn modal__btn--close modal__close"
                type="button"
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
