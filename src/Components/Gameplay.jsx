import React, { useState } from 'react';
import Score from './Score';
import ChooseNumber from './ChooseNumber';
import DiceRole from './DiceRole';

import "./play.css"

function Gameplay() {
    const [NumSelect, setSelectNumber] = useState(0);
    const [roll, setRole] = useState(1);
    const [score, setScore] = useState(0);

    const random = (s, g) => {
        return Math.floor(Math.random() * (g - s + 1) + s);
    };

    const roleDice = () => {
        const randomNumber = random(1, 6);
        setRole(randomNumber);

        if (!NumSelect) {
           alert("you have not selected  any Number...")
        }

        if (NumSelect === randomNumber) {
            setScore((p) => p + randomNumber);
        } else {
            setScore((p) => p - 1);
        }
    };

    // Define ResetDice function outside of roleDice
    const ResetDice = () => {
        setScore(0);
    };

    return (
        <div className="main1 bg-primary">
            <div className="main">
                <Score score={score} />
                <ChooseNumber NumSelect={NumSelect} setSelect={setSelectNumber} />
            </div>
            <DiceRole roll={roll} roleDice={roleDice} />
            <div className="btns">
               <button onClick={ResetDice}>Reset</button>
            </div>
        </div>
    );
}

export default Gameplay; 
