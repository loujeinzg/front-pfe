import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const CreateTaskPopup = ({ modal, toggle, save }) => {
    const today = new Date().toISOString().split('T')[0];
   
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('To Do'); // Default status to 'To Do'
    const [creationDate, setCreationDate] = useState(today); 
    const [project, setProject] = useState('Projet1'); 
    const [formError, setFormError] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "taskName") {
            setTaskName(value);
        } else if (name === "description") {
            setDescription(value);
        } else if (name === "status") {
            setStatus(value);
        } else if (name === "creationDate") {
            setCreationDate(value);
        } else if (name === "project") {
            setProject(value);
        }
    };

    const handleSave = (e) => {
        e.preventDefault();

        // Check if any field is empty
        if (!taskName || !description || !status || !creationDate || !project) {
            setFormError(true);
            return;
        }

        // Reset form error state
        setFormError(false);

        // If all fields are filled, save the task
        const taskObj = {
            Name: taskName,
            Description: description,
            Status: status,
            CreationDate: creationDate,
            Project: project
        };

        save(taskObj);
    };

    const handleCancel = () => {
        // Reset all fields to their initial state
        setTaskName('');
        setDescription('');
        setStatus('To Do');
        setCreationDate(today);
        setProject('Projet1');
        setFormError(false);

        // Close the modal
        toggle();
    };

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Create Ticket</ModalHeader>
            <ModalBody>
                <form>
                    <div className="form-group">
                        <label>Ticket Name</label>
                        <input type="text" className="form-control" value={taskName} onChange={handleChange} name="taskName" required />
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <textarea rows="5" className="form-control" value={description} onChange={handleChange} name="description" required></textarea>
                    </div>
                    <div className="form-group">
                        <label>Status</label>
                        <select className="form-control" value={status} onChange={handleChange} name="status" required>
                            <option value="">Select Status</option>
                            <option value="To Do">To Do</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Done">Done</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Project</label>
                        <select className="form-control" value={project} onChange={handleChange} name="project" required>
                            <option value="">Select Project</option>
                            <option value="Projet1">Projet1</option>
                            <option value="Projet2">Projet2</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Creation Date</label>
                        <input type="date" className="form-control" value={creationDate} onChange={handleChange} name="creationDate" required />
                    </div>
                    {formError && <p className="text-danger">All fields are required</p>}
                </form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={handleSave}>Create</Button>
                <Button color="secondary" onClick={handleCancel}>Cancel</Button>
            </ModalFooter>
        </Modal>
    );
};

export default CreateTaskPopup;
