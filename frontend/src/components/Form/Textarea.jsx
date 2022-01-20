import React, { useState, useEffect } from 'react';

const Textarea = ({ name, required, onValueChange, minLength, maxLength, defaultValue, placeholder, style }) => {
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
            <textarea
                name={name}
                required={required}
                minLength={minLength}
                maxLength={maxLength}
                value={value || ''}
                placeholder={placeholder}
                onChange={onChange}
                className="form-control textarea"
            />
        </div>
    );
};

export default Textarea;
