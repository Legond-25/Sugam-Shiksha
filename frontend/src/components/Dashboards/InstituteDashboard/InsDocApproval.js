import Input from '../../UI/Input/Input';

const InsDocApprovalForm = (props) => {
  return (
    <form className="institute-doc-approval__form">
      <div className="institute-doc-approval__form-group">
        <Input
          id="institute_name"
          label={
            <span className="institute-doc-approval__label">
              Approval Document 1
            </span>
          }
          type="file"
          name="institute_doc_name"
          required
        />
      </div>
      <div className="institute-doc-approval__form-group">
        <Input
          id="institute_name"
          label={
            <span className="institute-doc-approval__label">
              Approval Document 2
            </span>
          }
          type="file"
          name="institute_doc_name"
          required
        />
      </div>
      <div className="institute-doc-approval__form-group">
        <Input
          id="institute_name"
          label={
            <span className="institute-doc-approval__label">
              Approval Document 3
            </span>
          }
          type="file"
          name="institute_doc_name"
          required
        />
      </div>
      <div className="institute-doc-approval__form-group">
        <Input
          id="institute_name"
          label={
            <span className="institute-doc-approval__label">
              Approval Document 4
            </span>
          }
          type="file"
          name="institute_doc_name"
          required
        />
      </div>
      <div className="institute-doc-approval__form-group">
        <Input
          id="institute_name"
          label={
            <span className="institute-doc-approval__label">
              Approval Document 5
            </span>
          }
          type="file"
          name="institute_doc_name"
          required
        />
      </div>
      <div className="institute-doc-approval__form-group">
        <Input
          id="institute_name"
          label={
            <span className="institute-doc-approval__label">
              Approval Document 6
            </span>
          }
          type="file"
          name="institute_doc_name"
          required
        />
      </div>

      <div className="institute-doc-approval__submit">
        <button type="button" className="btn institute-doc-approval__btn">
          Submit
        </button>
      </div>
    </form>
  );
};

export default InsDocApprovalForm;
