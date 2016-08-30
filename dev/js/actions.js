
var GENERATE_NUMBER = 'GENERATE_NUMBER';
var generateNumber = function(number) {
    return {
        type: GENERATE_NUMBER,
        number: number
    }
};

var USER_GUESS = 'USER_GUESS';
var userGuess = function(usersGuess, guessList) {
    return {
        type: USER_GUESS,
        usersGuess: usersGuess,
        guessList: guessList
    }
};

var COMPARE_GUESS = 'COMPARE_GUESS';
var compareGuess = function(number, usersGuess, compareGuess, guessList){
    return {
        type: COMPARE_GUESS,
        usersGuess: userGuess,
        compareGuess: compareGuess,
        guessList: guessList
    }
};

exports.GENERATE_NUMBER = GENERATE_NUMBER;
exports.generateNumber = generateNumber;
exports.USER_GUESS = USER_GUESS;
exports.userGuess = userGuess;
exports.COMPARE_GUESS = COMPARE_GUESS;
exports.compareGuess = compareGuess;
