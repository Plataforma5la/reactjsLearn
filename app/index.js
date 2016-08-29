
// var user = {
// 	name: 'Toni Tralice',
// 	username: 'atralice',
// 	img: 'https://avatars0.githubusercontent.com/u/2078339?v=3&u=e0dd7ffb9703bf2d043295ddf0a27407873c9e27&s=140'
// }

// var Raven = require('raven-js');
// var sentryKey = 'fc121edeb2d04947bcea68f4facfa268';
// var sentryApp = '94885';
// var sentryURL = 'https://' + sentryKey +'@app.getsentry.com/' + sentryApp
// var _APP_INFO = {
// 	name: 'Github Battle',
// 	branch: 4,
// 	version: '1.0'
// }

// Raven.config(sentryURL, {
// 	release: _APP_INFO.version,
// 	tags: {
// 		name: _APP_INFO.name,
// 		branch: _APP_INFO.branch
// 	}
// 	}).install();


// var ProfilePic = React.createClass({
// 	render: function(){
// 		return (<img src={this.props.imageUrl} style = {{height: 100, width: 100}} />)
// 	}
// });

// var Link = React.createClass({
// 	changeURL: function(){
// 		window.location.replace(this.props.href)
// 	},
// 	render: function(){
// 		return (
// 			<span style={{color: 'blue', cursor: 'pointer'}}
// 			onClick= {this.changeURL} >
// 				{this.props.children}
// 			</span>
// 		)
// 	}
// });

// var ProfileLink = React.createClass({
// 	render: function(){
// 		return (
// 			<div>
// 				<Link href= {'https://github.com/'+this.props.username}>
// 					{this.props.username}
// 				</Link>
// 			</div>
// 		)
// 		}
// })

// var ProfileName = React.createClass({
// 	render: function () {
// 		return (
// 			<div>{this.props.name}</div>
// 		)
// 	}
// });

// var Avatar = React.createClass({
// 	render: function(){
// 		return (
// 				<div>
// 					<ProfilePic imageUrl={this.props.user.img} />
// 					<ProfileName name = {this.props.user.name} />
// 					<ProfileLink username = {this.props.user.username} />
// 				</div>
// 			)
// 	}
// });

// ReactDOM.render(
// 	<Avatar user= {user} />, 
// 	document.getElementById('app')
// );

var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');

ReactDOM.render(routes, document.getElementById('app'));