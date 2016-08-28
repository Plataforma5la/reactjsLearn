var React = require('react');
var transparentBg = require('../styles').transparentBg;
var Link = require('react-router').Link;
var Home = React.createClass({
	render: function(){
		return (
			<div className='jumbotron col-sm-12 text-center' style={transparentBg}>
				<h1>Github Batlle</h1>
				<p className='lead'>Luchando al dope!</p>
				<Link to='playerOne'>
					<button className='btn btn-lg btn-success'
					type= 'submit'> 
						Empezar
					</button>
				</Link>
			</div>
		)
	}
});

module.exports = Home;