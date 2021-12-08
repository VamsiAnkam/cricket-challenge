const globalVariables = require('./variables.json');
const bolwingCardsList =  globalVariables.bolwingCardsList;
const battingCardsList =  globalVariables.battingCardsList;
const customMappingList = globalVariables.customMappingList;
const commentoryObj = globalVariables.commentoryObj;

let generateScore = (timeType) => {
    let scoreValue;
    switch (timeType) {
        case 'Late':
            var scoreList = [-1, 0];
            scoreValue = scoreList[Math.floor(Math.random() * scoreList.length)];
            break;
        case 'Early':
            var scoreList = [-1, 0, 1];
            scoreValue = scoreList[Math.floor(Math.random() * scoreList.length)];
            break;
        case 'Good':
            var scoreList = [1, 2, 3, 4, 5];
            scoreValue = scoreList[Math.floor(Math.random() * scoreList.length)];
            break;
        case 'Perfect':
            var scoreList = [4, 6];
            scoreValue = scoreList[Math.floor(Math.random() * scoreList.length)];
            break;
        case 'Wicket':
            scoreValue = -1;
            break;
        default:
            scoreValue = 0;
            break;
    }
    return scoreValue;
};

let getTimingCardOutput = (outcomeCase, timingValue) => {
    if(outcomeCase == 'dotCase') {
        if(timingValue == 'Late') {
            timingValue = 'Wicket';
        } else {
            timingValue = 'Early';
        }
    } else if(outcomeCase == 'worstCase') {
        if(timingValue == 'Early' || timingValue == 'Late') {
            timingValue = 'Wicket';
        } else {
            timingValue = 'Early';
        }
    }
    return timingValue;
};

let outcomePrediction = (bowlingCardInput, battingCardInput, timingCardInput) => {
    let bowlingCardIndex = bolwingCardsList.indexOf(bowlingCardInput);
    if(bowlingCardIndex >= 0) {
        let filteredData = customMappingList[bowlingCardIndex];
        for (const key in filteredData) {
            if(filteredData[key].indexOf(battingCardsList.indexOf(battingCardInput)) >= 0) {
                let timingCardOutput = getTimingCardOutput(key, timingCardInput);
                let scoreValue = generateScore(timingCardOutput);
                let commentory = commentoryObj[scoreValue][Math.floor(Math.random() * commentoryObj[scoreValue].length)];
                return { score: scoreValue, commentory: commentory };
            }
        }
    } else {
        console.log('Invalid Input');
    }
};

exports.bolwingCardsList = bolwingCardsList;
exports.outcomePrediction = outcomePrediction;