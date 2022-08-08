import Header from '../Header/Header';
import SignupForm from './SignupForm';

const Signup = (props) => {
  return (
    <div className="signup">
      <Header />
      <div className="signup__content">
        <div className="signup__box"></div>
      </div>
      <SignupForm />
    </div>
  );
};

export default Signup;
