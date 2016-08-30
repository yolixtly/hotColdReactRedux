///// Hot or Cold Reducer
var update = require('react-addons-update');
var actions = require('./actions');

var ranNumb = Math.floor((Math.random() * 100) + 1);

var initialState = {
    number: 0,
    usersGuess: 0,
    compareGuess: '',
    guessCount: 0,
    guessList: []
};

var hotOrColdReducer = function(state, action) {
    state = state || initialState;
    if (action.type === actions.GENERATE_NUMBER) {
        var newState = update(state, {
            number: {$set: ranNumb}
        });

        return newState;
    }
    else if (action.type === actions.USER_GUESS) {
        var guessCounter = state.guessCount++;
        
        var beforeList = state.guessList.slice();
        var afterList = beforeList.concat([action.usersGuess]);

        var newState = update(state, {
            usersGuess: {$set: action.usersGuess},
            guessCount: {$set: guessCounter},
            guessList: {$set: afterList}
        });

        return newState;
    }
    else if (action.type === actions.COMPARE_GUESS) {
        var compareGuess;
        var gapNumber = (Math.abs(state.usersGuess - state.number));
        if ( gapNumber <= 10 && gapNumber > 0) {
            compareGuess = "hot"
        }
        else if (gapNumber <= 20 && gapNumber > 10) {
            compareGuess = "warm"
        }
        else if (gapNumber === 0 && state.usersGuess != undefined) {
            compareGuess = "WINNNNEERRRR!!!!"
        }
        else {
            compareGuess = "cold"
        }
        
        var newState = update(state, {
            compareGuess: {$set: compareGuess},
        });

        return newState;
    }

    return state;
};

exports.hotOrColdReducer = hotOrColdReducer;