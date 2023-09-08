import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react"



function App({cookList}) {

use 
let [money, setMoney] = useState(1);
let [clcOwned, setClcOwned] = useState(0);

let idleBuy = function() {
  setInterval(
    function() {
      setMoney((money) => money+(clcOwned));
  }, 999);
}

let clcBuy = function() {
    setClcOwned(++clcOwned);

  idleBuy();
}

let cookPress = function() {
  setMoney(money+1);
  console.log(money);
}

  return (
    <div className="App">
      {/* Crafting Menu */}
      <div className='craft'>
        <div>
          <h4>Crummy Line Cook</h4>
          <h5>Owned: {clcOwned}</h5>
          <button onClick={clcBuy}>Buy 1</button>
        </div>
      </div>
      {/* Click Area */}
      <div className='clickArea'>
          <span>{money}</span>
          <button onClick={cookPress}>Cook</button>
      </div>
    </div>
  );
}


export default App;
