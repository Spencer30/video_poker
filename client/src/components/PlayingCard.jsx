import React from 'react';

const PlayingCard = props => {
    let cardImg = props.card.img;
    const styles = {
        playingCard: {
            border: props.selected ? '4px solid yellow' : 'none',
        }
    }
    return (
        <div onClick={props.selectCard} >
           <img className={props.selected ? 'playingCardSelected' : 'playingCard'} src={cardImg} style={styles.playingCard} alt="playing card" />
        </div>
    )
}

export default PlayingCard;