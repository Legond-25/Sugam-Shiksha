import alumni_bot from './../../assets/images/alumni_dash.png';
import alumni_bot_2 from './../../assets/images/alumni_bot_2.png';

import BotOptions from './BotOption';

const Bot = (props) => {
  return (
    <div>
      <div className="wrapper">
        <div className="image">
          <img
            src={alumni_bot}
            alt="Alumni Vector"
            className="wrapper_img"
          ></img>
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
          ></img>
        </div>
        <div className="botOptions_grid">
          <BotOptions />
          <BotOptions />
          <BotOptions />
          <BotOptions />
          <BotOptions />
          <BotOptions />
        </div>
      </div>
    </div>
  );
};

export default Bot;
