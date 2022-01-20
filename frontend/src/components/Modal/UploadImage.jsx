import React, { useState, useRef, useContext } from 'react';

import axios from 'axios';
import { Modal, CloseButton } from 'react-bootstrap';

import ImageUpload from 'components/Form/ImageUpload';
import Button from 'components/Form/Button';

import { UserContext } from 'context/UserContext';

const ModalUploadImage = (props) => {
    const [selectedImage, setSelectedImage] = useState();
    const [selectedImageURL, setSelectedImageURL] = useState();

    const { setUser } = useContext(UserContext);

    const filePicker = useRef();

    const onImageChange = (e) => {
        setSelectedImage(e.target.files[0]);
        setSelectedImageURL(URL.createObjectURL(e.target.files[0]));
    };

    const onFileInputClick = (e) => {
        filePicker.current.click();
    };

    const uploadImage = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('image', selectedImage);

        axios
            .post('http://localhost:5000/api/user/upload', formData, { withCredentials: true })
            .then((response) => {
                setUser(response.data);
                window.localStorage.setItem('user', JSON.stringify(response.data));
                props.onHide();
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" dialogClassName="modal-video" centered>
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">New Avatar</Modal.Title>
                <CloseButton variant="white" onClick={props.onHide} />
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={uploadImage} encType="multipart/form-data">
                    <input
                        type="file"
                        name="file"
                        accept={['image/jpeg', 'image/png']}
                        ref={filePicker}
                        onChange={onImageChange}
                        style={{ display: 'none' }}
                    />
                    <ImageUpload image={selectedImageURL} onFileInputClick={onFileInputClick} />
                    {selectedImage && <Button type="info" text="Upload Image" style={{ display: 'block', margin: '0 auto' }} />}
                </form>
            </Modal.Body>
        </Modal>
    );
};

export default ModalUploadImage;
