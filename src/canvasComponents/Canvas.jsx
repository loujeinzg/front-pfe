import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';

const CanvasContainer = styled.div`
  margin-top: 10px;
  margin-right: 10px;
  background-color: white;
  width: calc(100vw - 250px); /* Calculate canvas width based on viewport width and sidebar width */
  height: 100vh; /* Take full height of viewport */
  overflow: auto; /* Enable scrolling if canvas overflows */
  flex: 1; /* Take remaining space in the parent container */
`;

const Canvas = ({ 
  context, setContext, currentTool, selectedColor, canvasRef, history, setHistory, redoStack, setRedoStack, setSelectedColor, brushThickness, eraserThickness, thickness, setThickness, opacity }) => {
  
  const [isDrawing, setIsDrawing] = useState(false);


  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    setContext(ctx);
  }, []);

  useEffect(() => {
    if (!context) return;

    const handleMouseDown = (event) => {
      if (currentTool === 'eyedropper') {
        const rect = canvasRef.current.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const pixel = context.getImageData(x, y, 1, 1).data;
        const rgbaColor = `rgba(${pixel[0]}, ${pixel[1]}, ${pixel[2]}, ${pixel[3] / 255})`;
        // addSwatch(rgbaColor); // Add sampled color to swatches panel
      } else {
        setIsDrawing(true);
        const rect = canvasRef.current.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        context.beginPath();
        context.moveTo(x, y);
      }
    };

    const handleMouseMove = (event) => {
      if (!isDrawing) return;
      const rect = canvasRef.current.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      if (currentTool === 'eraser') {
        // Set color to white when using eraser
        context.strokeStyle = '#ffffff';
         // Set eraser thickness
         context.lineWidth = thickness;
      } else {
        // Restore selected color for other tools
        context.strokeStyle = selectedColor;
        context.lineWidth = currentTool === 'pen' ? thickness : brushThickness;
      }

      context.lineTo(x, y);
      context.stroke();
      
    };

    const handleMouseUp = () => {
      setIsDrawing(false);
      context.closePath();
      
      addToHistory();
      
      
    };

    const handleMouseLeave = () => {
      setIsDrawing(false);
      
    };

    const canvasElement = canvasRef.current;

    if (canvasElement) {
      canvasElement.addEventListener('mousedown', handleMouseDown);
      canvasElement.addEventListener('mousemove', handleMouseMove);
      canvasElement.addEventListener('mouseup', handleMouseUp);
      canvasElement.addEventListener('mouseleave', handleMouseLeave);
    }
  
    return () => {
      if (canvasElement) {
        canvasElement.removeEventListener('mousedown', handleMouseDown);
        canvasElement.removeEventListener('mousemove', handleMouseMove);
        canvasElement.removeEventListener('mouseup', handleMouseUp);
        canvasElement.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [context, isDrawing, selectedColor, currentTool, canvasRef,]);

  useEffect(() => {
    if (!context) return;

    const resetContextParameters = () => {
        // Reset drawing parameters
        context.strokeStyle = '#000000'; // Default color
        context.lineWidth = 1; // Default line width
        context.globalAlpha = 1; // Default opacity
        context.lineCap = 'butt'; // Default line cap
        context.lineJoin = 'miter'; // Default line join
        context.setLineDash([]); // Reset line dash

        // Reset context properties
        context.shadowBlur = 0; // Reset shadow blur
        context.shadowColor = 'rgba(0, 0, 0, 0)'; // Reset shadow color
        context.shadowOffsetX = 0; // Reset shadow offset x
        context.shadowOffsetY = 0; // Reset shadow offset y
    };

    switch (currentTool) {
        case 'pen':
            context.strokeStyle = selectedColor;
            context.lineWidth = 2;
            break;

        case 'highlighter':
            context.strokeStyle = selectedColor;
            context.lineWidth = 25;
            context.globalAlpha = 0.3;
            context.lineCap = 'round';
            context.lineJoin = 'round';
            context.strokeOpacity = 0.5;
            break;

        case 'marker':
            context.strokeStyle = selectedColor;
            context.lineWidth = 8;
            context.globalAlpha = 0.5;
            context.lineCap = 'round';
            context.lineJoin = 'round';
            break;

        case 'pencil':
            context.strokeStyle = selectedColor;
            context.lineWidth = 3;
            context.globalAlpha = 0.7;
            context.lineCap = 'butt';
            context.lineJoin = 'miter';
            break;

        case 'oilPaint':
            context.strokeStyle = selectedColor;
            context.lineWidth = 25;
            context.globalAlpha = 0.7;
            context.lineCap = 'round';
            context.lineJoin = 'round';
            context.setLineDash([5, 10]);
            break;

        case 'watercolor':
            context.strokeStyle = selectedColor;
            context.lineWidth = 8;
            context.globalAlpha = 0.7;
            context.lineCap = 'round';
            context.lineJoin = 'round';
            context.shadowBlur = 10;
            context.shadowColor = selectedColor;
            context.shadowOffsetX = 5;
            context.shadowOffsetY = 5;
            break;

        default:
            break;
    }

    // Cleanup function when component unmounts or currentTool changes
    return resetContextParameters;
}, [context, currentTool, selectedColor]);


  

  const addToHistory = () => {
    
    const canvasCopy = canvasRef.current.toDataURL();
    setHistory([...history, canvasCopy]);
    setRedoStack([]); // Clear redo stack when new action is performed
  };

  useEffect(() => {
    if (!context) return;

    // Set thickness and opacity for brush and eraser
    context.lineWidth = currentTool === 'pen' ? thickness : eraserThickness;
    context.lineWidth = currentTool === 'erase' ? thickness : eraserThickness;
    context.globalAlpha = opacity;
  }, [context, currentTool, brushThickness, eraserThickness, thickness, opacity]);



  return (
    <CanvasContainer>
      <canvas ref={canvasRef}  width={window.innerWidth} /* Set canvas width to window inner width */
        height={window.innerHeight} /* Set canvas height to window inner height */
        style={{ border: '1px solid black' }}></canvas>
     
    </CanvasContainer>
  );
};

export default Canvas;
