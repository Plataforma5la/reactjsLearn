var React = require('react');
var Link = require('react-router').Link;

var MainContainer = require('./MainContainer');

var Home = React.createClass({
	render: function(){
		return (
			<MainContainer>
				<h1>Github Battle</h1>
				<p className='lead'>Luchando al dope!</p>
				<Link to='/playerOne'>
					<button className='btn btn-lg btn-success' type= 'submit'> 
						Empezar
					</button>
				</Link>
			</MainContainer>
		)
	}
});

module.exports = Home;