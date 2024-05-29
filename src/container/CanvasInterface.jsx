import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import Navbar from '../canvasComponents/Navbar';
import Canvas from '../canvasComponents/Canvas';
import Sidebar from '../canvasComponents/Sidebar';
import SelectorPopup from './SelectorPopup';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh; /* Ensure the container fills the viewport vertically */
`;

const NavbarContainer = styled.div`
  flex: 0; /* Take the minimum height necessary */
`;

const ContentContainer = styled.div`
  flex: 1; /* Take the remaining space */
  display: flex;
`;

const CanvasContainer = styled.div`
  flex: 1; /* Take equal space as Sidebar */
`;

const SidebarContainer = styled.div`
  flex: 1; /* Take equal space as Canvas */
  max-width: 250px; /* Limit width to 250px */
`;

function CanvasInterface() {
  const [currentTool, setCurrentTool] = useState('pen');
  const [selectedColor, setSelectedColor] = useState('#000000');
  const [history, setHistory] = useState([]);
  const [redoStack, setRedoStack] = useState([]);
  const canvasRef = useRef(null);
  const [context, setContext] = useState(null);
  const [textInput, setTextInput] = useState('');
  const [brushThickness, setBrushThickness] = useState(2);
  const [thickness, setThickness] = useState(2);
  const [isSelectorPopupOpen, setSelectorPopupOpen] = useState(false);

  const toggleSelectorPopup = () => {
    setSelectorPopupOpen(!isSelectorPopupOpen);
  };

  const handleConvertToDigital = () => {
    console.log('Converting to digital:', textInput);
  };

  const handleConvertToTicket = () => {
    toggleSelectorPopup();
  };

  const handleTextChange = (e) => {
    setTextInput(e.target.value);
  };

  return (
    <Container>
      <NavbarContainer>
        <Navbar
          setCurrentTool={setCurrentTool}
          setSelectedColor={setSelectedColor}
          setHistory={setHistory}
          setRedoStack={setRedoStack}
          history={history}
          redoStack={redoStack}
          canvasRef={canvasRef}
          context={context}
          brushThickness={brushThickness}
          setBrushThickness={setBrushThickness}
          thickness={thickness}
          setThickness={setThickness}
        />
      </NavbarContainer>
      <ContentContainer>
        <CanvasContainer>
          <Canvas
            currentTool={currentTool}
            selectedColor={selectedColor}
            history={history}
            setHistory={setHistory}
            redoStack={redoStack}
            setRedoStack={setRedoStack}
            canvasRef={canvasRef}
            context={context}
            setContext={setContext}
            setSelectedColor={setSelectedColor}
            thickness={thickness}
            setThickness={setThickness}
          />
        </CanvasContainer>
        <SidebarContainer>
          <Sidebar
            onConvertToDigital={handleConvertToDigital}
            onConvertToTicket={handleConvertToTicket}
            text={textInput}
            canvasRef={canvasRef}
          />
        </SidebarContainer>
      </ContentContainer>
      <SelectorPopup
        modal={isSelectorPopupOpen}
        toggle={toggleSelectorPopup}
        projects={['Project 1', 'Project 2', 'Project 3']} // Example projects data
        members={['Member 1', 'Member 2', 'Member 3']} // Example members data
        save={(selection) => console.log('Selection saved:', selection)}
      />
    </Container>
  );
}

export default CanvasInterface;
