const Category = (props) => {
  return (
    <div className="category-card">
      <div className="card-icon">
        <i className="fa-solid fa-briefcase"></i>
      </div>
      <div>
        <h3 className="category-card__title">
          <a href="#course-detail">Deep Learning with Python</a>
        </h3>
        <span className="card-meta">39 Course</span>
      </div>
    </div>
  );
};

export default Category;
