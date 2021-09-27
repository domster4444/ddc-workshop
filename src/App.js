import React from 'react';
import myImage from './assets/jptimage.jpeg';
import mySvg from './assets/panda.svg';
import myVdo from './assets/React in 100 Seconds.mp4';
const App = () => {
  return (
    <div>
      <video width="320" height="240" controls>
        <source src={myVdo} type="video/mp4" />
      </video>
      <img src={myImage} alt="" />
      <img src={mySvg} alt="" />
    </div>
  );
};

export default App;
