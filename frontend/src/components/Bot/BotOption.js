const BotOptions = (props) => {
  return (
    <div className="optionBlock">
      <input
        type="checkbox"
        className="optionBlock_checkBox"
        id="checkBox"
        hidden
      />
      <label htmlFor="checkBox" className="optionBlock_button">
        Computer Engineering
      </label>
    </div>
  );
};

export default BotOptions;
