import React from 'react';

function Card({ title, description }) {
  return (
    <React.Fragment>
      <div class="card">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </React.Fragment>
  );
}

export default Card;
