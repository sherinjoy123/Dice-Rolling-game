import React from 'react';
import "./Role.css"
function DiceRole({ roll, roleDice }) {
  return (
    <div className="container2">
      <div className="roll" onClick={roleDice}>
        <img src={`/Image/Dice/dice ${roll}.png`} alt="Dice" />
      </div>
      <p>Click to Roll</p>
      
    </div>
  );
}

export default DiceRole;
