import React from 'react';
import "./Choose.css";

function ChooseNumber({ NumSelect, setSelect }) {
  const boxNumber = [1, 2, 3, 4, 5, 6];
  
  return (
    <div className='box-info'>
      <div className='box-container'>
        {boxNumber.map((box, i) => (
          <div 
            className='box1' 
            key={i} 
            onClick={() => setSelect(box)} 
            style={{ 
              backgroundColor: box === NumSelect ? "black" : "white", 
              color: box === NumSelect ? "white" : "black" 
            }}
          >
            {box}
          </div>
        ))}
      </div>

      <p style={{ color: "red" }}>Selected Number: {NumSelect}</p>
    </div>
  );
}

export default ChooseNumber;
