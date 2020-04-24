import React from 'react';
import GameButton from './GameButton';

const GameButonContainer = ({betOne, maxBet, deal}) => {
    return <div style={styles.buttonContainer}>
        <div style={styles.buttonRow}>
        <GameButton title="Bet One" onClick={betOne}/>
        <GameButton title="Deal" onClick={deal}/>
        <GameButton title="Bet Max" onClick={maxBet} />
        </div>
    </div>
}

const styles = {
    buttonContainer: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
    },
    buttonRow: {
        display: 'flex',
        justifyContent: 'space-evenly',
        width: '70%',
    }
}

export default GameButonContainer;