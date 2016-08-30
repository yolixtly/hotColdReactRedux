var React = require('react');
var ReactDOM = require('react-dom');
var Form = require('./form');
var NewGame = require('./newGame');

var Game = React.createClass({
	render: function () {
		var myArray = [1,2,3,4]
		var passGuess = myArray.map(function(value, index){
			return <li key={index}>{value}</li>;
		});
		return (
			<div>
				<h1>HOT or COLD</h1>
				<div className="feedback">Response</div>
				<Form  />
				<div className="counter">Counter</div>
				<ul>
					{passGuess}
				</ul>
				<NewGame />	
			</div>
		)
	}
});

module.exports = Game;

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<Game />, document.getElementById('app'));
});

// Form with input and button
// Display array of past guesses
// Display #Count 
// Area to display the Feedback message 
//button to restart the game 
