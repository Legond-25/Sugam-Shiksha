import img_1 from '../../../../assets/images/company3.png';

import Input from '../../../UI/Input/Input';

const IndustryDetailForm = (props) => {
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
          <form>
            <div className="formT">
              <h1>Company details</h1>
            </div>

            <div className="industry-detail__form-group">
              <Input
                id="company_name"
                label={
                  <span className="industry-detail__label">Company Name</span>
                }
                type="text"
                name="company_name"
                placeholder="Company Name"
                required
              />
            </div>

            <div className="industry-detail__form-group">
              <Input
                id="specialization"
                label={
                  <span className="industry-detail__label">Specialization</span>
                }
                type="text"
                name="specialization"
                placeholder="Specialization"
                required
              />
            </div>

            <div className="industry-detail__form-group">
              <Input
                id="company_address"
                label={
                  <span className="industry-detail__label">
                    Company Address
                  </span>
                }
                type="text"
                name="company_address"
                placeholder="Company Address"
                required
              />
            </div>

            <div className="industry-detail__form-group">
              <Input
                id="buisness_license"
                label={
                  <span className="industry-detail__label">
                    Business License
                  </span>
                }
                type="file"
                name="buisness_license"
                placeholder="Business License"
                required
              />
            </div>

            <button type="submit" className="btn industry-detail__btn">
              Next
              <i className="fa-solid fa-arrow-right-long"></i>
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default IndustryDetailForm;
