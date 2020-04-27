import React from "react";
import WinningHands from "./WinningHands";
import AccountDisplay from "./AccountDisplay";

const WinningContainer = ({balance, wins, winPer, newGame}) => {
  return (
    <div style={styles.winContainer}>
      <div style={styles.rowContainer}>
        <div style={styles.winRow}>
          <WinningHands />
        </div>
        <div style={styles.acctRow}>
          <AccountDisplay balance={balance} wins={wins} winPer={winPer} newGame={newGame}/>
        </div>
      </div>
    </div>
  );
};

const styles = {
  winContainer: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },
  rowContainer: {
    display: "flex",
    justifyContent: "center",
    width: "70%",
    flexWrap: 'wrap'
  },
  winRow: {
    display: "flex",
    justifyContent: "space-evenly",
    flex: 2,
  },
  acctRow: {
    flex: 1,
  },
};
export default WinningContainer;
