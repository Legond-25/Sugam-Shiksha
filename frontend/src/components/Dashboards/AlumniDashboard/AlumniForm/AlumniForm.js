import img_1 from '../../../../assets/images/alumni_form.png';

const AlumniForm = (props) => {
  return (
    <div>
      <section className="alumni_form" id="alumni_form">
        <h1 className="heading">
          Let's Get <span>Started</span>
        </h1>
        <div className="main_cont">
          <div className="row">
            <form action="" method="post">
              <span>institute name</span>
              <input
                type="text"
                required
                placeholder="Enter your Institute name"
                name="name"
                className="box"
              />
              <span>company name</span>
              <input
                type="text"
                required
                placeholder="Enter your Company name"
                name="name"
                className="box"
              />
              <span>experience</span>
              <input
                type="number"
                required
                placeholder="Enter your Experience"
                max="50"
                min="0"
                name="number"
                className="box"
              />
              <span>domain</span>
              <input
                type="text"
                required
                placeholder="Enter your Domain"
                name="number"
                className="box"
              />
              <input
                type="submit"
                value="submit"
                className="btn"
                name="submit"
              />
            </form>
          </div>
          <div className="image">
            <img src={img_1} alt="Alumni Form" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AlumniForm;
