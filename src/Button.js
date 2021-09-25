import React from 'react';

const Button = (props) => {
  return (
    <div>
      <button>
        {props.title} {props.subtitle}
      </button>
    </div>
  );
};

export default Button;
