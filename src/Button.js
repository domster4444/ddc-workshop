import React from 'react';
import PT from 'prop-types';

const Button = (props) => {
  return (
    <div>
      <button>
        {props.title} {props.subtitle}
      </button>
    </div>
  );
};
Button.propTypes = {
  title: PT.string.isRequired,
  // title: PT.number,
  // title: PT.array,
  // title: PT.object,
  // title: PT.symbol,
  // title: PT.func,
};

export default Button;
