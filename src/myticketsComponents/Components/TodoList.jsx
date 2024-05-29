import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; // Import uuidv4 from uuid package
import CreateTask from '../modals/CreateTask';
import Card from './Card';
import { useNavigate } from 'react-router-dom';


const TodoList = () => {
  const [modal, setModal] = useState(false);
  const [taskList, setTaskList] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [statusFilter, setStatusFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortDirection, setSortDirection] = useState('asc');

  useEffect(() => {
    let arr = localStorage.getItem('taskList');
    if (arr) {
      let obj = JSON.parse(arr);
      // Assign IDs to tasks if they don't have one
      const updatedTasks = obj.map(task => ({
        ...task,
        id: task.id ? task.id : uuidv4(), // Generate a random ID if task doesn't have one
      }));
      setTaskList(updatedTasks);
      setFilteredTasks(updatedTasks);
      localStorage.setItem('taskList', JSON.stringify(updatedTasks));
    }
  }, []);

  const deleteTask = (index) => {
    let tempList = taskList;
    tempList.splice(index, 1);
    localStorage.setItem('taskList', JSON.stringify(tempList));
    setTaskList(tempList);
    window.location.reload();
  };

  const updateListArray = (obj, index) => {
    let tempList = taskList;
    tempList[index] = obj;
    localStorage.setItem('taskList', JSON.stringify(tempList));
    setTaskList(tempList);
    window.location.reload();
  };

  const toggle = () => {
    setModal(!modal);
  };

  const saveTask = (taskObj) => {
    let tempList = taskList;
    taskObj.id = uuidv4(); // Assign a random ID to the new task
    tempList.push(taskObj);
    localStorage.setItem('taskList', JSON.stringify(tempList));
    setTaskList(tempList);
    setModal(false);
    window.location.reload();
  };

  useEffect(() => {
    let updatedTasks = [...taskList];

    // Filter by status
    if (statusFilter !== 'All') {
      updatedTasks = updatedTasks.filter(task => task.Status === statusFilter);
    }

    // Search by task name
    if (searchTerm) {
      updatedTasks = updatedTasks.filter(task =>
        task.Name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sort by creation date
    updatedTasks.sort((a, b) => {
      const dateA = new Date(a.CreationDate);
      const dateB = new Date(b.CreationDate);
      return sortDirection === 'asc' ? dateA - dateB : dateB - dateA;
    });

    setFilteredTasks(updatedTasks);
  }, [taskList, statusFilter, searchTerm, sortDirection]);

  const handleStatusFilterChange = (e) => {
    setStatusFilter(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSortDirectionChange = () => {
    setSortDirection(prevDirection => (prevDirection === 'asc' ? 'desc' : 'asc'));
  };

  const navigate = useNavigate(); // Create a navigation function

  const handleButtonClick = () => {
    navigate('/Canvas'); // Specify the path you want to navigate to
  };

  return (
    <>
      <div className="header text-center">
        <h3>My Issues</h3>
        <button className="btn btn-primary mt-2" onClick={handleButtonClick}>
        Create new issue
        </button>
      </div>
      <div className="filters">
      <div className="filter-item">
          <label>Search</label>
          <input type="text" value={searchTerm} onChange={handleSearchChange} />
        </div>
       
        
        <div className="filter-item">
          <label>Date:</label>
          <button onClick={handleSortDirectionChange}>
            {sortDirection === 'asc' ? 'Ascending' : 'Descending'}
          </button>
        </div>
        <div className="filter-item">
          <label>Status:</label>
          <select value={statusFilter} onChange={handleStatusFilterChange}>
            <option value="All">All</option>
            <option value="To Do">To Do</option>
            <option value="In Progress">In Progress</option>
            <option value="Done">Done</option>
          </select>
        </div>
      </div>
      <div className="task-container">
        <div className="todo-list-header">
          <span className="header-item">Issue Key</span>
          <span className="header-item">Description</span>
          <span className="header-item">Date of Creation</span>
          <span className="header-item">Project</span>
          <span className="header-item">Status</span>
          <span className="header-item">Actions</span>
        </div>
        {filteredTasks.map((obj, index) => (
          <Card
            key={obj.id}
            taskObj={obj}
            index={index}
            deleteTask={deleteTask}
            updateListArray={updateListArray}
          />
        ))}
      </div>
      <CreateTask toggle={toggle} modal={modal} save={saveTask} />
    </>
  );
};

export default TodoList;
