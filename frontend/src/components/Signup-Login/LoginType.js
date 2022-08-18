import { useContext } from 'react';

import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header';

import student from '../../assets/images/student.png';
import institute from '../../assets/images/institute.png';
import industry from '../../assets/images/industry.png';
import aicte from '../../assets/images/AICTE.png';
import university from '../../assets/images/university.png';

import studentGif from '../../assets/gifs/student.gif';
import instituteGif from '../../assets/gifs/institute.gif';
import industryGif from '../../assets/gifs/industry.gif';
import aicteGif from '../../assets/gifs/aicte.gif';
import universityGif from '../../assets/gifs/university.gif';

import { sendPostRequest } from '../../utils/sendHttp';
import { showAlert } from '../../utils/alerts';
import AuthContext from '../../store/auth-context';

const LoginType = (props) => {
  // Declared Context
  const authCtx = useContext(AuthContext);

  const navigate = useNavigate();

  const changeToGifHandler = (event) => {
    const value = event.target.alt;

    if (value === 'student') {
      event.currentTarget.src = studentGif;
    } else if (value === 'institute') {
      event.currentTarget.src = instituteGif;
    } else if (value === 'industry') {
      event.currentTarget.src = industryGif;
    } else if (value === 'university') {
      event.currentTarget.src = universityGif;
    } else {
      event.currentTarget.src = aicteGif;
    }
  };

  const changeToImageHandler = (event) => {
    const value = event.target.alt;

    if (value === 'student') {
      event.currentTarget.src = student;
    } else if (value === 'institute') {
      event.currentTarget.src = institute;
    } else if (value === 'industry') {
      event.currentTarget.src = industry;
    } else if (value === 'university') {
      event.currentTarget.src = university;
    } else {
      event.currentTarget.src = aicte;
    }
  };

  const submitHandler = async (event) => {
    try {
      event.preventDefault();

      const user = event.target.parentElement.nextSibling.id;

      const data = {
        user,
      };

      authCtx.loginUserType(user);

      const res = await sendPostRequest('/api/v1/auth/loginUserType', data);

      if (res.data.status === 'success') {
        showAlert('success', 'You can proceed towards login');
        navigate('/login');
      }
    } catch (err) {
      showAlert('error', err);
    }
  };

  return (
    <div>
      <Header />
      <form className="login-type__form">
        <div className="login-type__group login-type__group--1">
          <label className="login-type__label" htmlFor="student">
            <img
              src={student}
              alt="student"
              onMouseOver={changeToGifHandler}
              onMouseOut={changeToImageHandler}
              onClick={submitHandler}
            />
            <span onClick={submitHandler}>Student</span>
          </label>
          <input
            className="login-type__input"
            type="radio"
            name="user_type"
            id="student"
            hidden
          />
        </div>

        <div className="login-type__group login-type__group--2">
          <label className="login-type__label" htmlFor="institute">
            <img
              src={institute}
              alt="institute"
              onMouseOver={changeToGifHandler}
              onMouseOut={changeToImageHandler}
              onClick={submitHandler}
            />
            <span onClick={submitHandler}>Institute</span>
          </label>
          <input
            className="login-type__input"
            type="radio"
            name="user_type"
            id="institute"
            hidden
          />
        </div>

        <div className="login-type__group login-type__group--3">
          <label className="login-type__label" htmlFor="university">
            <img
              src={university}
              alt="university"
              onMouseOver={changeToGifHandler}
              onMouseOut={changeToImageHandler}
              onClick={submitHandler}
            />
            <span onClick={submitHandler}>University</span>
          </label>
          <input
            className="login-type__input"
            type="radio"
            name="user_type"
            id="university"
            hidden
          />
        </div>

        <div className="login-type__group login-type__group--4">
          <label className="login-type__label" htmlFor="industry">
            <img
              src={industry}
              alt="industry"
              onMouseOver={changeToGifHandler}
              onMouseOut={changeToImageHandler}
              onClick={submitHandler}
            />
            <span onClick={submitHandler}>Industry</span>
          </label>
          <input
            className="login-type__input"
            type="radio"
            name="user_type"
            id="industry"
            hidden
          />
        </div>

        <div className="login-type__group login-type__group--5">
          <label className="login-type__label" htmlFor="aicte">
            <img
              src={aicte}
              alt="aicte"
              onMouseOver={changeToGifHandler}
              onMouseOut={changeToImageHandler}
              onClick={submitHandler}
            />
            <span onClick={submitHandler}>AICTE</span>
          </label>
          <input
            className="login-type__input"
            type="radio"
            name="user_type"
            id="aicte"
            hidden
          />
        </div>
      </form>
    </div>
  );
};

export default LoginType;
