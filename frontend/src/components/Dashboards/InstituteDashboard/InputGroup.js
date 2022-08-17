import Input from '../../UI/Input/Input';

const InputGroup = (props) => {
  return (
    <form className="institute-detail__input-group">
      <div className="institute-detail__input">
        <Input
          id="name_of_department"
          label={
            <span className="institute-detail__label">Name of Department</span>
          }
          type="text"
          name="name_of_department"
          placeholder="Name of Department"
          required
        />
      </div>

      <div className="institute-detail__input">
        <Input
          id="name_of_hod"
          label={<span className="institute-detail__label">Name of HOD</span>}
          type="text"
          name="name_of_hod"
          placeholder="Name of HOD"
          required
        />
      </div>

      <div className="institute-detail__input-submit">
        <button className="btn institute-detail__input-btn" type="submit">
          Add Department
        </button>
      </div>
    </form>
  );
};

export default InputGroup;
