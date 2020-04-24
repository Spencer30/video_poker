import React from 'react';
import { useState } from 'react';

const PlayingCard = props => {
    let cardImg = props.card.img;
    const styles = {
        playingCard: {
            border: props.selected ? '8px solid yellow' : 'none',
        }
    }
    return (
        <div onClick={props.selectCard}>
           <img className="playingCard"  src={cardImg} style={styles.playingCard} alt="playing card" />
        </div>
    )
}

export default PlayingCard;