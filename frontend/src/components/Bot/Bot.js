import alumni_bot from './../../assets/images/alumni_dash.png';
import alumni_bot_2 from './../../assets/images/alumni_bot_2.png';

import BotOptions from './BotOption';

const Bot = (props) => {
  return (
    <div>
      <div className="wrapper">
        <div className="image">
          <img src={alumni_bot} alt="Alumni Vector" className="wrapper_img" />
        </div>
        <div className="block">
          <div className="clip_paths-shape"></div>
          <div className="text">
            <p>From which Engineering branch do you belong ?</p>
          </div>

          <div className="loader">
            <span className="stroke"></span>
            <span className="stroke"></span>
            <span className="stroke"></span>
            <span className="stroke"></span>
            <span className="stroke"></span>
          </div>
        </div>

        <div className="alumni_bot-right">
          <img
            src={alumni_bot_2}
            alt="Alumni Vector"
            className="alumni_bot_image-2"
          />
        </div>
        <form className="botOptions_grid">
          <BotOptions id="option-1" value="Computer Engineering" />
          <BotOptions id="option-2" value="Mechanical Engineering" />
          <BotOptions
            id="option-3"
            value="Electronics and Telecommunication Engineering"
          />
          <BotOptions id="option-4" value="Civil Engineering" />
          <button type="submit" className="btn bot-submit__btn">
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default Bot;
