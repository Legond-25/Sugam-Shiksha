import * as React from 'react';
import { Slider } from '@mui/material';

const BotOption = (props) => {
  if (props.type === 'checkbox') {
    if (props.rate === false) {
      return (
        <div className="optionBlock">
          <input
            type="checkbox"
            className="optionBlock_checkBox"
            id={props.id}
            hidden
            value={props.value}
            name={props.name}
          />
          <label htmlFor={props.id} className="optionBlock_button">
            {props.value}
          </label>
        </div>
      );
    } else {
      return (
        <div className="optionBlock">
          <input
            type="checkbox"
            className="optionBlock_checkBox"
            id={props.id}
            hidden
            value={props.value}
            name={props.name}
          />
          <label htmlFor={props.id} className="optionBlock_button">
            {props.value}
          </label>
          <Slider defaultValue={50} step={10} min={10} max={100} marks />
        </div>
      );
    }
  } else if (props.type === 'radio') {
    <div className="optionBlock">
      <input
        type="radio"
        className="optionBlock_checkBox"
        id={props.id}
        hidden
        value={props.value}
        name={props.name}
      />
      <label htmlFor={props.id} className="optionBlock_button">
        {props.value}
      </label>
    </div>;
  }
};

export default BotOption;
