import React from 'react';
import './Button.scss';

function Button({ children }) {
  return (
    <button className="Button" type="submit">
      {children}
    </button>
  );
}

export default Button;
