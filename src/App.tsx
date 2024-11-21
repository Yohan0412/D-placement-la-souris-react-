import React, { useState } from 'react';
import './App.css';

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = (e) => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      setPosition({
        x: e.clientX,
        y: e.clientY
      });
    }
  };

  return (
    <div className="App"
         onMouseMove={handleMouseMove}
         onMouseUp={handleMouseUp}>
      <div
        className="draggable"
        onMouseDown={handleMouseDown}
        style={{
          position: 'absolute',
          left: position.x,
          top: position.y,
          cursor: 'pointer',
          width: '50px',
          height: '50px',
          backgroundColor: 'red'
        }}
      >
      </div>
    </div>
  );
}

export default App;
