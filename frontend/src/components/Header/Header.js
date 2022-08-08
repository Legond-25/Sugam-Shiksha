import logo_1 from './../../assets/images/logo_1.png';
import logo_2 from './../../assets/images/logo_2.png';

const Header = (props) => {
  return (
    <div className="nav">
      <div className="nav__logo">
        <img src={logo_1} alt="Logo 1" className="nav__logo-img"></img>
        <img src={logo_2} alt="Logo 2" className="nav__logo-img"></img>
      </div>
      <ul className="nav__links">
        <li className="nav__item">
          <button className="nav__link">Home</button>
        </li>
        <li className="nav__item">
          <button className="nav__link">About Us</button>
        </li>
        <li className="nav__item">
          <button className="nav__link">Pricing</button>
        </li>
        <li className="nav__item">
          <button className="nav__link">Features</button>
        </li>
        <li className="nav__item">
          <button className="nav__link">Contact</button>
        </li>
      </ul>
      <div className="nav__cta">
        <button className="nav__login-btn btn">Login</button>
      </div>
    </div>
  );
};

export default Header;
