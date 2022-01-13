import React from 'react';

const Button = ({ text, type, style, onClick }) => {
    return (
        <button className={`button ${type ? type : 'default'}`} style={style} onClick={onClick}>
            {text}
        </button>
    );
};

export default Button;
