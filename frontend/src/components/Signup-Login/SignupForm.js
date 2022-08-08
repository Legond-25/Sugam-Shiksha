const SignupForm = (props) => {
  return (
    <form className="signup__form" action="#">
      <div className="signup__form--header">
        <p>Register</p>
      </div>

      <div className="signup__form--body">
        <div className="signup__form--group">
          <label htmlFor="firstname" className="signup__form--label">
            <span className="material-icons signup__form--icon">person</span>
          </label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            className="signup__form--input"
            placeholder="Firstname"
          ></input>

          <input
            type="text"
            id="lastname"
            name="lastname"
            className="signup__form--input"
            placeholder="Lastname"
          ></input>
        </div>

        <div className="signup__form--group">
          <label htmlFor="email" className="signup__form--label">
            <span className="material-icons signup__form--icon">email</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="signup__form--input"
            placeholder="Email"
          ></input>
        </div>

        <div className="signup__form--group">
          <label htmlFor="password" className="signup__form--label">
            <span className="material-icons signup__form--icon">lock</span>
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="signup__form--input"
            placeholder="Password"
          ></input>
          <span className="material-icons signup__form--eye-icon">
            visibility_off
          </span>

          <input
            type="password"
            id="passwordConfirm"
            name="passwordConfirm"
            className="signup__form--input"
            placeholder="Confirm Password"
          ></input>
          <span className="material-icons signup__form--eye-icon">
            visibility_off
          </span>
        </div>
      </div>

      <div className="signup__form--footer">
        <p>
          Already have an account? <a href="#login">Login</a>
        </p>
        <button className="signup--btn btn" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default SignupForm;
