// list in react
import React from 'react';

const App = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const newArr = arr.map((num, index) => {
    return <li key={index}>{num}</li>;
  });
  return (
    <div>
      <ul>{newArr}</ul>
    </div>
  );
};

export default App;
