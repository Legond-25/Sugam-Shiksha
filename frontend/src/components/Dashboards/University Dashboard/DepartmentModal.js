import { useContext } from 'react';

import Modal from '../../UI/Modal/Modal';
import Input from '../../UI/Input/Input';
import { sendPatchRequest } from '../../../utils/sendHttp';
import { showAlert } from '../../../utils/alerts';
import { useState } from 'react';
import UserContext from '../../../store/user-context';

const DepartmentModal = (props) => {
  const userCtx = useContext(UserContext);

  const [file_1, setFile_1] = useState(null);
  const [file_2, setFile_2] = useState(null);
  const [file_3, setFile_3] = useState(null);
  const [file_4, setFile_4] = useState(null);

  const [name_1, setName_1] = useState(null);
  const [name_2, setName_2] = useState(null);
  const [name_3, setName_3] = useState(null);
  const [name_4, setName_4] = useState(null);

  const file1ChangeHandler = (event) => {
    setName_1(
      `${userCtx.universityName}-${event.target.previousSibling.children[0].innerHTML}`
    );
    setFile_1(event.target.files[0]);
  };
  const file2ChangeHandler = (event) => {
    setName_2(
      `${userCtx.universityName}-${event.target.previousSibling.children[0].innerHTML}`
    );
    setFile_2(event.target.files[0]);
  };
  const file3ChangeHandler = (event) => {
    setName_3(
      `${userCtx.universityName}-${event.target.previousSibling.children[0].innerHTML}`
    );
    setFile_3(event.target.files[0]);
  };
  const file4ChangeHandler = (event) => {
    setName_4(
      `${userCtx.universityName}-${event.target.previousSibling.children[0].innerHTML}`
    );
    setFile_4(event.target.files[0]);
  };

  const files = [file_1, file_2, file_3, file_4];
  const names = [name_1, name_2, name_3, name_4];

  const submitHandler = async (event) => {
    try {
      event.preventDefault();
      const formData = new FormData();

      formData.append('nameOfDepartment', props.name);
      formData.append('nameOfHod', props.hod);
      formData.append('categoryOfDepartment', props.category);
      formData.append('names', names);

      files.forEach((file) => {
        formData.append('syllabus', file);
      });

      const res = await sendPatchRequest(
        `/api/v1/university/${props.userId}/uploadSyllabus`,
        formData
      );

      if (res.data.status === 'success') {
        showAlert('success', 'Department added successfully');
      }
    } catch (err) {
      showAlert('error', err.response.data.message);
    }
  };

  return (
    <Modal
      header="Upload Syllabus"
      text="Upload syllabus for the respective years"
      show={props.onShow}
      close={props.onClose}
      icon="fas fa-book-open"
    >
      <form className="department-syllabus" onSubmit={submitHandler}>
        <div className="department-syllabus__group">
          <Input
            type="file"
            id="syllabus-1"
            name="syllabus"
            label={
              <span className="department-syllabus__label">First Year</span>
            }
            accept="image/*,.pdf"
            required
            onChange={file1ChangeHandler}
          />
        </div>

        <div className="department-syllabus__group">
          <Input
            type="file"
            id="syallabus-2"
            name="syllabus"
            label={
              <span className="department-syllabus__label">Second Year</span>
            }
            accept="image/*,.pdf"
            required
            onChange={file2ChangeHandler}
          />
        </div>

        <div className="department-syllabus__group">
          <Input
            type="file"
            id="syallabus-3"
            name="syllabus"
            label={
              <span className="department-syllabus__label">Third Year</span>
            }
            accept="image/*,.pdf"
            required
            onChange={file3ChangeHandler}
          />
        </div>

        <div className="department-syllabus__group">
          <Input
            type="file"
            id="syallabus-4"
            name="syllabus"
            label={
              <span className="department-syllabus__label">Fourth Year</span>
            }
            accept="image/*,.pdf"
            required
            onChange={file4ChangeHandler}
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
