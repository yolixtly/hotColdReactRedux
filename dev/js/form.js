var React = require('react');
var connect = require('react-redux').connect;
var actions = require('./actions');

var Form= React.createClass({
	addNewGuess: function (e) {
		e.preventDefault();
		var guessValue = this.refs.inputValue.value;
		console.log(guessValue);
		this.props.dispatch(actions.userGuess(guessValue));
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

var Container = connect()(Form);

module.exports = Container;



