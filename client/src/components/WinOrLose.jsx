import React from 'react';

const WinOrLose = props => {
    const styles = {
        winLoseContainer: {
            display: 'flex',
            width: '100%',
            justifyContent: 'center',
            color: 'white',
            marginTop: '1.5rem',
            marginBottom: '1.5rem',
        }
    }
    return <div style={styles.winLoseContainer}>
       <h2>{props.gameText}</h2>
    </div>
}

export default WinOrLose;