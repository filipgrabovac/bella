import { Component } from 'react';
import './App.css';

import DealerSelection from './components/DealerSelection/DealerSelection';
import TeamNameInputs from './components/TeamNameInputs/TeamNameInputs';
import CreatedBy from './components/CreatedBy/CreatedBy';


class App extends Component {
  constructor(){
    super();
    this.state = {
      inputState:false,
      gameStart: false,
      nameOfTeamUS: 'Mi',
      nameOfTeamTHEM: 'Vi'
    }
  }

  enteringTeamNames = (event) => {
    if(event.target.id === 'mi'){
      this.setState({
        nameOfTeamUS: event.target.value
      });
    }

    if(event.target.id === 'vi'){
      this.setState({
        nameOfTeamTHEM: event.target.value
      });
    }
  }

  onEnteringTeamsButton = (event) => {
    this.setState({
      inputState:true
    })
  }

  gameStartButton = (event) => {
    this.setState({
      gameStart: true
    })
    event.target.parentElement.classList.remove('dealerIcons');
    event.target.parentElement.classList.add('dealerIconGameStartAnimation')
    console.log(event.target.parentElement.classList);
    event.target.remove();
  }

  onClickingDealer = (event) => {
    if(event.target.id) {
      const children = event.target.parentElement.children;

      for(var i=0;i<4;i++) {
        if (children[i] === event.target) {
          event.target.classList.add('bg-dark-green');
        } else {
          children[i].classList.remove('bg-dark-green');
        }
      }
    }
  }

  render(){
    const {nameOfTeamTHEM,nameOfTeamUS,inputState, gameStart} = this.state;
  return (
    <div>
      {inputState === true ? 
      <div>
          <DealerSelection 
            nameOfTeamTHEM = {nameOfTeamTHEM}
            nameOfTeamUS = {nameOfTeamUS}
            gameStartButton = {this.gameStartButton}
            onClickingDealer = {this.onClickingDealer} 
        /> 
        {gameStart === true ? <h1>true</h1>: <h1>false</h1>}
        </div> :
          <TeamNameInputs 
            enteringTeamNames={this.enteringTeamNames} 
            onEnteringTeamsButton={this.onEnteringTeamsButton} />
           
      }
      
      <CreatedBy />
    </div>
)}
}

export default App;
