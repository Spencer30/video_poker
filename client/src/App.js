import React, { useState } from 'react';
import './App.css';
import CardContainer from './components/CardContainer';
import GameButtonContainer from './components/GameButtonContainer';
import WinningContainer from './components/WinningContainer';
import BetDisplay from './components/BetDisplay';
import WinOrLose from './components/WinOrLose';
import playingCards from './components/playing_cards/playingCards';
import shuffleCards from './components/helper_functions/shuffleCards';


let handOver = false;
function App() {
  const [slotOne, setSlotOne] = useState(playingCards[17]);
  const [slotTwo, setSlotTwo] = useState(playingCards[13]);
  const [slotThree, setSlotThree] = useState(playingCards[9]);
  const [slotFour, setSlotFour] = useState(playingCards[5]);
  const [slotFive, setSlotFive] = useState(playingCards[1]); //NEED TO CHANGE THIS
  const [selectOne, setSelectOne] = useState(false);
  const [selectTwo, setSelectTwo] = useState(false);
  const [selectThree, setSelectThree] = useState(false);
  const [selectFour, setSelectFour] = useState(false);
  const [selectFive, setSelectFive] = useState(false);
  const [balance, setBalance] = useState(50);
  const [wins, setWins] = useState(0);
  const [winPer, setWinPer] = useState(0);
  const [bet, setBet] = useState(1);

  const selectCardOne = () => setSelectOne(pre => !pre);
  const selectCardTwo = () => setSelectTwo(pre => !pre);
  const selectCardThree = () => setSelectThree(pre => !pre);
  const selectCardFour = () => setSelectFour(pre => !pre);
  const selectCardFive = () => setSelectFive(pre => !pre);
  const maxBet = () => setBet(() => 4);
  const handleBetOne = () => {
    if(bet !== 4){
      setBet(pre => pre + 1);
    } else {
      setBet(() => 1)
    }
  }

  const deal = () => {
    if(!handOver){
      let deckOfCards = shuffleCards(playingCards);

      console.log(deckOfCards)
      console.log(playingCards)
    }
  }



  return (
    <div className="appContainer">
      <div style={{display:'block', textAlign:'center'}}><h1>Video Poker</h1></div>
      <WinningContainer balance={balance} wins={wins} winPer={winPer} />
      <WinOrLose />
      <CardContainer 
        slotOne={slotOne} 
        slotTwo={slotTwo} 
        slotThree={slotThree} 
        slotFour={slotFour} 
        slotFive={slotFive}
        selectOne={selectOne}
        selectCardOne={selectCardOne}
        selectTwo={selectTwo}
        selectCardTwo={selectCardTwo}
        selectThree={selectThree}
        selectCardThree={selectCardThree}
        selectFour={selectFour}
        selectCardFour={selectCardFour}
        selectFive={selectFive}
        selectCardFive={selectCardFive}/>
      <BetDisplay bet={bet} />
      <GameButtonContainer betOne={handleBetOne} maxBet={maxBet} deal={deal}/>
    </div>
  );
}

export default App;
