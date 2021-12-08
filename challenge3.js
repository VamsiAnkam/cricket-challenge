let globals = require('./index');

/* Challenge-3 starts */
let superOverScenario = () => {
    let scoreBoard = 0;
    let fallenWickets = 0;
    let superOverInputObj = require('./input-files/super-over-input.json');
    if(superOverInputObj.inputs.length > 0) {
        for (let index = 0; index < superOverInputObj.inputs.length; index++) {
            let retunedObj = globals.outcomePrediction(globals.bolwingCardsList[Math.floor(Math.random() * globals.bolwingCardsList.length)], superOverInputObj.inputs[index].battingCard, superOverInputObj.inputs[index].shotTiming);
            if(retunedObj.score == -1) {
                fallenWickets++;
            } else {
                scoreBoard += retunedObj.score;
            }
            let scoreString = retunedObj.score == -1 ? `1 Wicket` : `${retunedObj.score} runs`;
            console.log(`COMMENTORY: ${retunedObj.commentory} (${scoreString})`);
            console.log(`SCORE BOARD: ${scoreBoard}/${fallenWickets}     (TARGET: ${superOverInputObj.targetScore})      BALLS: 0.${index+1}`);
            console.log('------------------------------------------------------');
            if(fallenWickets == 2) {
                console.log('-------------------- FINAL OUTPUT --------------------');
                console.log(`Oops... Lost the match by ${superOverInputObj.targetScore - scoreBoard} runs`);
                console.log('------------------------------------------------------');
                break;
            } else if(superOverInputObj.targetScore < scoreBoard) {
                console.log('-------------------- FINAL OUTPUT --------------------');
                console.log(`Congrats... Won the match by ${superOverInputObj.maxWickets - fallenWickets} Wickets`)
                console.log('------------------------------------------------------');
                break;
            } else if(superOverInputObj.targetScore == scoreBoard) {
                console.log('-------------------- FINAL OUTPUT --------------------');
                console.log(`Match Tied`);
                console.log('------------------------------------------------------');
                break;
            }
            if(index == superOverInputObj.inputs.length - 1 && superOverInputObj.targetScore > scoreBoard) {
                console.log('-------------------- FINAL OUTPUT --------------------');
                console.log(`Oops... Lost the match by ${superOverInputObj.targetScore - scoreBoard} runs`);
                console.log('------------------------------------------------------');
                break;
            }
        }
    } else {
        console.log('Invalid Input');
    }
};
/* Challenge-3 ends */

superOverScenario();