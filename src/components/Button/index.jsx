import React from 'react';

const Button = ({ onClick, buttonStyle, content, isDisabled }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={buttonStyle}
      disabled={isDisabled}>
      {content}
    </button>
  );
};

export default Button;
