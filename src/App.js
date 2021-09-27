import React from 'react';
import styled from 'styled-components';

const App = () => {
  const BtnStyle = styled.button`
    background: blue;
    color: white;
  `;
  return (
    <React.Fragment>
      <BtnStyle>click me</BtnStyle>
    </React.Fragment>
  );
};

export default App;
