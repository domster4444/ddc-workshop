import React from 'react';

const App = () => {
  const mybtn = {
    background: 'red',
    padding: '1rem 0rem',
  };

  return (
    <React.Fragment>
      <button style={mybtn}>click me</button>
    </React.Fragment>
  );
};

export default App;
