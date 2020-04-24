import React from 'react';

const PlayingCard = props => {
    const styles = {
        playingCard: {
            border: props.selected ? '8px solid yellow' : 'none',
        }
    }
    return (
        <div>
           <img className="playingCard" src={require('../images/2H.png')} style={styles.playingCard} alt="playing card" />
        </div>
    )
}

export default PlayingCard;