
import './App.css';
import React, { useEffect, useState } from "react"
import LineCooks from './lineCooks';
import './lineCooks.css'


function App() {
  
let [money, setMoney] = useState(1);
let [intervalId, setIntervalId] = useState(null);

useEffect(() => {
  if(intervalId) {
    return () => clearInterval(intervalId);
  }
}, [intervalId])

let cookPress = function() {
  setMoney(money+1);
  console.log(money);
}

function buyPress(increaseAmt) {
  if(!intervalId) {
    let id = setInterval(() => {
      setMoney((money) => money + increaseAmt);
    }, 1000);
    setIntervalId(id);
  }
}

function clearPress() {
  setMoney(0);
  clearInterval(intervalId);
  setIntervalId(null);
}

  return (
    <div className="App">
      {/* Crafting Menu */}
      <div className='craft'>
        <LineCooks buyPress={buyPress} />
      </div>
      {/* Click Area */}
      <div className='clickArea'>
          <span>{money}</span>
          <button onClick={cookPress}>Cook</button>
          <button onClick={clearPress}>Clear</button>
      </div>
    </div>
  );
}


export default App;
