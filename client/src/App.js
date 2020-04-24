import React from 'react';
import './App.css';
import CardContainer from './components/CardContainer';
import GameButtonContainer from './components/GameButtonContainer';
import WinningContainer from './components/WinningContainer';
import BetDisplay from './components/BetDisplay';
import WinOrLose from './components/WinOrLose';

function App() {
  return (
    <div className="appContainer">
      <div style={{display:'block', textAlign:'center'}}><h1>Video Poker</h1></div>
      <WinningContainer />
      <WinOrLose />
      <CardContainer />
      <BetDisplay bet={4} />
      <GameButtonContainer />
    </div>
  );
}

export default App;
