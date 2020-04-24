import React from 'react';

const GameButton = props => {
    return(
        <div>
            <button className="gameButton" onClick={props.onClick}>{props.title}</button>
        </div>
    )
}


export default GameButton;