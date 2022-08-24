import { useState } from 'react';

import img_1 from '../../../../assets/images/company3.png';

import Input from '../../../UI/Input/Input';
import { sendPatchRequest } from '../../../../utils/sendHttp';
import { showAlert } from '../../../../utils/alerts';

const IndustryBasicForm = (props) => {
  const [formData, setFormData] = useState({
    domain: '',
    experience: '',
    identity_card: null,
  });

  const inputChangeHandler = (event) => {
    event.preventDefault();

    const name = event.target.name;
    const value = event.target.value;

    setFormData((prevState) => {
      if (name === 'domain') {
        return {
          domain: value,
          experience: prevState.experience,
          identity_card: prevState.identity_card,
        };
      } else if (name === 'experience') {
        return {
          domain: prevState.domain,
          experience: value,
          identity_card: prevState.identity_card,
        };
      } else {
        const file = event.target.files[0];

        return {
          domain: prevState.domain,
          experience: prevState.experience,
          identity_card: file,
        };
      }
    });
  };

  const submitHandler = async (event) => {
    try {
      event.preventDefault();

      const data = new FormData();

      data.append('domain', formData.domain);
      data.append('experience', formData.experience);
      data.append('identityCard', formData.identity_card);
      data.append('formFilled', true);

      console.log(data.get('formFilled'));

      const res = await sendPatchRequest(
        `/api/v1/industry/${props.id}/createBasicForm`,
        data
      );

      if (res.data.status === 'success') {
        showAlert('success', 'Basic information form submitted');
        props.setFormFilled({
          basic: true,
          detailed: false,
          bot: false,
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
              <h1>Personal details</h1>
            </div>

            <div className="industry-basic__form-group">
              <Input
                id="domain"
                label={<span className="industry-basic__label">Domain</span>}
                type="text"
                name="domain"
                placeholder="Domain"
                required
                value={formData.domain}
                onChange={inputChangeHandler}
              />
            </div>

            <div className="industry-basic__form-group">
              <Input
                id="experience"
                label={
                  <span className="industry-basic__label">
                    Experience (in years)
                  </span>
                }
                type="number"
                name="experience"
                placeholder="Experience"
                required
                value={formData.experience}
                onChange={inputChangeHandler}
              />
            </div>

            <div className="industry-basic__form-group">
              <Input
                id="identity_card"
                label={
                  <span className="industry-basic__label">Identity Card</span>
                }
                type="file"
                name="identity_card"
                placeholder="Identity Card"
                required
                accept="image/*"
                onChange={inputChangeHandler}
              />
            </div>

            <button type="submit" className="btn industry-basic__btn">
              Next
              <i className="fa-solid fa-arrow-right-long"></i>
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default IndustryBasicForm;
