import React from 'react';
const App = () => {
  const alertFunc = () => {
    alert('triggered');
  };
  return (
    <div>
      <button onClick={alertFunc}>click me</button>
      <button onMouseOver={alertFunc}>mouseOver me</button>
      <button onMouseEnter={alertFunc}>mouseEnter me</button>
      <button onMouseLeave={alertFunc}>mouseLeave me</button>
    </div>
  );
};

export default App;
