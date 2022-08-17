import Input from '../../UI/Input/Input';

const onClickDropdownHandler = (event) => {
  const value = event.target.innerHTML;

  event.target.parentElement.parentElement.previousElementSibling.innerHTML =
    value;
  event.target.parentElement.parentElement.previousElementSibling.value = value;

  event.target.parentElement.parentElement.previousElementSibling.style.color =
    'black';

  event.target.parentElement.parentElement.style.display = 'none';
};

const showDropdownHandler = (event) => {
  event.target.nextSibling.style.display = 'block';
};

const InsBasicForm = (props) => {
  return (
    <form className="institute-basic__form">
      <div className="institute-basic__form-group">
        <Input
          id="institute_name"
          label={<span className="institute-basic__label">Institute Name</span>}
          type="text"
          name="institute_name"
          placeholder="Institute Name"
          required
        />
      </div>

      <div className="institute-basic__form-group">
        <Input
          id="institute_code"
          label={<span className="institute-basic__label">Institute Code</span>}
          type="text"
          name="institute_code"
          placeholder="institute Code"
          required
        />
      </div>

      <div className="institute-basic__form-group">
        <label htmlFor="dropdown-toggle" className="institute-basic__label">
          Institute Type
        </label>
        <button
          type="button"
          id="dropdown-toggle"
          className="institute-basic__toggle round"
          onClick={showDropdownHandler}
        >
          --- Please Select One ---
        </button>

        <div className="institute-basic__dropdown">
          <Input
            id="government_institute"
            label={
              <span className="institute-basic__radio-label">
                Government Institute
              </span>
            }
            labelClick={onClickDropdownHandler}
            type="radio"
            name="institute_type"
            value="Government institute"
            required
            hidden
          />

          <Input
            id="non-government_institute"
            label={
              <span className="institute-basic__radio-label">
                Non-Government Institute
              </span>
            }
            labelClick={onClickDropdownHandler}
            type="radio"
            name="institute_type"
            value="Non-Government Institute"
            required
            hidden
          />
        </div>
      </div>

      <div className="institute-basic__form-group">
        <Input
          id="institute_code"
          label={
            <span className="institute-basic__label">Institute Address</span>
          }
          type="text"
          name="institute_address"
          placeholder="Institute Address"
          required
        />
      </div>

      <div className="institute-basic__form-group">
        <label htmlFor="dropdown-toggle" className="institute-basic__label">
          Funding Status
        </label>
        <button
          type="button"
          id="dropdown-toggle"
          className="institute-basic__toggle round"
          onClick={showDropdownHandler}
        >
          --- Please Select One ---
        </button>

        <div className="institute-basic__dropdown">
          <Input
            id="aided_institute"
            label={<span className="institute-basic__radio-label">Aided</span>}
            labelClick={onClickDropdownHandler}
            type="radio"
            name="institute_type"
            value="Aided institute"
            required
            hidden
          />

          <Input
            id="unaided_institute"
            label={
              <span className="institute-basic__radio-label">Un-Aided</span>
            }
            labelClick={onClickDropdownHandler}
            type="radio"
            name="institute_type"
            value="Un-Aided Institute"
            required
            hidden
          />
        </div>
      </div>

      <div className="institute-basic__form-group">
        <Input
          id="institute_head"
          label={
            <span className="institute-basic__label">
              Name of the Principal
            </span>
          }
          type="text"
          name="institute_head"
          placeholder="Institute Head"
          required
        />
      </div>

      <div className="institute-basic__form-group ">
        <label htmlFor="dropdown-toggle" className="institute-basic__label">
          Autonomy Status
        </label>

        <div className="institute-basic__radio">
          <label for="true" class="auto_check">
            Yes
          </label>
          <input type="radio" id="true" name="status" />
          <label for="false" class="auto_check">
            No
          </label>
          <input type="radio" id="false" name="status" />
        </div>
      </div>

      <div className="institute-basic__submit">
        <button type="submit" className="btn institute-basic__btn">
          Next
          <i className="fa-solid fa-arrow-right-long"></i>
        </button>
      </div>
    </form>
  );
};

export default InsBasicForm;
