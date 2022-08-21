import { useState } from 'react';

import img_1 from '../../../../assets/images/company3.png';

import Input from '../../../UI/Input/Input';
import { sendPatchRequest } from '../../../../utils/sendHttp';
import { showAlert } from '../../../../utils/alerts';

const IndustryDetailForm = (props) => {
  const [formData, setFormData] = useState({
    company_name: '',
    specialization: '',
    company_address: '',
    business_license: null,
  });

  const inputChangeHandler = (event) => {
    event.preventDefault();

    const name = event.target.name;
    const value = event.target.value;

    setFormData((prevState) => {
      if (name === 'company_name') {
        return {
          company_name: value,
          specialization: prevState.specialization,
          company_address: prevState.company_address,
          business_license: prevState.business_license,
        };
      } else if (name === 'specialization') {
        return {
          company_name: prevState.company_name,
          specialization: value,
          company_address: prevState.company_address,
          business_license: prevState.business_license,
        };
      } else if (name === 'company_address') {
        return {
          company_name: prevState.company_name,
          specialization: prevState.specialization,
          company_address: value,
          business_license: prevState.business_license,
        };
      } else {
        const file = event.target.files[0];

        return {
          company_name: prevState.company_name,
          specialization: prevState.specialization,
          company_address: prevState.company_address,
          business_license: file,
        };
      }
    });
  };

  const submitHandler = async (event) => {
    try {
      event.preventDefault();

      const data = new FormData();

      data.append('companyName', formData.company_name);
      data.append('companyAddress', formData.company_address);
      data.append('specialization', formData.specialization);
      data.append('license', formData.business_license);
      data.append('formFilled', true);

      const res = await sendPatchRequest(
        `/api/v1/industry/${props.id}/createDetailForm`,
        data
      );

      if (res.data.status === 'success') {
        showAlert('success', 'Detailed information form submitted');
        props.setFormFilled({
          basic: true,
          detailed: true,
        });
      }
    } catch (err) {
      showAlert('error', err.response.data.message);
    }
  };

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
          <form onSubmit={submitHandler}>
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
                onChange={inputChangeHandler}
                value={formData.company_name}
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
                onChange={inputChangeHandler}
                value={formData.specialization}
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
                onChange={inputChangeHandler}
                value={formData.company_address}
              />
            </div>

            <div className="industry-detail__form-group">
              <Input
                id="business_license"
                label={
                  <span className="industry-detail__label">
                    Business License
                  </span>
                }
                type="file"
                name="business_license"
                placeholder="Business License"
                required
                onChange={inputChangeHandler}
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
