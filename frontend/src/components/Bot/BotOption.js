const BotOptions = (props) => {
  return (
    <div className="optionBlock">
      <input
        type="checkbox"
        className="optionBlock_checkBox"
        id={props.id}
        hidden
        value={props.value}
      />
      <label htmlFor={props.id} className="optionBlock_button">
        {props.value}
      </label>
    </div>
  );
};

export default BotOptions;
