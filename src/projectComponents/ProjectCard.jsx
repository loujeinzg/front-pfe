import React, {useState} from 'react';
import EditProject from './EditProject'

const ProjectCard = ({projectObj, index, deleteProject, updateListArray}) => {
    const [modal, setModal] = useState(false);

    const colors = [
        {
            primaryColor : "#5D93E1",
            secondaryColor : "#ECF3FC"
        },
        {
            primaryColor : "#F9D288",
            secondaryColor : "#FEFAF1"
        },
        {
            primaryColor : "#5DC250",
            secondaryColor : "#F2FAF1"
        },
        {
            primaryColor : "#F48687",
            secondaryColor : "#FDF1F1"
        },
        {
            primaryColor : "#B964F7",
            secondaryColor : "#F3F0FD"
        }
    ]

    const toggle = () => {
        setModal(!modal);
    }

    const updateProject = (obj) => {
        updateListArray(obj, index)
    }

    const handleDelete = () => {
        deleteProject(index)
    }

    return (
        <div className = "project_card-wrapper mr-5">
            <div className = "project_card-top" style={{"backgroundColor": colors[index%5].primaryColor}}></div>
            <div className = "task-holder">
                <span className = "card-header name" style={{"backgroundColor": colors[index%5].secondaryColor, "borderRadius": "10px"}}>{projectObj.Name}</span>
                <p className = "mt-3 description">{projectObj.Description}</p>

                <div style={{"position": "absolute", "right" : "20px", "bottom" : "20px"}}>
                    <i className = "far fa-edit mr-3" style={{"color" : colors[index%5].primaryColor, "cursor" : "pointer"}} onClick = {() => setModal(true)}></i>
                    <i className="fas fa-trash-alt" style = {{"color" : colors[index%5].primaryColor, "cursor" : "pointer"}} onClick = {handleDelete}></i>
                </div>
        </div>
        <EditProject modal = {modal} toggle = {toggle} updateProject = {updateProject} projectObj = {projectObj}/>
        </div>
    );
};

export default ProjectCard;