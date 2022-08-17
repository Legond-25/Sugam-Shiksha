import img_1 from '../../../../assets/images/company3.png';

const IndustryForm = (props) => {
  return (
    <div>
      <h1 className="heading">
        <span className="welcome_text">
          Let's Brighten The <span>Future</span>
        </span>
      </h1>
      <section className="industry_form" id="industry_form">
        <div className="image">
          <img src={img_1} alt="Industry form" />
        </div>

        <div className="row">
          <form action="" method="post">
            <div className="formT">
              <h1>Company details</h1>
            </div>
            <span>Company name</span>
            <input
              type="text"
              required
              placeholder="Enter your company name"
              maxlength="50"
              name="name"
              className="box"
            />
            <span>Specialization</span>
            <input
              type="text"
              required
              placeholder="Enter your specialization"
              maxlength="50"
              name="Specification"
              className="box"
            />
            <span>Year of Establishment</span>
            <input
              type="text"
              required
              placeholder="Enter company's year of establishment"
              name="number"
              className="box"
            />

            <span>Company Address</span>
            <input
              type="text"
              required
              placeholder="Enter the address of company"
              maxlength="50"
              name="name"
              className="box"
            />
            <span>Business License</span>
            <input
              type="file"
              required
              placeholder="Upload campany's business license"
              maxlength="50"
              name="Specification"
              className="box"
            />
            {/* <div className="formT">
              <h1>Personal details</h1>
            </div>

            <span>Domain</span>
            <input
              type="text"
              required
              placeholder="Enter your work domain"
              maxlength="50"
              name="name"
              className="box"
            />
            <span>Experience</span>
            <input
              type="text"
              required
              placeholder="Enter your years of experience"
              maxlength="50"
              name="Specification"
              className="box"
            />
            <span>Identity Card</span>
            <input
              type="file"
              required
              placeholder="Upload your identity card"
              maxlength="50"
              name="Specification"
              className="box"
            /> */}
            <input type="submit" value="Done" className="btn" name="send" />
          </form>
        </div>
      </section>
    </div>
  );
};

export default IndustryForm;
