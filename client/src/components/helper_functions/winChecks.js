export const royalFlush = (card1, card2, card3, card4, card5) => {
    let hand = [card1, card2, card3, card4, card5];
    hand = hand.sort((x,y) => x.value - y.value);
    let suit = hand[0].suit;
    if(hand[0].value !== 10){
        return false;
    }
    for(let i=0; i<hand.length; i++){
        if(hand[i].suit !== suit){
            return false;
        }
    }
    for(let i=1; i<4; i++){
        if(hand[i].value - 1 !== hand[i-1].value){
            return false;
        }
    }
    return true;
}

export const straightFlush = (card1, card2, card3, card4, card5) => {
    let hand = [card1, card2, card3, card4, card5];
    hand = hand.sort((x,y) => x.value - y.value);
    let suit = hand[0].suit;
    for(let i=0; i<hand.length; i++){
        if(hand[i].suit !== suit){
            return false;
        }
    }
    if(hand[4].value === 14 && hand[3].value !== 14){
        if(hand[0].value===2 && hand[1].value===3 && hand[2].value===4 && hand[3].value===5){
            return true;
        }
    } 

    for(let i=1; i<5; i++){
        if(hand[i].value - 1 !== hand[i-1].value){
            return false;
    }
    }
    return true;
}

export const fourOfKind = (card1, card2, card3, card4, card5) => {
    let hand = [card1, card2, card3, card4, card5];
    let winArr = [];
    let winArrAlt = [];
    if(card1.value === card2.value){
        winArr.push(card1, card2)
    } else {
        winArr.push(card1);
        winArrAlt.push(card2)
    }
    for(let i=2; i<5; i++){
        if(hand[i].value === winArr[0].value){
            winArr.push(hand[i]);
        } else if (winArrAlt.length > 0 && hand[i].value === winArrAlt[0].value){
            winArrAlt.push(hand[i]);
        }
    }
    return winArr.length === 4 || winArrAlt.length === 4;
}

export const fullHouse = (card1, card2, card3, card4, card5) => {
    let hand = [card1, card2, card3, card4, card5];
    let winOne = [];
    let winTwo = [];
    if(card1.value === card2.value){
        winOne.push(card1, card2);
        if(card3.value === card1.value){
            winOne.push(card3);
            if(card4.value !== card3.value && card4.value === card5.value){
                winTwo.push(card4, card5)
            }
        } else {
            winTwo.push(card3);
            for(let i=3; i<5; i++){
                if(hand[i].value === winOne[0].value){
                    winOne.push(hand[i]);
                } else if(hand[i].value === winTwo[0].value){
                    winTwo.push(hand[i]);
                }
            }
        }

    } else {
        winOne.push(card1);
        winTwo.push(card2);
        for(let i=2; i<5; i++){
            if(hand[i].value === winOne[0].value){
                winOne.push(hand[i]);
            } else if(hand[i].value === winTwo[0].value){
                winTwo.push(hand[i]);
            }
        }
    }
    
    return (winOne.length === 2 && winTwo.length === 3) || (winOne.length === 3 && winTwo.length === 2)
    
}

export const flush = (card1, card2, card3, card4, card5) => {
    let hand = [card1, card2, card3, card4, card5];
    let suit = card1.suit;
    let winCount = 0;
    for(let i=0; i<hand.length; i++){
        if(hand[i].suit === suit){
            winCount++
        }
    }
    return winCount === 5;
}

export const straight = (card1, card2, card3, card4, card5) => {
    let hand = [card1, card2, card3, card4, card5];
    hand = hand.sort((x,y) => x.value - y.value);
    //Check to see if final card is the only ace. If so, check it's alt value and return true if the other 4 cards 
    if(hand[4].value === 14 && hand[3].value !== 14){
        if(hand[0].value===2 && hand[1].value===3 && hand[2].value===4 && hand[3].value===5){
            return true;
        }
    } 
    //7,8,9,10,10
    for(let i=1; i<5; i++){
        if(hand[i].value - 1 !== hand[i-1].value){
            return false;
        }
    }
    return true;
}


export const threeOfKind = (card1, card2, card3, card4, card5) => {
    let hand = [card1, card2, card3, card4, card5];
    hand = hand.sort((x,y) => x.value - y.value);
    for (let i=0; i<hand.length; i++){
        if(hand[i+2] === undefined){return false}
        if(hand[i].value === hand[i+1].value && hand[i].value === hand[i+2].value){
            return true;
        }
    }
    return false;
}


export const twoPair = (card1, card2, card3, card4, card5) =>{
    let pairs = 0;
    let firstPair = 0;
    let hand = [card1, card2, card3, card4, card5];
    hand = hand.sort((x,y) => x.value - y.value);
    //[3,3,4,5,5] [6,9,9,14,14]
    for(let i=0; i<hand.length -1; i++){
        if(hand[i].value === hand[i+1].value){
            if(firstPair === 0){
                firstPair = hand[i].value;
                pairs++;
            } else {
                if(hand[i].value !== firstPair){
                    pairs++;
                }
            }
        }
    }
    return pairs === 2;
}
export const twoPairOld = (card1, card2, card3, card4, card5) => {
    let pairOne = [];
    let pairTwo = [];
    let hand = [card1, card2, card3, card4, card5];
    hand = hand.sort((x,y) => x.value - y.value);
    if(hand[0].value === hand[1].value){
        pairOne.push(hand[0], hand[1]);
        if(hand[2].value === pairOne[0].value){
            if(hand[3].value === hand[4].value){
                pairTwo.push(hand[3], hand[4]);
            }
        } else {
            if(hand[2].value === hand[3].value){pairTwo.push(hand[2], hand[3])}
            if(hand[2].value === hand[4].value){pairTwo.push(hand[2], hand[4])}
            if(hand[3].value === hand[4].value){pairTwo.push(hand[3], hand[4])}
        }
    }else{
        pairOne.push(hand[0]);
        pairTwo.push(hand[1]);
        for (let i=2; i<5; i++){
            if(hand[i].value === pairOne[0].value){
                pairOne.push(hand[i]);
            } else if(hand[i].value === pairTwo.value){
                pairTwo.push(hand[i]);
            }
        }
    }
    console.log(pairOne, pairTwo)
    return pairOne.length >= 2 && pairTwo.length >= 2;
}



export const jacksOrBetter = (card1, card2, card3, card4, card5) => {
    let unsortedHand = [card1, card2, card3, card4, card5];
    let hand  = unsortedHand.filter(card => card.value > 10);
    console.log(hand)
    hand = hand.sort((x,y) => x.value - y.value);
    for (let i=0; i<hand.length; i++){
        if(hand[i+1] === undefined){return false}
        if(hand[i].value === hand[i+1].value){
            return true;
        }
    }
    return false;
}

