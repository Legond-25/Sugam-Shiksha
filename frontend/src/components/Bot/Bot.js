import { useCallback, useEffect, useState } from 'react';

import alumni_bot from './../../assets/images/alumni_dash.png';
import alumni_bot_2 from './../../assets/images/alumni_bot_2.png';
import alumni_bot_bg from './../../assets/images/Alumni_bot_bg.png';

import BotOption from './BotOption';

const Bot = (props) => {
  const botQues = props.bot;

  const [currentNo, setCurrentNo] = useState(0);
  const [currentQue, setCurrentQue] = useState(botQues[0]);

  const botQueHandler = useCallback(() => {
    if (currentNo < botQues.length) {
      setCurrentQue(botQues[currentNo]);
    }
  }, [botQues, currentNo]);

  useEffect(() => {
    botQueHandler();
  }, [botQueHandler]);

  // const inputChangeHandler = (event) => {};

  const submitHandler = (event) => {
    event.preventDefault();

    setCurrentNo((prevVal) => {
      return prevVal + 1;
    });
  };

  const style = {
    background: `linear-gradient(to right bottom, rgba(255,255,255,0.8), rgba(255,255,255,0.8)), url(${alumni_bot_bg})`,
    backgroundSize: 'cover',
  };

  return (
    <div style={style}>
      <div className="wrapper">
        <div className="image">
          <img src={alumni_bot} alt="Alumni Vector" className="wrapper_img" />
        </div>
        <div className="block">
          <div className="clip_paths-shape"></div>
          <div className="text">
            <p>{currentQue.que}</p>
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
        <form className="botOptions_grid" onSubmit={submitHandler}>
          {currentQue.options.map((option, index) => {
            return (
              <BotOption
                id={`option-${index + 1}`}
                value={option}
                key={index + 1}
                type={currentQue.type}
                name={currentQue.name}
                rate={currentQue.rate}
              />
            );
          })}
          <button type="submit" className="btn bot-submit__btn">
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default Bot;
