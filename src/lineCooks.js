import React from "react";
import cookList from './cookList'

class lineCooks extends React.Component {

    constructor() {
        super();
        this.state = {
          // initial state
        };
      }

    render() {

    let cooks = cookList.map((cook) =>
        <div className='cook1'>
            <span key={cook.name}>{cook.name}</span> 
            <span key={cook.cost}>{cook.cost}</span>
            <span key={cook.increase}>{cook.increase}</span>
        </div>
    );
        
    return (
        {cooks}
    );


}
}
