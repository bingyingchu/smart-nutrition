import React, { useState } from 'react';
import Modal from "react-modal"; 

const Resource = () => {
    const [isOpen, setIsOpen] = useState(false);

	function toggleModal() {
		setIsOpen(!isOpen);
	}
	
	const download = () => {
        fetch('resources.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'resources.pdf';
                alink.click();
            })
        })
    }

	return (
		<div>
            <h5>Can't find what you want? You can <button onClick={toggleModal}>download</button> more resources.
                <Modal
                    isOpen={isOpen}
                    onRequestClose={toggleModal}
                    // contentLabel="My dialog"
                    className="secondmodal"
                    overlayClassName="secondoverlay"
                    closeTimeoutMS={500}
                >
                    <div>Start downloading a list of resources?</div>
                    <br></br>
                    <button onClick={download}>Yes</button>
                </Modal>
            </h5>
        </div>
	);
};

export default Resource;