import React from 'react';
import PlayingCard from './PlayingCard';

const CardContainer = () => {
    return <div className="cardContainer">
        <div className="playerCardContainer">
        <PlayingCard selected={false}/>
        <PlayingCard />
        <PlayingCard />
        <PlayingCard selected={false}/>
        <PlayingCard />        
        </div>
    </div>
}

export default CardContainer;