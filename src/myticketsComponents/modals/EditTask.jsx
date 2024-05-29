import React, { useState , useEffect} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const EditTaskPopup = ({modal, toggle, updateTask, taskObj}) => {
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState(''); // Default status to empty string
    const [creationDate, setCreationDate] = useState('');
    const [project, setProject] = useState(''); 


    const handleChange = (e) => {
        
        const {name, value} = e.target

        if (name === "taskName") {
            setTaskName(value);
        } else if (name === "description") {
            setDescription(value);
        } else if (name === "status") {
            setStatus(value);
        } else if (name === "project") {
            setProject(value);
        }


    }

    useEffect(() => {
        setTaskName(taskObj.Name)
        setDescription(taskObj.Description)
        setStatus(taskObj.Status); // Set the status from taskObj
        setCreationDate(taskObj.CreationDate);
        setProject(taskObj.Project);
    },[])

    const handleUpdate = (e) => {
        e.preventDefault();
        let tempObj = {}
        tempObj['Name'] = taskName
        tempObj['Description'] = description
        tempObj['Status'] = status
        tempObj['CreationDate'] = creationDate
        taskObj["Project"] = project

        updateTask(tempObj)
    }

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Update Task</ModalHeader>
            <ModalBody>
            
                    <div className = "form-group">
                        <label>Ticket Name</label>
                        <input type="text" className = "form-control" value = {taskName} onChange = {handleChange} name = "taskName"/>
                    </div>
                    <div className = "form-group">
                        <label>Description</label>
                        <textarea rows = "5" className = "form-control" value = {description} onChange = {handleChange} name = "description"></textarea>
                    </div>
                    <div className="form-group">
                    <label>Status</label>
                    <select className="form-control" value={status} onChange={handleChange} name="status">
                        <option value="To Do">To Do</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Done">Done</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Creation Date</label>
                    <input type="date" className="form-control" value={creationDate} readOnly />
                </div>
                <div className="form-group">
                    <label>Project</label>
                    <input type="text" className="form-control" value={project} readOnly />
                </div>
                
            </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={handleUpdate}>Update</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
      </Modal>
    );
};

export default EditTaskPopup;