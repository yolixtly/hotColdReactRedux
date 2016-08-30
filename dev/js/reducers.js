///// Hot or Cold Reducer
var update = require('react-addons-update');
var actions = require('./actions');

var ranNumb = Math.floor((Math.random() * 100) + 1);

var initialState = {
    number: 0,
    usersGuess: 0,
    compareGuess: 'Make a Guess',
    guessCount: 0,
    guessList: []
};

var hotOrColdReducer = function(state, currentAction) {
    state = state || initialState;
    if (currentAction.type === actions.GENERATE_NUMBER) {
        var newState = update(state, {
            number: {$set: ranNumb},
            usersGuess: {$set: 0},
            compareGuess: {$set: 'Make a Guess'},
            guessCount: {$set: 0},
            guessList: {$set: []}
        });

        return newState;
    }
    else if (currentAction.type === actions.USER_GUESS) {
        if(state.number === 0){
            console.log("Please Generate a Secret number first");
            return initialState;
        }
        
        var compareGuess = '';
        var gapNumber = (Math.abs(currentAction.usersGuess - state.number));

        if (state.number === currentAction.usersGuess) {
            compareGuess = "you win!";
        } else if (gapNumber <= 10 && gapNumber >= 1) {
            compareGuess = 'you are very hot';
        } else if (gapNumber <= 20 && gapNumber >= 11) {
            compareGuess = 'you are hot';
        } else if (gapNumber <= 30 && gapNumber >= 21) {
            compareGuess = 'you are warm';
        } else if (gapNumber <= 49 && gapNumber >= 39) {
            compareGuess = 'you are cold';
        } else {
            compareGuess = 'you are very cold';
        }

        var guessCounter = state.guessCount + 1;
 
        var newState = update(state, {
            usersGuess: {$set: currentAction.usersGuess},
            guessCount: {$set: guessCounter},
            guessList: {$push: [currentAction.usersGuess]},
            compareGuess: {$set: compareGuess},
        });

        return newState;
    }

    return state;
};

exports.hotOrColdReducer = hotOrColdReducer;