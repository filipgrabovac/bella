import { Component } from 'react';
import './App.css';
import xIcon from './xIcon.png';
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
      roundPointsUs: '',
      roundPointsThem: '',
      roundCallsUs: '',
      roundCallsThem: '',
      sumPointsUs: 0,
      sumPointsThem: 0,
      game: true,
      calls: false,
      count : 0
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
  }


  switchingDealer = () => {
      const Icons = document.getElementById('icons').children;
      this.setState({
        count: (this.state.count + 1) % 4
      })
      for (var i = 0; i < 4; ++i) {
        if (Number.parseInt(Icons[i].id) === this.state.count) {
          Icons[i].classList.add('bg-dark-green');
        } else {
          Icons[i].classList.remove('bg-dark-green');
        }
      }
  }


  onClickingDealer = (event) => {
      if (event.target.id != 'icons' && !(this.state.gameStart)){
        const children = event.target.parentElement.children;

        for(var i=0;i<4;i++) {

          if (children[i] === event.target) {
            children[i].classList.add('bg-dark-green');
          } else if (children[i] !== event.target){
            children[i].classList.remove('bg-dark-green');
          }
        }

        this.setState({
          count: Number.parseInt(event.target.id)
        })
      }

    }


  displayingPoints = (event) => {

    const inputs = event.target.parentElement.children;

    if (this.state.game){
      if (event.target.id == "roundPointsUs") {
        if(event.target.value < 162 && event.target.value > 0) {
          inputs[1].value = 162 - event.target.value;
        } 
        else if (event.target.value >= 162) {
            inputs[1].value = '0';
        }
        else {
            inputs[0].value = '';
            inputs[1].value = '';
        } 
      }
      else {
        if (event.target.value < 162 && event.target.value > 0) {
          inputs[0].value = 162 - event.target.value;
        } 
        else if (event.target.value >= 162){
          inputs[0].value = '0';
        }
        else {
          event.target.value = '';
          inputs[0].value = '';
        }
      }

      this.setState({
        roundPointsUs: inputs[0].value,
        roundPointsThem: inputs[1].value
      })

    } else if (this.state.calls) {
      inputs[0].value = inputs[0].value === '0' ? '' : inputs[0].value;
      inputs[1].value = inputs[1].value === '0' ? '' : inputs[1].value;


      this.setState({
        roundCallsUs: inputs[0].value,
        roundCallsThem: inputs[1].value
      })
    }
}


  enteringRoundPoints = (event) => {
    if (!(this.state.roundPointsUs && this.state.roundPointsThem)) {
     return;
    }

    this.switchingDealer();
    
    const round = document.createElement('li');
    const detailsUs = document.createElement('p');
    const detailsThem = document.createElement('p');

    detailsUs.className = 'details';
    detailsThem.className = 'details';
    detailsUs.textContent = 'it works1';
    detailsThem.textContent = 'it works2';
    round.className = 'round';

    round.onclick = () => {
      round.classList.toggle('roundOnClick');
    }

    const totalPointsUs = Number.parseInt(this.state.roundPointsUs) + Number.parseInt((this.state.roundCallsUs.length) ? this.state.roundCallsUs : '0');
    const totalPointsThem = Number.parseInt(this.state.roundPointsThem) + Number.parseInt((this.state.roundCallsThem.length) ? this.state.roundCallsThem : '0');;

    round.textContent = `${this.state.nameOfTeamUS}: ${totalPointsUs} ${this.state.nameOfTeamTHEM}: ${totalPointsThem}`;
    round.appendChild(detailsUs);
    // round.appendChild(detailsThem);
    document.getElementById('rounds').appendChild(round);


    this.setState({
      sumPointsUs: this.state.sumPointsUs + totalPointsUs,
      sumPointsThem: this.state.sumPointsThem + totalPointsThem,
      roundPointsUs: '',
      roundPointsThem: '',
      roundCallsUs: '',
      roundCallsThem: ''
    })

    const inputs = document.getElementById('inputs').children;
    inputs[0].value = '';
    inputs[1].value = '';
  }


  gameCallsButtons = (event) => {

    const buttons = event.target.parentElement.children;

    const inputs = document.getElementById('inputs').children;

    if (event.target.id === 'game') {
      this.setState({
        game: true, 
        calls: false
      });

      buttons[0].classList.add('buttonsToggle');
      buttons[1].classList.remove('buttonsToggle');

      inputs[0].value = this.state.roundPointsUs;
      inputs[1].value = this.state.roundPointsThem;
  }  
    else if (event.target.id === 'calls') {
      this.setState({
        game: false, 
        calls: true
      }); 
      buttons[0].classList.remove('buttonsToggle');
      buttons[1].classList.add('buttonsToggle');

      inputs[0].value = this.state.roundCallsUs;
      inputs[1].value = this.state.roundCallsThem;
  } 

}

  gameRangeButtons = (event) => {
    if (!this.state.gameStart) {
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
                  displayingPoints = {this.displayingPoints}
                  gameCallsButtons = {this.gameCallsButtons}
                  switchingDealer = {this.switchingDealer}
                  enteringRoundPoints = {this.enteringRoundPoints}
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
