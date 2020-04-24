import React from 'react';

const AccountDisplay = ({balance, wins, winPer}) => {
    return <div className="acctContainer">
        <div style={{textAlign:'center', color:'white'}}>
            <h2>Game Info</h2>
            </div>
            <div className="infoContainer">
            <h3>Balance: <span style={{color:"#F67280"}}>{balance}</span> credits</h3>
            <h3>Hands Won: <span style={{color:"#F67280"}}>{wins}</span></h3>
            <h3>Win Percentage: <span style={{color:"#F67280"}}>{winPer}</span> %</h3>
            </div>
            <div style={{textAlign:'center', color:'white'}}>
            <button className="gameInfoBtn">New Game</button>
            </div>
    </div>
}


export default AccountDisplay;