import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react"
import cookList from './cookList'



function App({cookList}) {

 
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
        <lineCooks/>
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
