
var GENERATE_NUMBER = 'GENERATE_NUMBER';
var generateNumber = function() {
    return {
        type: GENERATE_NUMBER
    };
};

var USER_GUESS = 'USER_GUESS';
var userGuess = function(usersGuess) {
    return {
        type: USER_GUESS,
        usersGuess: usersGuess,
    };
};

exports.GENERATE_NUMBER = GENERATE_NUMBER;
exports.generateNumber = generateNumber;
exports.USER_GUESS = USER_GUESS;
exports.userGuess = userGuess;
