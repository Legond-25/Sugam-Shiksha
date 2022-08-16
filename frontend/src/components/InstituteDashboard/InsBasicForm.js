import Input from "./../UI/Input/Input";

const onClickDropdownHandler = (event) => {
  const value = event.target.innerHTML;

  event.target.parentElement.parentElement.previousElementSibling.innerHTML =
    value;
  event.target.parentElement.parentElement.previousElementSibling.value = value;

  event.target.parentElement.parentElement.previousElementSibling.style.color =
    "black";

  event.target.parentElement.parentElement.style.display = "none";
};

const showDropdownHandler = (event) => {
  event.target.nextSibling.style.display = "block";
};

const UniBasicForm = (props) => {
  return (
    <form className="university-basic__form">
      <div className="university-basic__form-group">
        <Input
          id="university_name"
          label={
            <span className="university-basic__label">University Name</span>
          }
          type="text"
          name="university_name"
          placeholder="University Name"
          required
        />
      </div>

      <div className="university-basic__form-group">
        <Input
          id="university_code"
          label={
            <span className="university-basic__label">University Code</span>
          }
          type="text"
          name="university_code"
          placeholder="University Code"
          required
        />
      </div>

      <div className="university-basic__form-group">
        <label htmlFor="dropdown-toggle" className="university-basic__label">
          University Type
        </label>
        <button
          type="button"
          id="dropdown-toggle"
          className="university-basic__toggle round"
          onClick={showDropdownHandler}
        >
          --- Please Select One ---
        </button>

        <div className="university-basic__dropdown">
          <Input
            id="central_university"
            label={
              <span className="university-basic__radio-label">
                Central University
              </span>
            }
            labelClick={onClickDropdownHandler}
            type="radio"
            name="university_type"
            value="Central University"
            required
            hidden
          />

          <Input
            id="state_university"
            label={
              <span className="university-basic__radio-label">
                State University
              </span>
            }
            labelClick={onClickDropdownHandler}
            type="radio"
            name="university_type"
            value="State University"
            required
            hidden
          />

          <Input
            id="deemed_university"
            label={
              <span className="university-basic__radio-label">
                Deemed University
              </span>
            }
            labelClick={onClickDropdownHandler}
            type="radio"
            name="university_type"
            value="Deemed University"
            required
            hidden
          />

          <Input
            id="institutes_under_national_importance"
            label={
              <span className="university-basic__radio-label">
                Institutes Under National Importance
              </span>
            }
            labelClick={onClickDropdownHandler}
            type="radio"
            name="university_type"
            value="Institutes Under National Importance"
            required
            hidden
          />
        </div>
      </div>

      <div className="university-basic__form-group">
        <Input
          id="university_address"
          label={
            <span className="university-basic__label">University Address</span>
          }
          type="text"
          name="university_address"
          placeholder="University Address"
          required
        />
      </div>

      <div className="university-basic__form-group">
        <Input
          id="university_head"
          label={
            <span className="university-basic__label">University Head</span>
          }
          type="text"
          name="university_head"
          placeholder="University Head"
          required
        />
      </div>

      <div className="university-basic__form-group">
        <Input
          id="no_affiliated_institutes"
          label={
            <span className="university-basic__label">
              No. of Affiliated Institutes
            </span>
          }
          type="number"
          name="no_affiliated_institutes"
          placeholder="No. of Affiliated Institutes"
          required
        />
      </div>

      <div className="university-basic__submit">
        <button type="submit" className="btn university-basic__btn">
          Next
          <i className="fa-solid fa-arrow-right-long"></i>
        </button>
      </div>
    </form>
  );
};

export default UniBasicForm;
