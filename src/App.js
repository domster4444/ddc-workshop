import React from 'react';
const App = () => {
  const buttonStyle = {
    background: 'green',
    color: 'white',
  };
  return (
    <React.Fragment>
      <button style={buttonStyle}>click me</button>
    </React.Fragment>
  );
};

export default App;
