var React = require('react');

var Form= React.createClass({
	addNewGuess: function (e) {
		e.preventDefault();
		var guessValue = this.refs.inputValue.value;
		console.log(guessValue);
	},
	render: function () {
		return (
			<div>
				
				<form type="submit" >
					<input type="text" placeholder="Enter your Guess" ref="inputValue" />
					<button onClick={this.addNewGuess} >Guess</button>
				</form>
			</div>
		)
	}
});

module.exports = Form;


