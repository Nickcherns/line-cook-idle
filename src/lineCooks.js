import React from "react";




function LineCooks({ buyPress }) {

    {/* Set cook list */}
    let cookList = [
        {
            name: "Crumby Line Cook",
            cost: 50,
            increase: 1
        },
        {
            name: "Strung Out Cook",
            cost: 250,
            increase: 5
        },
        {
            name: "Junkie Cook",
            cost: 1000,
            increase: 25
        },
        {
            name: "High School Cook",
            cost: 10000,
            increase: 100
        },
    ];
    

    
    
    return (
        cookList.map((cook) => 
        <div className='cook1'>
            <span key={cook.name}>{cook.name}</span> 
            <span key={cook.cost}>Cost: {cook.cost}</span>
            <span key={cook.increase}>{cook.increase} Points /s </span>
            <button onClick={() => buyPress(cook.increase)}>Buy</button>
        </div>
        )
    );

}

export default LineCooks;