import React, { useRef, useImperativeHandle } from 'react';

const Input = React.forwardRef((props, ref) => {
  const inputRef = useRef();

  const activate = () => {
    inputRef.current.focus();
  };

  useImperativeHandle(ref, () => {
    return {
      focus: activate,
    };
  });

  return (
    <>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        ref={inputRef}
        type={props.type}
        id={props.id}
        value={props.value}
        placeholder={props.placeholder}
        required
        onChange={props.onChange}
        onBlur={props.onBlur}
        className={`control ${props.isValid === false ? 'invalid' : ''}`}
      />
    </>
  );
});

export default Input;
