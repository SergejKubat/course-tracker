import React, { useState, useEffect } from 'react';

const Input = ({ name, type, required, minLength, maxLength, defaultValue, placeholder, icon, onValueChange, style }) => {
    const [value, setValue] = useState(defaultValue);

    const onChange = (e) => {
        if (onValueChange) {
            onValueChange(e.target.value);
        }
        setValue(e.target.value);
    };

    useEffect(() => {
        setValue(defaultValue);
    }, [defaultValue]);

    return (
        <div className="form-group" style={style}>
            <input
                name={name}
                type={type || 'text'}
                required={required}
                minLength={minLength}
                maxLength={maxLength}
                value={value || ''}
                placeholder={placeholder}
                onChange={onChange}
                className={`form-control ${icon ? 'icon' : ''}`}
            />
            {icon}
        </div>
    );
};

export default Input;
