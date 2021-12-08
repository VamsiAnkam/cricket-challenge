let globals = require('./index');

/* Challenge-1 starts */
let scorePrediction = () => {
    let inputList = require('./input-files/predict-score-input.json');
    if(inputList.length > 0) {
        inputList.forEach(element => {
            let retunedObj = globals.outcomePrediction(globals.bolwingCardsList[Math.floor(Math.random() * globals.bolwingCardsList.length)], element.battingCard, element.shotTiming);
            let scoreString = retunedObj.score == -1 ? `1 Wicket` : `${retunedObj.score} runs`;
            console.log(`SCORE: ${scoreString}`);
            console.log('------------------------------------------------------');
        });
    } else {
        console.log('Invalid Input');
    }
};
/* Challenge-1 ends */

scorePrediction();