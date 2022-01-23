import React from 'react';
import '../Button/Button';
import { Link } from 'react-router-dom';


const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {
  const handleButtonStyle =  STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
  const handleButtonSize =  SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
      <Link to='sign-up' className='btn-mobile'>
          <button 
          style={{cursor: 'pointer', height: 40, width: 100,margin:5}}
          className={`btn ${handleButtonStyle} ${handleButtonSize}`}
          onClick={onClick}
          type={type} 
          >
                {children}
          </button>
      </Link>
      
  );
};
