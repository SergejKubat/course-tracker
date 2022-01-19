import React from 'react';

import { AiOutlineClose } from 'react-icons/ai';
import { BsBell } from 'react-icons/bs';

const Notification = ({ type, text, onClose }) => {
    const getMessage = (type) => {
        switch (type) {
            case 'default': {
                return 'Congrats!';
            }
            case 'success': {
                return 'Well done!';
            }
            case 'danger': {
                return 'Oh snap!';
            }
        }
    };

    return (
        <div className={`notification ${type ? type : ''}`} role="alert">
            <BsBell className="icon" />
            <span className="text">
                <b>{getMessage(type || 'default')}</b> - {text}
            </span>
            <AiOutlineClose className="close" onClick={onClose} />
        </div>
    );
};

export default Notification;
