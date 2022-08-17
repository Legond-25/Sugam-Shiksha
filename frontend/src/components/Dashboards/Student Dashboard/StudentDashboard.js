import Card from './Card/Card';
import Category from './Category/Category';
import Sidebar from './../../Sidebar/Sidebar';
import DashboardNavbar from './../../Header/DashboardNavbar';

import about_1 from '../../../assets/images/about-banner.jpg';
import about_2 from '../../../assets/images/about-abs-1.jpg';
import about_3 from '../../../assets/images/about-abs-2.jpg';

import about_icon_1 from '../../../assets/images/about-icon-1.png';
import about_icon_2 from '../../../assets/images/about-icon-2.png';
import about_icon_3 from '../../../assets/images/about-icon-3.png';

import hero_1 from '../../../assets/images/p-2.jpeg';
import hero_2 from '../../../assets/images/p-1.jpeg';
import hero_3 from '../../../assets/images/p-3.jpeg';

const position = {
  position: 'relative',
};

const StudentDashboard = (props) => {
  const icons = {
    Reports: 'fa-solid fa-chart-pie',
    Schedule: 'fa-solid fa-calendar',
    Target: 'fa-solid fa-bullseye',
    Watchlist: 'fa-solid fa-bookmark',
  };

  const disabled = [''];
  const enabled = [''];

  return (
    <div style={position}>
      <Sidebar icons={icons} disabled={disabled} enabled={enabled} />
      <DashboardNavbar />
      <section className="section-hero">
        <div className="section-hero__content">
          <h2 className="heading-secondary">Better Learning Future With Us</h2>
          <h3 className="heading-tertiary">
            Your Present Can Help Your Future
          </h3>
          <p className="item-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmoded
            tempor incididunt dolore magna aliqua.
          </p>
          <a href="#started" className="btn section-hero__btn--cta">
            Get Started Today
          </a>
        </div>

        <figure className="hero-banner">
          <img
            src={hero_1}
            loading="lazy"
            alt="hero-1"
            className="abs-img abs-img-1"
          />
          <img
            src={hero_2}
            loading="lazy"
            className="abs-img abs-img-2"
            alt="hero-2"
          />
          <img
            src={hero_3}
            loading="lazy"
            className="abs-img abs-img-3"
            alt="hero-3"
          />
        </figure>
      </section>

      <section className="section-category">
        <div className="section-category__header">
          <h2 className="heading-secondary">Course Categories</h2>
          <h3 className="heading-tertiary">Popular Topics To Learn</h3>
        </div>
        <div className="section-category__content">
          <Category />
        </div>
      </section>

      <section className="section-about">
        <div>
          <figure className="section-about__banner">
            <img
              src={about_1}
              width="450"
              height="590"
              loading="lazy"
              alt="about banner"
              className="w-100 section-about__img"
            />
            <img
              src={about_2}
              width="188"
              height="242"
              loading="lazy"
              aria-hidden="true"
              alt="about banner"
              className="abs-img abs-img-1"
            />
            <img
              src={about_3}
              width="150"
              height="200"
              loading="lazy"
              aria-hidden="true"
              alt="about banner"
              className="abs-img abs-img-2"
            />
          </figure>
          <div className="section-about__content">
            <div className="section-about__header">
              <h2 className="heading-secondary">Who we are</h2>
              <h3 className="heading-tertiary">We Offer The Best Career</h3>
              <ul className="section-about__list">
                <li className="section-about__item">
                  <div className="item-icon item-icon-1">
                    <img
                      src={about_icon_1}
                      width="30"
                      height="30"
                      loading="lazy"
                      aria-hidden="true"
                      alt="icon-1"
                    />
                  </div>
                  <div>
                    <h3 className="h3 item-title">
                      Industry Expert Instructor
                    </h3>
                    <p className="item-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      eiusmoded tempor incididunt dolore magna aliqua.
                    </p>
                  </div>
                </li>
                <li className="section-about__item">
                  <div className="item-icon item-icon-2">
                    <img
                      src={about_icon_2}
                      width="30"
                      height="30"
                      loading="lazy"
                      aria-hidden="true"
                      alt="icon-2"
                    />
                  </div>
                  <div>
                    <h3 className="h3 item-title">Up-to-Date Course Content</h3>
                    <p className="item-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      eiusmoded tempor incididunt dolore magna aliqua.
                    </p>
                  </div>
                </li>

                <li className="section-about__item">
                  <div className="item-icon item-icon-3">
                    <img
                      src={about_icon_3}
                      width="30"
                      height="30"
                      loading="lazy"
                      aria-hidden="true"
                      alt="icon-3"
                    />
                  </div>
                  <div>
                    <h3 className="h3 item-title">Trending Courses</h3>
                    <p className="item-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      eiusmoded tempor incididunt dolore magna aliqua.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <a href="#about-us" className="btn section-about__btn--cta">
              Know About Us
            </a>
          </div>
        </div>
      </section>

      <section className="section-courses">
        <div className="section-courses__header">
          <h2 className="heading-secondary">Popular courses</h2>
          <h3 className="heading-tertiary">Our Popular Courses</h3>
        </div>
        <div className="section-courses__content">
          <Card />
        </div>
        <div className="section__footer">
          <button className="btn section-courses__btn--cta">
            View All Courses
          </button>
        </div>
      </section>
    </div>
  );
};

export default StudentDashboard;
