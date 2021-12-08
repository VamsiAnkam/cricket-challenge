let globals = require('./index');

/* Challenge-2 starts */
let generateCommentory = () => {
    let inputList = require('./input-files/commentory-input.json');
    if(inputList.length > 0) {
        inputList.forEach(element => {
            let retunedObj = globals.outcomePrediction(globals.bolwingCardsList[Math.floor(Math.random() * globals.bolwingCardsList.length)], element.battingCard, element.shotTiming);
            console.log(`COMMENTORY: ${retunedObj.commentory}`);
            console.log('------------------------------------------------------');
        });
    } else {
        console.log('Invalid Input');
    }
};
/* Challenge-2 ends */

generateCommentory();