import React, { useEffect, useState } from "react";




function LineCooks({ buyPress }) {


    
    let [ownedAmt, setOwnedAmt] = useState(0);


    {/* Set cook list */}
    let cookList = [
        {
            key: 1,
            name: "Crumby Line Cook",
            cost: 50,
            increase: 1,
            owned: ownedAmt,
            isOpen: setOwnedAmt(ownedAmt+1),
        },
        {
            key: 2,
            name: "Strung Out Cook",
            cost: 250,
            increase: 5,
            owned: ownedAmt,
            isOpen: setOwnedAmt(ownedAmt+1),
        },
        {
            key: 3,
            name: "Junkie Cook",
            cost: 1000,
            increase: 25,
            owned: ownedAmt,
            isOpen: setOwnedAmt(ownedAmt+1),
        },
        {
            key: 4,
            name: "High School Cook",
            cost: 10000,
            increase: 100,
            owned: ownedAmt,
            isOpen: setOwnedAmt(ownedAmt+1),
        },
    ];
    
    function ownedIncrease(owned) {
        console.log(owned);
        setOwnedAmt(owned+1);
    }
    
    let cookBuyPress = (isOpen, owned, increase) => {
        ownedIncrease(owned); 
        buyPress(increase);

    }
    
    return (
        cookList.map((cookItem) => 
        <div className='cook1' key={cookItem.key}>
            <span>{cookItem.name}</span> 
            <span>Cost: {cookItem.cost}</span>
            <span>{cookItem.increase} Points /s </span>
            <button onClick={() => {
                                ownedIncrease(cookItem.owned); 
                                buyPress(cookItem.increase);
                                cookItem.isOpen;
                            }}>Buy</button>
            <span> Owned: {cookItem.owned = ownedAmt}</span>
        </div>
        )
    );

}

export default LineCooks;