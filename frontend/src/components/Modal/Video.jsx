import React from 'react';

import { Modal, CloseButton } from 'react-bootstrap';
import ReactPlayer from 'react-player';

const ModalVideo = (props) => {
    return (
        <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" dialogClassName="modal-video" centered>
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">{props.title}</Modal.Title>
                <CloseButton variant="white" onClick={props.onHide} />
            </Modal.Header>
            <Modal.Body>
                <h3 style={{ marginBottom: '2rem' }}>{props.name}</h3>
                <ReactPlayer url={props.video} height="40rem" width="100%" controls={true} />
            </Modal.Body>
        </Modal>
    );
};

export default ModalVideo;
