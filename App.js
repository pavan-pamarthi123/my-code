import React, { useState } from "react";
import "./App.css";

function App() {
  const [score, setScore] = useState(0);
  const [mole, setMole] = useState();
  const [timer, setTimer] = useState();

  const generateTimer = () => {
    setMole(Math.floor(Math.random() * 6));
  };

  const startGame = () => {
    setScore(0);
    const timer = setInterval(generateTimer, 1000);
    setTimer(timer);
    // console.log('start')
  };

  const endGame = () => {
    clearInterval(timer);
    setMole();
    // console.log('clicked')
  };

  const clickHandler = () => {
    setScore(score + 1);
  };

  return (
    <div>
      <h1>
        Whack a mole game! <span>Score: {score}</span>
      </h1>
      <button onClick={startGame}>Start Game</button>
      <br />
      <button onClick={endGame}>End Game</button>
      <div className="container">
        {Array(6)
          .fill()
          .map((m, n) => {
            return (
              <>
                <div className="dirt">
                {mole === n && (
                   <div>
                  <div className="mole">
                   
                    <img
                      src="https://olgbh.csb.app/mole.svg"
                      className="mole-image"
                      alt="mole"
                      onClick={clickHandler}
                    />
                    </div>
                    
                  </div>
                )}
                </div>
                
              </>
            );
          })}
      </div>
    </div>
  );
}

export default App;
