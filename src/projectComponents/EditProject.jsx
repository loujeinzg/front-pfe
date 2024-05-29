import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const EditProjectPopup = ({ modal, toggle, updateProject, projectObj }) => {
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

    const handleCancel = () => {
        // Clear form fields and error message
        setProjectName('');
        setDescription('');
        setError('');
        toggle(); // Close the modal when cancel is clicked
    };

    useEffect(() => {
        setProjectName(projectObj.Name);
        setDescription(projectObj.Description);
    }, [projectObj]);

    const handleUpdate = (e) => {
        e.preventDefault();
        if (!projectName || !description) {
            setError('All fields are required');
            return;
        }
        let tempObj = {
            Name: projectName,
            Description: description
        };
        updateProject(tempObj);
        setProjectName('');
        setDescription('');
        setError('');
        toggle(); // Close the modal after updating
    };

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={handleCancel}>Update Project</ModalHeader>
            <ModalBody>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <div className="form-group">
                    <label>Project Name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        value={projectName} 
                        onChange={handleChange} 
                        name="projectName" 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea 
                        rows="5" 
                        className="form-control" 
                        value={description} 
                        onChange={handleChange} 
                        name="description" 
                        required 
                    ></textarea>
                </div>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={handleUpdate}>Update</Button>{' '}
                <Button color="secondary" onClick={handleCancel}>Cancel</Button>
            </ModalFooter>
        </Modal>
    );
};

export default EditProjectPopup;
