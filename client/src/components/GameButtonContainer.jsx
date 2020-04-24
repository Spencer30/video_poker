import React from 'react';
import GameButton from './GameButton';

const GameButonContainer = () => {
    return <div style={styles.buttonContainer}>
        <div style={styles.buttonRow}>
        <GameButton title="Bet One" />
        <GameButton title="Deal" />
        <GameButton title="Bet Max" />
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