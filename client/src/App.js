import React, { useState } from 'react';
import './App.css';
import CardContainer from './components/CardContainer';
import GameButtonContainer from './components/GameButtonContainer';
import WinningContainer from './components/WinningContainer';
import BetDisplay from './components/BetDisplay';
import WinOrLose from './components/WinOrLose';
import playingCards from './components/playing_cards/playingCards';
import shuffleCards from './components/helper_functions/shuffleCards';
import { royalFlush, straightFlush, fourOfKind, fullHouse, flush, straight, threeOfKind, jacksOrBetter, twoPair } from './components/helper_functions/winChecks';

let cardOne; 
let cardTwo; 
let cardThree; 
let cardFour; 
let cardFive;
let cardOneHold;
let cardTwoHold;
let cardThreeHold;
let cardFourHold;
let cardFiveHold;
let deckOfCards;
const dealLogic = () => {
  if(dealState===1){
    deckOfCards = shuffleCards(playingCards);
    cardOne = deckOfCards.shift();
    cardTwo = deckOfCards.shift();
    cardThree = deckOfCards.shift();
    cardFour = deckOfCards.shift();
    cardFive = deckOfCards.shift();
    return [cardOne, cardTwo, cardThree, cardFour, cardFive];
  }else if (dealState ===2){
    // console.log(cardOne)
    // console.log(cardTwo)
    // console.log(cardThree)
    // console.log(cardFour)
    // console.log(cardFive)
    if(!cardOneHold){
      cardOne = deckOfCards.shift();
    }
    if(!cardTwoHold){
      cardTwo =deckOfCards.shift();
    }
    if(!cardThreeHold) {
      cardThree = deckOfCards.shift();
    }
    if(!cardFourHold){
      cardFour = deckOfCards.shift();
    }
    if(!cardFiveHold) {
      cardFive = deckOfCards.shift();
    }
    // console.log(cardOne)
    // console.log(cardTwo)
    // console.log(cardThree);
    // console.log(cardFour)
    // console.log(cardFive)
    return [cardOne, cardTwo, cardThree, cardFour, cardFive];
  }
}

let dealState = 0;
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
  const [gameText, setGameText] = useState('Click Deal To Start A New Hand');

  //Hold the Cards - puts yellow border around it
  const selectCardOne = () => {
    console.log(dealState)
    if(dealState !== 2){return}
    setSelectOne(pre => !pre);
  };
  const selectCardTwo = () => {
    if(dealState !== 2){return}
    setSelectTwo(pre => !pre);
  };
  const selectCardThree = () => {
    if(dealState !== 2){return}
    setSelectThree(pre => !pre);
  }
  const selectCardFour = () => {
    if(dealState !== 2){return}
    setSelectFour(pre => !pre);
  };
  const selectCardFive = () => {
    if(dealState !== 2){return}
    setSelectFive(pre => !pre)
  };

  //Handle the Bets
  const maxBet = () => {
    if(dealState !== 0){
      return;
    }
    setBet(() => 4)
  }
  const handleBetOne = () => {
    if(dealState !== 0){
      return;
    }
    if(bet !== 4){
      setBet(pre => pre + 1);
    } else {
      setBet(() => 1)
    }
  }

  //Deal the cards
  const deal = () => {
    if(dealState === 0){
      dealState++
    }
    if(dealState === 1){
      dealLogic();
      setBalance(pre => pre - bet);
      setSlotOne(() => cardOne);
      setSlotTwo(() => cardTwo);
      setSlotThree(() => cardThree);
      setSlotFour(() => cardFour);
      setSlotFive(() => cardFive);
      setGameText(() => 'Click to Hold Cards')

      dealState++
      return;
    }
    if(dealState === 2){
      let winner;
      let winMessage = 'You Lose!';

      //Check and see what cards are being held
      if(selectOne) {
        cardOneHold = true;
      }
      if(selectTwo) {
        cardTwoHold = true;
      }
      if(selectThree) {
        cardThreeHold = true;
      }
      if(selectFour) {
        cardFourHold = true;
      }
      if(selectFive){
        cardFiveHold = true;
      }
      //Deal New Cards
      dealLogic();
      //Set State of The New Cards
      setSlotOne(() => cardOne);
      setSlotTwo(() => cardTwo);
      setSlotThree(() => cardThree);
      setSlotFour(() => cardFour);
      setSlotFive(() => cardFive);

      //Check for game winner
      let isJacks = jacksOrBetter(cardOne, cardTwo, cardThree, cardFour, cardFive);
      let isTwoPair = twoPair(cardOne, cardTwo, cardThree, cardFour, cardFive);
      let isThreeKind = threeOfKind(cardOne, cardTwo, cardThree, cardFour, cardFive);
      let isStraight = straight(cardOne, cardTwo, cardThree, cardFour, cardFive);
      let isFlush = flush(cardOne, cardTwo, cardThree, cardFour, cardFive);
      let isFullHouse = fullHouse(cardOne, cardTwo, cardThree, cardFour, cardFive);
      let isFourOfKind = fourOfKind(cardOne, cardTwo, cardThree, cardFour, cardFive);
      let isStraightFlush = straightFlush(cardOne, cardTwo, cardThree, cardFour, cardFive);
      let isRoyalFlush = royalFlush(cardOne, cardTwo, cardThree, cardFour, cardFive);

      if(isJacks){
        winMessage = 'You Win! Jacks or Better!'
      }
      if(isTwoPair) {
        winMessage = 'You Win! Two Pair!'
      }
      if(isThreeKind){
        winMessage = 'You Win! Three of a Kind!'
      }
      if(isStraight) {
        winMessage = 'You Win! Straight!'
      }
      if(isFlush) {
        winMessage = 'You Win! Flush!'
      }
      if(isFullHouse) {
        winMessage = 'You Win! Full House!'
      }
      if(isFourOfKind) {
        winMessage = 'You Win! Four of a Kind!!'
      }
      if(isStraightFlush) {
        winMessage = 'You Win! Straight Flush!!!'
      }
      if(isRoyalFlush) {
        winMessage = 'You Win! ROYAL FLUSH!!!!'
      }
      //Turn selected to false
      setSelectOne(() => false);
      setSelectTwo(() => false);
      setSelectThree(() => false);
      setSelectFour(() => false);
      setSelectFive(() => false);

      //Calculate Balance, Wins and Win Percentage


      setGameText(() => winMessage);
      dealState=0;
      cardOneHold = false;
      cardTwoHold = false;
      cardThreeHold = false;
      cardFourHold = false;
      cardFiveHold = false;
    }
  }

// console.log(playingCards[8])

  return (
    <div className="appContainer">
      <div style={{display:'block', textAlign:'center'}}><h1>Video Poker</h1></div>
      <WinningContainer balance={balance} wins={wins} winPer={winPer} />
      <WinOrLose gameText={gameText}/>
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


  //This was used for TESTING PURPOSES

      // let royalTest = royalFlush(playingCards[5], playingCards[9], playingCards[1], playingCards[13], playingCards[17]);
      // let straightFlushTest = straightFlush(playingCards[45], playingCards[49], playingCards[1], playingCards[41], playingCards[37])
      // console.log(playingCards[45], playingCards[49], playingCards[1], playingCards[41], playingCards[37])
      // console.log(straightFlushTest);
      // let fourOfKindTest = fourOfKind(playingCards[7], playingCards[6], playingCards[5], playingCards[40], playingCards[37])
      // console.log(playingCards[7], playingCards[6], playingCards[5], playingCards[40], playingCards[37])
      // console.log(fourOfKindTest);
      // let fullHouseTest = fullHouse(playingCards[7], playingCards[6], playingCards[41], playingCards[42], playingCards[5])
      // console.log(playingCards[7], playingCards[6], playingCards[41], playingCards[42], playingCards[5])
      // console.log(fullHouseTest);
      // let flushTest = flush(playingCards[7], playingCards[11], playingCards[15], playingCards[23], playingCards[1])
      //           console.log(playingCards[7], playingCards[11], playingCards[15], playingCards[23], playingCards[1])
      // console.log(flushTest);
      // let straightTest = straight(playingCards[0], playingCards[51], playingCards[38], playingCards[40], playingCards[44])
      //                 console.log(playingCards[0], playingCards[51], playingCards[38], playingCards[40], playingCards[44])
      // console.log(straightTest);
      // let threeKindTest = threeOfKind(playingCards[0], playingCards[51], playingCards[26], playingCards[5], playingCards[4])
      //                     console.log(playingCards[0], playingCards[51], playingCards[26], playingCards[5], playingCards[4])
      // console.log(threeKindTest);
      // let twoPairTest = twoPair(playingCards[7], playingCards[6], playingCards[41], playingCards[42], playingCards[5])
      //               console.log(playingCards[7], playingCards[6], playingCards[41], playingCards[42], playingCards[5])
      //         console.log(twoPairTest);

      // let jacksTest = jacksOrBetter(playingCards[13], playingCards[51], playingCards[26], playingCards[21], playingCards[15])
      //                   console.log(playingCards[13], playingCards[51], playingCards[26], playingCards[21], playingCards[15])
      // console.log(jacksTest);