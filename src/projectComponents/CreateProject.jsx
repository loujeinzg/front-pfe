import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const CreateProjectPopup = ({ modal, toggle, save }) => {
    const [projectName, setProjectName] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "projectName") {
            setProjectName(value);
        } else {
            setDescription(value);
        }
    };

    const handleSave = (e) => {
        e.preventDefault();
        if (!projectName || !description) {
            setError('All fields are required');
            return;
        }
        // If all fields are filled, save the task
        const projectObj = {
            Name: projectName,
            Description: description
        };
        save(projectObj);
        setProjectName('');
        setDescription('');
        setError('');
        toggle();
    };

    const handleCancel = () => {
        // Clear form fields and error message
        setProjectName('');
        setDescription('');
        setError('');
        toggle(); // Close the modal when cancel is clicked
    };

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={handleCancel}>Create Project</ModalHeader>
            <ModalBody>
            {error && <p style={{ color: 'red' }}>{error}</p>}
                <form onSubmit={handleSave}>
                    <div className="form-group">
                        <label>Project Name</label>
                        <input type="text" className="form-control" value={projectName} onChange={handleChange} name="projectName" />
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <textarea rows="5" className="form-control" value={description} onChange={handleChange} name="description" />
                    </div>
                    <button type="submit" style={{ display: 'none' }}></button>
                </form>
                
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={handleSave}>Create</Button>{' '}
                <Button color="secondary" onClick={handleCancel}>Cancel</Button>
            </ModalFooter>
        </Modal>
    );
};

export default CreateProjectPopup;
