import React from 'react';

const Badge = ({ type, text }) => {
    return <span className={`badge ${type ? type : ''}`}>{text}</span>;
};

export default Badge;
