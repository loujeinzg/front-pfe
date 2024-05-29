import React from 'react';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  background-color: #f5f5f5;
  padding: 20px; /* Increase padding for better spacing */
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center; /* Align items vertically */
  height: 100%; /* Ensure the sidebar takes full height */
`;

const SidebarButton = styled.button`
  border: none;
  color: #0d6efd;
  font-size: 16px;
  cursor: pointer;
  padding: 10px;
  border-radius: 5px;
  margin: 10px 0; /* Add margin for spacing */
  &:hover {
    background-color: #c7def7;
  }
`;

const SidebarTextarea = styled.textarea`
  background-color: #fff;
  border: solid;
  color: #0d6efd;
  font-size: 16px;
  padding: 10px;
  height: 400px;
  width: 100%;
  margin-bottom: 10px;
  border-radius: 5px;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center; /* Center the button horizontally */
  margin-bottom: 10px; /* Add some spacing below the button */
`;

const Sidebar = ({ onConvertToDigital, onConvertToTicket, text, canvasRef }) => {
  // Convert to digital process
  const convertToImage = () => {
    const canvas = canvasRef.current;
    const image = canvas.toDataURL(); // Convert canvas content to image data URL
    return image;
  };

  return (
    <SidebarContainer>
      <ButtonContainer>
        <SidebarButton onClick={onConvertToDigital}>Extract Text</SidebarButton>
      </ButtonContainer>
      <SidebarTextarea value={text} readOnly />
      <SidebarButton onClick={onConvertToTicket}>Export to Jira</SidebarButton>
    </SidebarContainer>
  );
};

export default Sidebar;
