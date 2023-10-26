
import './App.css';
import React, { useEffect, useState } from "react"
import LineCooks from './lineCooks';
import './lineCooks.css'


function App() {

// variables
let [money, setMoney] = useState(1);
let [intervalID, setIntervalID] = useState(null);

// 
useEffect(() => {
  if(intervalID) {
    return () => clearInterval(intervalID);
  }
}, [intervalID])


// cook point button function
let cookPress = function() {
  setMoney(money+1);
  console.log(money);
}

// buy cook function
function buyPress(increaseAmt) {
  if(!intervalID) {
    let id = setInterval(() => {
      setMoney((money) => money + increaseAmt);
    }, 1000);
    setIntervalID(id);
  }
}

// Clear idle point increase
function clearPress() {
  setMoney(0);
  clearInterval(intervalID);
  setIntervalID(null);
}

// MAIN PAGE
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
