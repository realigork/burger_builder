import React from 'react';

import classes from './input.css';

const Input = (props) => {
  let inputElement = null;
  const inputClasses = [classes.inputElement];

  if (props.invalid && props.shouldValidate && props.touched) {
    inputClasses.push(classes.invalid);
  }

  switch(props.elementType) {
    case ('input'):
      inputElement = <input
        onChange={props.onChange}
        className={inputClasses.join(' ')}
        {...props.elementConfig}
        value={props.value}
      />;
      break;

    case('textarea'):
      inputElement = <textarea
        onChange={props.onChange}
        className={inputClasses.join(' ')}
        {...props.elementConfig}
        value={props.value}
      />;
      break;

    case('select'):
      inputElement = (
        <select
          onChange={props.onChange}
          className={inputClasses.join(' ')}
          value={props.value}
        >
          {props.elementConfig.options.map(option => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>);
      break;

    default:
      inputElement = <input
        className={inputClasses.join(' ')}
        {...props.elementConfig}
        value={props.value}
      />;
  }

  return (
    <div className={classes.input}>
      <label className={classes.label}>{props.label}</label>
      {inputElement}
    </div>
  );
}


export default Input;