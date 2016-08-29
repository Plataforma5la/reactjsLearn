var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');
var Link = require('react-router').Link;

var UserDetails = require('./userDetails');
var UserDetailsWrapper = require('./userDetailsWrapper');
var MainContainer = require('./MainContainer');
var Loading = require('./Loading');

function StartOver(){
  return (
      <div className='col-sm-12' style= {styles.space}>
        <Link to='/playerOne'>
          <button type='button' className='btn btn-lg btn-danger'>Empezar de nuevo.</button>
        </Link>
      </div> 
  );
}


function Results(props) {
  if (props.isLoading === true){
    return <Loading />;
  }
  if (props.scores[0] === props.scores[1]) {
    return (
      <MainContainer>
        <h1> Es un empate! </h1>
        <StartOver />
      </MainContainer>
    )
  } 
  var winnerIndex = props.scores[0] > props.scores[1] ? 0 : 1;
  var loserIndex = 1 - winnerIndex;
  return (
    <MainContainer>
      <h1>Results</h1>
      <div className= 'col-sm-8 col-sm-offset-2'>

        <UserDetailsWrapper header='Winner'>
          <UserDetails score = {props.scores[winnerIndex]} info = {props.playersInfo[winnerIndex]}/>
        </UserDetailsWrapper>
        <UserDetailsWrapper header='Loser'>
          <UserDetails score = {props.scores[loserIndex]} info = {props.playersInfo[loserIndex]}/>
        </UserDetailsWrapper>
      </div>
      <StartOver />
    </MainContainer>
  )
}

Results.propTypes = {
  isLoading : PropTypes.bool.isRequired,
  playersInfo : PropTypes.array.isRequired,
  scores : PropTypes.array.isRequired,
}

module.exports = Results;