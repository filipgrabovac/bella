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
    const {nameOfTeamTHEM,nameOfTeamUS,inputState} = this.state;
  return (
    <div>
      {inputState === true ? 
          <DealerSelection 
            nameOfTeamTHEM = {nameOfTeamTHEM}
            nameOfTeamUS = {nameOfTeamUS}
            gameStartButton = {this.gameStartButton}
            onClickingDealer = {this.onClickingDealer}
        /> :
          <TeamNameInputs 
            enteringTeamNames={this.enteringTeamNames} 
            onEnteringTeamsButton={this.onEnteringTeamsButton} />
      }
      
      <CreatedBy />
    </div>
)}
}

export default App;
