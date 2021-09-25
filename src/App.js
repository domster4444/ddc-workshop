import React from 'react';
import Button from './Button';

const App = () => {
  return (
    <React.Fragment>
      <Button>
        <ul>
          <li>item1</li>
          <li>item1</li>
          <li>item1</li>
        </ul>
        <p>Click me</p>
      </Button>
    </React.Fragment>
  );
};

export default App;
