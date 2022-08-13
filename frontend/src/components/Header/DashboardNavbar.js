import logo_1 from './../../assets/images/logo_1.png';
import logo_2 from './../../assets/images/logo_2.png';
import profile from './../../assets/images/profile.png';

const DashboardNavbar = (props) => {
  return (
    <div className="dashboard-nav">
      <div className="dashboard-nav__logo">
        <img
          src={logo_1}
          alt="Logo 1"
          className="dashboard-nav__logo-img"
        ></img>
        <img
          src={logo_2}
          alt="Logo 2"
          className="dashboard-nav__logo-img"
        ></img>
        <p className="dashboard-nav__text">Sugam Shiksha</p>
      </div>
      <div className="dashboard-nav__user">
        <label className="dashboard-nav__icon" htmlFor="dashboard-nav__toggle">
          <img src={profile} alt="User logo" />
        </label>
        <div className="dashboard-nav__name">Bob Smith</div>
        <input
          type="checkbox"
          id="dashboard-nav__toggle"
          className="dashboard-nav__input"
          hidden
        />
        <ul className="dashboard-nav__list">
          <li className="dashboard-nav__item">
            <a href="#myaccount" className="dashboard-nav__link">
              My Account
            </a>
          </li>
          <li className="dashboard-nav__item">
            <a href="#logout" className="dashboard-nav__link">
              Logout
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardNavbar;
