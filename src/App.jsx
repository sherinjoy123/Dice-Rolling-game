import { useState } from 'react';
import './App.css';
import Mainpage from './Components/Mainpage';
import Gameplay from './Components/Gameplay';

function App() {
  const [game, setGame] = useState(false);
  
  const clicked = () => {
     setGame((prevValue) => !prevValue);
  }

  return (
    <>
      {game ? <Gameplay /> : <Mainpage gameStart={clicked} />}
    </>
  );
}

export default App;

