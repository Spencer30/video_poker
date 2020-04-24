import React from 'react';

const AccountDisplay = () => {
    return <div className="acctContainer">
        <div style={{textAlign:'center', color:'white'}}>
            <h2>Game Info</h2>
            </div>
            <div className="infoContainer">
            <h3>Balance: </h3>
            <h3>Hands Won: </h3>
            <h3>Win Percentage:</h3>
            </div>
            <div style={{textAlign:'center', color:'white'}}>
            <button className="gameInfoBtn">New Game</button>
            </div>
    </div>
}


export default AccountDisplay;