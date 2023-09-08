import { Component } from 'react';
import './App.css';
import xIcon from './xIcon.png';
// create an animation folder for every animation

import DealerSelection from './components/DealerSelection/DealerSelection';
import TeamNameInputs from './components/TeamNameInputs/TeamNameInputs';
import TeamNames from './components/TeamNames/TeamNames';
import CreatedBy from './components/CreatedBy/CreatedBy';
import BelaBlok from './components/BelaBlok/BelaBlok';
import GameEnd from './components/GameEnd/GameEnd';

class App extends Component {
  constructor(){
    super();
    this.state = {
      inputState: false,
      gameStart: false,
      gameEnd: false,
      nameOfTeamUS: 'Mi',
      nameOfTeamTHEM: 'Vi',
      maxPoints: 501,
      roundPointsUs: '',
      roundPointsThem: '',
      roundCallsUs: '',
      roundCallsThem: '',
      totalPointsUs: 0,
      totalPointsThem: 0,
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
    event.target.parentElement.classList.remove('inputsAndTeams');
    event.target.parentElement.classList.add('inputsAndTeamsOnSubmit');

    setTimeout(()=>{
      this.setState({
        inputState: true})
      localStorage.setItem('inputState', JSON.stringify(true));
    }, 1000)
    
  }

  gameStartButton = (event) => {
    this.setState({
      gameStart: true
    })

    document.getElementById('dealerIconsAndRangeButtons').classList.remove('dealerIconsAndRangeButtons');
    document.getElementById('dealerIconsAndRangeButtons').classList.add('dealerIconGameStartAnimation');
    event.target.remove();
  }

  switchingDealer = () => {
      const Icons = document.getElementById('icons').children;
      for (var i = 0; i < 4; ++i) {
        if (Number.parseInt(Icons[i].id) === (this.state.count + 1) % 4) {
          Icons[i].classList.add('bg-dark-green');
        } else {
          Icons[i].classList.remove('bg-dark-green');
        }
      }

      this.setState({
        count: (this.state.count + 1) % 4
      })
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
    console.log(this.state.maxPoints)
    if (!(this.state.roundPointsUs && this.state.roundPointsThem)) {
     return;
    }

    this.switchingDealer();

    const round = document.createElement('li');
    const detailsUs = document.createElement('p');
    const detailsThem = document.createElement('p');
    const details = document.createElement('p');
    
    const totalPointsUs = Number.parseInt(this.state.roundPointsUs) + Number.parseInt((this.state.roundCallsUs.length) ? this.state.roundCallsUs : '0');
    const totalPointsThem = Number.parseInt(this.state.roundPointsThem) + Number.parseInt((this.state.roundCallsThem.length) ? this.state.roundCallsThem : '0');

    detailsUs.className = 'details';
    detailsThem.className = 'details';
    detailsUs.textContent = `${this.state.nameOfTeamUS}: ${this.state.roundPointsUs} Zvanja: ${this.state.roundCallsUs ? this.state.roundCallsUs :'0'}`;
    detailsThem.textContent = `${this.state.nameOfTeamTHEM}: ${this.state.roundPointsThem} Zvanja: ${this.state.roundCallsThem ? this.state.roundCallsThem :'0'}`;
    details.className = 'detailsAll';

    details.append(detailsUs);
    details.append(detailsThem);

    round.className = 'round roundDetailsExit';

    round.onclick = () => {
      round.classList.toggle('roundDetailsEnter');
      round.classList.toggle('roundDetailsExit');
    }


    round.textContent = `${this.state.nameOfTeamUS}: ${totalPointsUs} ${this.state.nameOfTeamTHEM}: ${totalPointsThem}`;
    round.append(details);
    document.getElementById('rounds').appendChild(round);

    const newPointsUs = this.state.totalPointsUs + totalPointsUs; 
    const newPointsThem = this.state.totalPointsThem + totalPointsThem;
    
    this.setState({
      totalPointsUs: newPointsUs,
      totalPointsThem: newPointsThem,
      roundPointsUs: '',
      roundPointsThem: '',
      roundCallsUs: '',
      roundCallsThem: ''
    })

    const inputs = document.getElementById('inputs').children;
    inputs[0].value = '';
    inputs[1].value = '';
    
    if (newPointsUs >= this.state.maxPoints || newPointsThem >= this.state.maxPoints) {
      setTimeout(()=>this.setState({
        gameEnd: true,
        inputState: false
      }), 1500) 
      localStorage.setItem('inputState', JSON.stringify(false));

      document.getElementById('BelaBlok').style.pointerEvents = 'none';
    }
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

  onGameRestart = (event) => {
    if(event.target.id === 'changeTeams') {
      localStorage.setItem('inputState', JSON.stringify(false))
      this.setState({
        gameStart: false,
        gameEnd: false,
        nameOfTeamUS: 'Mi',
        nameOfTeamTHEM: 'Vi',
        maxPoints: 501,
        roundPointsUs: '',
        roundPointsThem: '',
        roundCallsUs: '',
        roundCallsThem: '',
        totalPointsUs: 0,
        totalPointsThem: 0,
        game: true,
        calls: false,
        count : 0
      })
    } else if (event.target.id === 'dontChangeTeams'){
      this.setState({
        gameStart: false,
        gameEnd: false,
        maxPoints: 501,
        roundPointsUs: '',
        roundPointsThem: '',
        roundCallsUs: '',
        roundCallsThem: '',
        totalPointsUs: 0,
        totalPointsThem: 0,
        game: true,
        calls: false,
        count : 0
      })
      localStorage.setItem('inputState', JSON.stringify(true))
    }
}

  restartGame = (event)=>{
    this.setState({
      inputState: false
    })
    localStorage.setItem('inputState', JSON.stringify(false));
  }

  checkingDealer = (event) => {
    if(event.target.id === this.state.count.toString()) {
      event.target.classList.add('bg-dark-green')
    }
  }
  

  render(){
    const {nameOfTeamTHEM,nameOfTeamUS, gameStart, gameEnd, totalPointsUs, totalPointsThem, count} = this.state;
  return (
    <div>   
        {gameStart ? 
          (gameEnd ? <GameEnd 
            nameOfTeamUS={nameOfTeamUS}
            nameOfTeamTHEM={nameOfTeamTHEM}
            totalPointsUs={totalPointsUs}
            totalPointsThem={totalPointsThem}
            onGameRestart = {this.onGameRestart}
          /> : 
           <div>
            <TeamNames 
              nameOfTeamUS={nameOfTeamUS}
              nameOfTeamTHEM={nameOfTeamTHEM}
              totalPointsUs={totalPointsUs}
              totalPointsThem={totalPointsThem}
              /> 
            <BelaBlok 
              displayingPoints = {this.displayingPoints}
              gameCallsButtons = {this.gameCallsButtons}
              switchingDealer = {this.switchingDealer}
              enteringRoundPoints = {this.enteringRoundPoints}
              onClickingDealer={this.onClickingDealer}
              checkingDealer={this.checkingDealer}
              />
            </div>
            )
             : 
        <div>
        
          {JSON.parse(localStorage.inputState) ? <div> 
                          <DealerSelection 
                            gameStartButton={this.gameStartButton}
                            onClickingDealer={this.onClickingDealer}
                            gameRangeButtons={this.gameRangeButtons}
                            />
                        </div>
                      : <TeamNameInputs 
                          enteringTeamNames={this.enteringTeamNames} 
                          onEnteringTeamsButton={this.onEnteringTeamsButton} /> 
              }
             
        </div>
        }
      
      <CreatedBy 
        restartGame = {this.restartGame}
      />
     
    </div>
)}
}

export default App;
