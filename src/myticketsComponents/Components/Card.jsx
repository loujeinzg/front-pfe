// Card.js
import React, { useState } from 'react';
import EditTask from '../modals/EditTask'

const Card = ({ taskObj, index, deleteTask, updateListArray }) => {
  const [modal, setModal] = useState(false);
  const [status, setStatus] = useState(taskObj.Status); // Initialize status with the current status of the task

  const colors = [
    {
      primaryColor: "#5D93E1",
      secondaryColor: "#ECF3FC"
    },
    {
      primaryColor: "#F9D288",
      secondaryColor: "#FEFAF1"
    },
    {
      primaryColor: "#5DC250",
      secondaryColor: "#F2FAF1"
    },
    {
      primaryColor: "#F48687",
      secondaryColor: "#FDF1F1"
    },
    {
      primaryColor: "#B964F7",
      secondaryColor: "#F3F0FD"
    }
  ];

  const toggle = () => {
    setModal(!modal);
  };

  const updateTask = (obj) => {
    updateListArray(obj, index);
  };

  const handleDelete = () => {
    deleteTask(index);
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
    updateListArray({ ...taskObj, Status: e.target.value }, index);
  };

  return (
    <div className="card-wrapper mr-5">
      <div className="card-top" style={{ backgroundColor: colors[index % 5].primaryColor }}></div>
      <div className="task-holder" style={{ display: 'grid', gridTemplateColumns: '0.5fr 1fr 0.5fr 0.5fr 0.5fr 0.2fr', alignItems: 'center', gap: '2px' }}>
        <span className="card-header Nametask m-2" style={{ backgroundColor: colors[index % 5].secondaryColor, borderRadius: "10px" }}>{taskObj.Name}</span>
        <p className="description m-2">{taskObj.Description}</p>
        <p className="creation-date m-2">{taskObj.CreationDate}</p>
        <p className="project m-2">{taskObj.Project}</p>
        <div className="status-select m-2">
          <select value={status} onChange={handleStatusChange}>
            <option value="To Do">To Do</option>
            <option value="In Progress">In Progress</option>
            <option value="Done">Done</option>
          </select>
        </div>
        <div className='m-2'>
          <i className="far fa-edit" style={{ marginRight: '10px', color: colors[index % 5].primaryColor, cursor: "pointer" }} onClick={() => setModal(true)}></i>
          <i className="fas fa-trash-alt" style={{ color: colors[index % 5].primaryColor, cursor: "pointer" }} onClick={handleDelete}></i>
        </div>
      </div>
      <EditTask modal={modal} toggle={toggle} updateTask={updateTask} taskObj={taskObj} />
    </div>
  );
};

export default Card;
