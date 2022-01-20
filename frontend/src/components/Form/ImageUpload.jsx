import React from 'react';

const ImageUpload = ({ className, style, image, onFileInputClick, text, altText, alt }) => {
    return (
        <div className={`modal-upload ${className}`} style={style}>
            {image ? (
                <div>
                    <img alt={alt || 'New Avatar'} src={image} onClick={onFileInputClick} />
                </div>
            ) : (
                <div className="modal-upload-text" onClick={onFileInputClick}>
                    <p>
                        {text || 'JPG or PNG allowed'}
                        <br />
                        {altText || 'Max 1 MB'}
                    </p>
                    <div className='mt-3'>Upload File</div>
                </div>
            )}
        </div>
    );
};
export default ImageUpload;
