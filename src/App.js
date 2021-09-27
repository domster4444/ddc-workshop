import React from 'react';
import btnStyle from './Button.module.css';
const App = () => {
  return (
    <React.Fragment>
      <button className={btnStyle.error}>click me</button>
    </React.Fragment>
  );
};

export default App;
