import React, { useState } from 'react';
import { FaPaintBrush, FaEraser, FaUndo, FaRedo, FaPalette, FaTrash, FaPenAlt, FaPencilAlt, FaPenFancy, FaBrush, FaHighlighter  } from 'react-icons/fa';
import { PiMarkerCircleBold } from "react-icons/pi";
import styled from 'styled-components';
import { SketchPicker } from 'react-color';

const NavbarContainer = styled.div`
  background-color: #4164e3;
  padding: 10px 300px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center; /* Align items vertically */
`;

const ToolButton = styled.button`
  background-color: transparent;
  border: none;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  padding: 10px;
  position: relative; /* Add this to use absolute positioning for the slider */
`;

const ThicknessSlider = styled.input`
  position: absolute;
  top: 50px; /* Position the slider below the button */
  left: 50%;
  transform: translateX(-50%) rotate(90deg); /* Rotate slider 90 degrees and center it */
  height: 150px; /* Adjust height as needed */
  display: ${(props) => (props.visible ? 'block' : 'none')}; /* Toggle visibility */
`;

const Navbar = ({  context, 
    canvasRef, setCurrentTool, setSelectedColor, setHistory, setRedoStack, history, redoStack, setThickness, thickness }) => {
  const [displayColorPicker, setDisplayColorPicker] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedBrush, setSelectedBrush] = useState('');
  const [selColor, setSelColor] = useState('#000000');
  const [showThicknessSlider, setShowThicknessSlider] = useState(false); // New state for slider visibility

  const handleSelectBrush = (brush) => {
    setCurrentTool(brush);
    setIsDropdownOpen(false);
  };

  const handleChangeColor = (color) => {
    setSelectedColor(color.hex);
    setSelColor(color.hex);
    setCurrentTool('pen', color);
  };

  const brushIcons = {
    pen: <FaPenAlt />,
    highlighter: <FaHighlighter />,
    pencil: <FaPencilAlt />,
    marker: <PiMarkerCircleBold />,
    calligraphy: <FaPenFancy />,
    oilPaint: <FaBrush />,
    watercolor: <FaPaintBrush />,
  };

  const undo = () => {
    if (history.length < 1) return;
    setRedoStack([...redoStack, history.pop()]);
    const lastState = history[history.length - 1];
    const image = new Image();
    image.src = lastState;
    image.onload = () => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(image, 0, 0);
    };
  };

  const redo = () => {
    if (redoStack.length < 1) return;
    setHistory([...history, redoStack.pop()]);
    const nextRedoState = redoStack[redoStack.length - 1];
    const image = new Image();
    image.src = nextRedoState;
    image.onload = () => {
      const canvas = canvasRef.current;
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(image, 0, 0);
    };
  };

  const handleClearAll = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setHistory([]);
    setRedoStack([]);
  };

  const handleThicknessChange = (event) => {
    setThickness(event.target.value);
  };

  return (
    <NavbarContainer>
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <ToolButton onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
          {brushIcons[selectedBrush] || <FaPaintBrush />} {selectedBrush.charAt(0).toUpperCase() + selectedBrush.slice(1)}
        </ToolButton>
        <div style={{ position: 'absolute', top: 'calc(100% + 5px)', left: '0', zIndex: '2' }}>
          {isDropdownOpen && (
            <div style={{ position: 'absolute', top: 'calc(100% + 5px)', left: '0', zIndex: '2' }}>
              {['pen', 'marker', 'pencil', 'highlighter', 'calligraphy', 'watercolor', 'oilPaint'].map((brush) => (
                <button
                  key={brush}
                  onClick={() => handleSelectBrush(brush)}
                  style={{ fontSize: '20px', padding: '5px', backgroundColor: 'transparent', border: 'none' }}
                >
                  {brushIcons[brush]}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      <ToolButton onClick={() => { setCurrentTool('eraser'); setShowThicknessSlider(!showThicknessSlider); }}>
        <FaEraser />
        <ThicknessSlider
          type="range"
          min="1"
          max="20"
          value={thickness}
          onChange={handleThicknessChange}
          visible={showThicknessSlider}
        />
      </ToolButton>
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <ToolButton onClick={() => setDisplayColorPicker(!displayColorPicker)}>
          <FaPalette />
        </ToolButton>
        <div style={{ display: 'inline-block', marginLeft: '10px' }}>
          <div
            style={{
              width: '20px',
              height: '20px',
              backgroundColor: selColor,
              border: '1px solid #ccc',
              borderRadius: '50%',
              display: 'inline-block',
              verticalAlign: 'middle',
              marginRight: '5px',
            }}
          />
        </div>
        {displayColorPicker && (
          <div style={{ position: 'absolute', top: 'calc(100% + 5px)', left: '0', zIndex: '2' }}>
            <SketchPicker color={selColor} onChange={handleChangeColor} />
          </div>
        )}
      </div>
      <ToolButton onClick={undo}>
        <FaUndo />
      </ToolButton>
      <ToolButton onClick={redo}>
        <FaRedo />
      </ToolButton>
      <ToolButton onClick={handleClearAll}>
        <FaTrash />
      </ToolButton>
    </NavbarContainer>
  );
};

export default Navbar;
