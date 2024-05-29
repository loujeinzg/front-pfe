import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input } from 'reactstrap';

const SelectorPopup = ({ modal, toggle, save, projects = [], members = [] }) => {
  const [selectedProject, setSelectedProject] = useState('');
  const [selectedMember, setSelectedMember] = useState('');
  const [error, setError] = useState('');

  const handleSave = (e) => {
    e.preventDefault();
    if (!selectedProject || !selectedMember) {
      setError('All fields are required');
      return;
    }
    const selectionObj = {
      project: selectedProject,
      member: selectedMember,
    };
    save(selectionObj);
    setSelectedProject('');
    setSelectedMember('');
    setError('');
    toggle();
  };

  const handleCancel = () => {
    setSelectedProject('');
    setSelectedMember('');
    setError('');
    toggle();
  };

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={handleCancel}>Select Project and Member</ModalHeader>
      <ModalBody>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <form onSubmit={handleSave}>
          <FormGroup>
            <Label for="projectSelect">Select Project</Label>
            <Input
              type="select"
              name="project"
              id="projectSelect"
              value={selectedProject}
              onChange={(e) => setSelectedProject(e.target.value)}
            >
              <option value="">Select a project</option>
              {projects.map((project, index) => (
                <option key={index} value={project}>
                  {project}
                </option>
              ))}
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="memberSelect">Select Member</Label>
            <Input
              type="select"
              name="member"
              id="memberSelect"
              value={selectedMember}
              onChange={(e) => setSelectedMember(e.target.value)}
            >
              <option value="">Select a member</option>
              {members.map((member, index) => (
                <option key={index} value={member}>
                  {member}
                </option>
              ))}
            </Input>
          </FormGroup>
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

export default SelectorPopup;
