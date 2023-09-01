import { Component } from 'react';
import './App.css';
// create an animation folder for every animation

import DealerSelection from './components/DealerSelection/DealerSelection';
import TeamNameInputs from './components/TeamNameInputs/TeamNameInputs';
import CreatedBy from './components/CreatedBy/CreatedBy';
import BelaBlok from './components/BelaBlok/BelaBlok';

class App extends Component {
  constructor(){
    super();
    this.state = {
      inputState:false,
      gameStart: false,
      nameOfTeamUS: 'Mi',
      nameOfTeamTHEM: 'Vi',
      maxPoints: 0,
      ourPoints: 0,
      theirPoints: 0,
      game: true,
      calls: false
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
    document.getElementById('dealerIconsAndRangeButtons').classList.remove('dealerIconsAndRangeButtons');
    document.getElementById('dealerIconsAndRangeButtons').classList.add('dealerIconGameStartAnimation')
    event.target.remove();
    console.log(this.state.maxPoints);
  }

  onClickingDealer = (event) => {
      if (event.target.id){
        const children = event.target.parentElement.children;

        for(var i=0;i<4;i++) {
          if (children[i] === event.target) {
            children[i].classList.add('bg-dark-green');
          } else if (children[i] !== event.target){
            children[i].classList.remove('bg-dark-green');
          }
        }
      }
    }


  enteringPoints = (event) => {
    const inputs = event.target.parentElement.children;

    if (event.target.id == "us") {
      if(event.target.value < 162 && event.target.value !== '0') {
        inputs[1].value = 162 - event.target.value;
      } else if (event.target.value === '0') {
          event.target.value = '';
          inputs[1].value = '';
      } else
        inputs[1].value = '';

    }

    else {
      if (event.target.value < 162 && event.target.value !== '0') {
        inputs[0].value = 162 - event.target.value;
      } else if (event.target.value === '0'){
        event.target.value = '';
        inputs[0].value = '';
      } else 
        inputs[0].value = 0;
    }
    
  }

  gameCallsButtons = (event) => {
    const buttons = event.target.parentElement.children;

    if (event.target.id === 'game') {
      this.setState({
        game: true, 
        calls: false
      });
      buttons[0].classList.add('buttonsToggle');
      buttons[1].classList.remove('buttonsToggle');
  }  
    else if (event.target.id === 'calls') {
      this.setState({
        game: false, 
        calls: true
      }); 
      buttons[0].classList.remove('buttonsToggle');
      buttons[1].classList.add('buttonsToggle');
  } 
  }

  gameRangeButtons = (event) => {
    this.setState({
      maxPoints: event.target.value
    })
    const buttons = event.target.parentElement.children;
    for (var i=0; i<3; i++) {
      if (event.target.id === buttons[i].id) {
        buttons[i].classList.add('gameRangeToggle');
      } else {
        buttons[i].classList.remove('gameRangeToggle');
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
            gameRangeButtons = {this.gameRangeButtons}
            /> 
            {gameStart === true ? 
                <BelaBlok 
                  enteringPoints = {this.enteringPoints}
                  gameCallsButtons = {this.gameCallsButtons}
                /> : console.log('the game has not started yet!')
            }
        </div> :
        <div>
          <TeamNameInputs 
            enteringTeamNames={this.enteringTeamNames} 
            onEnteringTeamsButton={this.onEnteringTeamsButton} /> 
        </div>
      }
      <CreatedBy />
     
    </div>
)}
}

export default App;
