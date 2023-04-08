import React from 'react';

const Button = ({ texto }) => {
  async function handle(event) {
    event.target.style.backgroundColor = 'Pink';
  }
  return (
    <React.Fragment>
      <button
        style={{ background: 'blue', marginLeft: '10px' }}
        onClick={handle}
      >
        {texto}
      </button>
    </React.Fragment>
  );
};

export default Button;
