import React from 'react';
import Button from '@mui/material/Button';
import "./Main.css";

function Mainpage({ gameStart }) {
  return (
    <div className='container'>
      <img 
        src="https://www.freeiconspng.com/thumbs/dice-png/game-yatzy-dice-png-8.png" 
        alt="Dice Game" 
      />
      <div className='h1'>
        <h1 style={{color: "black"}}>Dice Rolling Game</h1>
        <Button 
          variant="contained" 
          style={{ backgroundColor: "red" }} 
          onClick={gameStart}
        >
          Play Now
        </Button>
      </div>
    </div>
  );
}

export default Mainpage;
