const shuffleCards = arrOfCards => {
    let shuffledArray = [];
    while(shuffledArray.length !== 52){
        console.log('loop hit')
        let randomNum = Math.floor(Math.random() * 52);
        let card = arrOfCards[randomNum];
        if(!shuffledArray.includes(card)){
            shuffledArray.push(card);
        }
    }
    return shuffledArray;
}

export default shuffleCards;
