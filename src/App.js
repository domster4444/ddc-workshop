import React, { useState } from 'react';
import Button from './Button';
const App = () => {
  const [state, setState] = useState(0);
  const isLoggedIn = false;
  return (
    <div>
      <i>
        <b>{`${state}`}</b>
      </i>

      <br />

      {isLoggedIn ? <button> log out</button> : <button>log in</button>}

      <u>my btn component</u>
      <Button></Button>
    </div>
  );
};

export default App;
