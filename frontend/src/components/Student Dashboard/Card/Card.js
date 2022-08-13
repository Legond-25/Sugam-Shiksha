import machineImg from './../../../assets/images/Deep Learning.jpeg';

const Card = (props) => {
  return (
    <div className="card">
      <figure className="card-banner">
        <img
          src={machineImg}
          loading="lazy"
          alt="Card cover"
          className="img-cover"
          width="370px"
          height="270px"
        />
      </figure>
      <div className="card-actions">
        <span className="badge">Intermediate</span>
        <button
          className="wishlist-btn"
          aria-label="Add to whishlist"
          data-whish-btn
        >
          <i className="fa-solid fa-heart"></i>
        </button>
      </div>

      <div className="card-content">
        <ul className="card-meta-list">
          <li className="card-meta-item">
            <i className="fa-solid fa-file"></i>
            <span className="card-meta-text">35 Lessons</span>
          </li>
          <li className="card-meta-item">
            <i className="fa-regular fa-clock"></i>
            <time dateTime="PT18H15M44S" className="card-meta-text">
              18h 15m 44s
            </time>
          </li>
        </ul>
        <h3>
          <a href="#course-details" className="card-title">
            Deep Learning with Python
          </a>
        </h3>
        <div className="rating-wrapper">
          <div className="rating">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </div>
          <span className="rating-text">(18 Review)</span>
        </div>
        <div className="card-footer">
          <div className="card-price">
            <span className="span">Free</span>
            <del className="del">₹ 39.00</del>
          </div>
          <div className="card-meta-item">
            <i className="fa-solid fa-user-group"></i>
            <span className="card-meta-text">47 Students</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
