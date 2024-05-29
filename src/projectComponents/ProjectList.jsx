import React, { useEffect, useState } from 'react';
import CreateProject from './CreateProject';
import ProjectCard from './ProjectCard';

const ProjectList = () => {
    const [modal, setModal] = useState(false);
    const [projectList, setProjectList] = useState([]);

    useEffect(() => {
        let arr = localStorage.getItem("projectList");
        if (arr) {
            let obj = JSON.parse(arr);
            setProjectList(obj);
        }
    }, []);

    const deleteProject = (index) => {
        let tempList = [...projectList]; // Create a copy of projectList
        tempList.splice(index, 1);
        localStorage.setItem("projectList", JSON.stringify(tempList)); // Use consistent key casing
        setProjectList(tempList);
    }

    const updateListArray = (obj, index) => {
        let tempList = [...projectList]; // Create a copy of projectList
        tempList[index] = obj;
        localStorage.setItem("projectList", JSON.stringify(tempList)); // Use consistent key casing
        setProjectList(tempList);
    }

    const toggle = () => {
        setModal(!modal);
    }

    const saveProject = (projectObj) => {
        let tempList = [...projectList]; // Create a copy of projectList
        tempList.push(projectObj);
        localStorage.setItem("projectList", JSON.stringify(tempList)); // Use consistent key casing
        setProjectList(tempList);
        setModal(false);
    }

    return (
        <>
            <div className="header text-center">
                <h3>My Projects</h3>
                <button className="btn btn-primary mt-2" onClick={() => setModal(true)}>Create Project</button>
            </div>
            <div className="project-container">
                {projectList && projectList.map((obj, index) => (
                    <ProjectCard
                        key={index} // Use project ID if available for better uniqueness
                        projectObj={obj}
                        index={index}
                        deleteProject={deleteProject}
                        updateListArray={updateListArray}
                    />
                ))}
            </div>
            <CreateProject toggle={toggle} modal={modal} save={saveProject} />
        </>
    );
};

export default ProjectList;
