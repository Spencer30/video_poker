import React from 'react';
import PlayingCard from './PlayingCard';

const CardContainer = props => {
    return <div className="cardContainer">
        <div className="playerCardContainer">
        <PlayingCard selected={props.selectOne} selectCard={props.selectCardOne} card={props.slotOne} />
        <PlayingCard selected={props.selectTwo} selectCard={props.selectCardTwo} card={props.slotTwo}/>
        <PlayingCard selected={props.selectThree} selectCard={props.selectCardThree} card={props.slotThree}/>
        <PlayingCard selected={props.selectFour} selectCard={props.selectCardFour} card={props.slotFour}/>
        <PlayingCard selected={props.selectFive} selectCard={props.selectCardFive} card={props.slotFive}/>      
        </div>
    </div>
}

export default CardContainer;