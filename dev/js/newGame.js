var React = require('react');

var NewGame = React.createClass({
	render: function () {
		return (
			<div>
				<input type="button" value="New Game" />
			</div>
		);
	}
});

module.exports = NewGame;