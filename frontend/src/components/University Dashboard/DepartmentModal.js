import Modal from '../UI/Modal/Modal';
import Input from '../UI/Input/Input';

const DepartmentModal = (props) => {
  return (
    <Modal
      header="Upload Syllabus"
      text="Upload syllabus for the respective years"
      show={props.onShow}
      close={props.onClose}
      icon="fas fa-book-open"
    >
      <form className="department-syllabus">
        <div className="department-syllabus__group">
          <Input
            type="file"
            id="syallabus-1"
            name="syallabus-1"
            label={
              <span className="department-syllabus__label">First Year</span>
            }
            accept="image/*,.pdf"
            required
          />
        </div>

        <div className="department-syllabus__group">
          <Input
            type="file"
            id="syallabus-2"
            name="syallabus-2"
            label={
              <span className="department-syllabus__label">Second Year</span>
            }
            accept="image/*,.pdf"
            required
          />
        </div>

        <div className="department-syllabus__group">
          <Input
            type="file"
            id="syallabus-3"
            name="syallabus-3"
            label={
              <span className="department-syllabus__label">Third Year</span>
            }
            accept="image/*,.pdf"
            required
          />
        </div>

        <div className="department-syllabus__group">
          <Input
            type="file"
            id="syallabus-4"
            name="syallabus-4"
            label={
              <span className="department-syllabus__label">Fourth Year</span>
            }
            accept="image/*,.pdf"
            required
          />
        </div>

        <div className="department-syllabus__submit">
          <button type="submit" className="btn department-syllabus__btn">
            Submit
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default DepartmentModal;
