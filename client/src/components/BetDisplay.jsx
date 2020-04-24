import React from 'react';

const BetDisplay = props => {
    return <div style={{display:'flex', justifyContent:'center', width: '100%', color:'white', marginTop: '1rem', marginBottom:'1rem'}}>
            <h2>Bet: <span style={{color:'#F67280'}}>{props.bet} credits</span></h2>
    </div>
}

export default BetDisplay;