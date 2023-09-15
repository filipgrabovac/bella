import React, { useState } from 'react';
import './App.css';

import DealerSelection from './components/DealerSelection/DealerSelection';
import TeamNameInputs from './components/TeamNameInputs/TeamNameInputs';
import TeamNames from './components/TeamNames/TeamNames';
import CreatedBy from './components/CreatedBy/CreatedBy';
import BelaBlok from './components/BelaBlok/BelaBlok';
import GameEnd from './components/GameEnd/GameEnd';

const App =() => {
  const [inputState, setInputState] = useState(false);
  const [gameStart, setGameStart] = useState(false);
  const [gameEnd, setGameEnd] = useState(false);
  const [nameOfTeamUS, setNameOfTeamUS] = useState('Mi');
  const [nameOfTeamTHEM, setNameOfTeamTHEM] = useState('Vi');
  const [maxPoints, setMaxPoints] = useState(501);
  const [roundPointsUs, setRoundPointsUs] = useState('');
  const [roundPointsThem, setRoundPointsThem] = useState('');
  const [roundCallsUs, setRoundCallsUs] = useState('');
  const [roundCallsThem, setRoundCallsThem] = useState('');
  const [totalPointsUs, setTotalPointsUs] = useState(0);
  const [totalPointsThem, setTotalPointsThem] = useState(0);
  const [game, setGame] = useState(true);
  const [calls, setCalls] = useState(false);
  const [count, setCount] = useState(0);
  
  const enteringTeamNames = (event) => {
    if(event.target.id === 'mi'){
      setNameOfTeamUS(event.target.value);
    }

    if(event.target.id === 'vi'){
      setNameOfTeamTHEM(event.target.value);
    }
  }

  const onEnteringTeamsButton = (event) => {
    event.target.parentElement.classList.remove('inputsAndTeams');
    event.target.parentElement.classList.add('inputsAndTeamsOnSubmit');

    setTimeout(()=>{
      setInputState(true)
      localStorage.setItem('inputState', JSON.stringify(true));
    }, 1000)
    
  }

  const gameStartButton = (event) => {
    setGameStart(true);

    document.getElementById('dealerIconsAndRangeButtons').classList.remove('dealerIconsAndRangeButtons');
    document.getElementById('dealerIconsAndRangeButtons').classList.add('dealerIconGameStartAnimation');
    event.target.remove();
  }

  const switchingDealer = () => {
      const Icons = document.getElementById('icons').children;
      for (var i = 0; i < 4; ++i) {
        if (Number.parseInt(Icons[i].id) === (count + 1) % 4) {
          Icons[i].classList.add('bg-dark-green');
        } else {
          Icons[i].classList.remove('bg-dark-green');
        }
      }
      setCount((count + 1) % 4); 
  }

  const onClickingDealer = (event) => {
      if (event.target.id != 'icons' && !(gameStart)){
        const children = event.target.parentElement.children;

        for(var i=0;i<4;i++) {
          if (children[i] === event.target) {
            children[i].classList.add('bg-dark-green');
          } else if (children[i] !== event.target){
            children[i].classList.remove('bg-dark-green');
          }
        }
       setCount(Number.parseInt(event.target.id));
    }
  }

  const displayingPoints = (event) => {

    const inputs = event.target.parentElement.children;

    if (game){
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
      setRoundPointsUs(inputs[0].value);
      setRoundPointsThem(inputs[1].value);

    } else if (calls) {
      inputs[0].value = inputs[0].value === '0' ? '' : inputs[0].value;
      inputs[1].value = inputs[1].value === '0' ? '' : inputs[1].value;

      setRoundCallsUs(inputs[0].value);
      setRoundCallsThem(inputs[1].value);
  }
}

  const enteringRoundPoints = (event) => {
    if (!(roundPointsUs && roundPointsThem)) {
     return;
    }

    switchingDealer();

    const round = document.createElement('li');
    const detailsUs = document.createElement('p');
    const detailsThem = document.createElement('p');
    const details = document.createElement('p');
    
    const totalPointsUs = Number.parseInt(roundPointsUs) + Number.parseInt((roundCallsUs.length) ? roundCallsUs : '0');
    const totalPointsThem = Number.parseInt(roundPointsThem) + Number.parseInt((roundCallsThem.length) ? roundCallsThem : '0');

    detailsUs.className = 'details';
    detailsThem.className = 'details';
    detailsUs.textContent = `${nameOfTeamUS}: ${roundPointsUs} Zvanja: ${roundCallsUs ? roundCallsUs :'0'}`;
    detailsThem.textContent = `${nameOfTeamTHEM}: ${roundPointsThem} Zvanja: ${roundCallsThem ? roundCallsThem :'0'}`;
    details.className = 'detailsAll';

    details.append(detailsUs);
    details.append(detailsThem);

    round.className = 'round roundDetailsExit';

    round.onclick = () => {
      round.classList.toggle('roundDetailsEnter');
      round.classList.toggle('roundDetailsExit');
    }

    round.textContent = `${nameOfTeamUS}: ${totalPointsUs} ${nameOfTeamTHEM}: ${totalPointsThem}`;
    round.append(details);
    document.getElementById('rounds').appendChild(round);

    const newPointsUs = totalPointsUs + totalPointsUs; 
    const newPointsThem = totalPointsThem + totalPointsThem;
    
    setTotalPointsUs(newPointsUs);
    setTotalPointsThem(newPointsThem);
    setRoundPointsUs('');
    setRoundPointsThem('');
    setRoundCallsUs('');
    setRoundCallsThem('');

    const inputs = document.getElementById('inputs').children;
    inputs[0].value = '';
    inputs[1].value = '';
    
    if (newPointsUs >= maxPoints || newPointsThem >= maxPoints) {
      setTimeout(()=>{
        setGameEnd(true);
        setInputState(false)
      }, 1500) 

      localStorage.setItem('inputState', JSON.stringify(false));

      document.getElementById('BelaBlok').style.pointerEvents = 'none';
    }
  }

  const gameCallsButtons = (event) => {

    const buttons = event.target.parentElement.children;
    const inputs = document.getElementById('inputs').children;

    if (event.target.id === 'game') {
      setGame(true);
      setCalls(false);

      buttons[0].classList.add('buttonsToggle');
      buttons[1].classList.remove('buttonsToggle');

      inputs[0].value = this.state.roundPointsUs;
      inputs[1].value = this.state.roundPointsThem;
  }  
    else if (event.target.id === 'calls') {
      setGame(false);
      setCalls(true);

      buttons[0].classList.remove('buttonsToggle');
      buttons[1].classList.add('buttonsToggle');

      inputs[0].value = roundCallsUs;
      inputs[1].value = roundCallsThem;
  } 

}

  const gameRangeButtons = (event) => {
    if (!gameStart) {
      setMaxPoints(event.target.value);

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

  const onGameRestart = (event) => {
    if (event.target.id === 'changeTeams') {
      localStorage.setItem('inputState', JSON.stringify(false))
      setGameStart(false);
      setInputState(false);
      setGameEnd(false);
      setNameOfTeamUS('Mi');
      setNameOfTeamTHEM('Vi');
      setMaxPoints(501);
      setRoundPointsUs('');
      setRoundPointsThem('');
      setRoundCallsUs('');
      setRoundCallsThem('');
      setTotalPointsUs(0);
      setTotalPointsThem(0);
      setGame(true);
      setCalls(false);
      setCount(0)

    } else if (event.target.id === 'dontChangeTeams'){
      setGameStart(false);
      setInputState(true);
      setGameEnd(false);
      setMaxPoints(501);
      setRoundPointsUs('');
      setRoundPointsThem('');
      setRoundCallsUs('');
      setRoundCallsThem('');
      setTotalPointsUs(0);
      setTotalPointsThem(0);
      setGame(true);
      setCalls(false);
      setCount(0)
      // localStorage.setItem('inputState', JSON.stringify(true))
    }
}

  const restartGame = (event) => {
    setGameStart(false);
    setInputState(false);
    setGameEnd(false);
    setNameOfTeamUS('Mi');
    setNameOfTeamTHEM('Vi');
    setMaxPoints(501);
    setRoundPointsUs('');
    setRoundPointsThem('');
    setRoundCallsUs('');
    setRoundCallsThem('');
    setTotalPointsUs(0);
    setTotalPointsThem(0);
    setGame(true);
    setCalls(false);
    setCount(0);
    localStorage.setItem('inputState', JSON.stringify(false));
  }

  const checkingDealer = (event) => {
    if(event.target.id === count.toString()) {
      event.target.classList.add('bg-dark-green')
    }
  }
  
  return (
    <div>   
        {gameStart ? 
          (gameEnd ? <GameEnd 
            nameOfTeamUS={nameOfTeamUS}
            nameOfTeamTHEM={nameOfTeamTHEM}
            totalPointsUs={totalPointsUs}
            totalPointsThem={totalPointsThem}
            onGameRestart = {onGameRestart}
          /> : 
           <div>
            <TeamNames 
              nameOfTeamUS={nameOfTeamUS}
              nameOfTeamTHEM={nameOfTeamTHEM}
              totalPointsUs={totalPointsUs}
              totalPointsThem={totalPointsThem}
              /> 
            <BelaBlok 
              displayingPoints = {displayingPoints}
              gameCallsButtons = {gameCallsButtons}
              switchingDealer = {switchingDealer}
              enteringRoundPoints = {enteringRoundPoints}
              onClickingDealer={onClickingDealer}
              checkingDealer={checkingDealer}
              />
            </div>
            )
             : 
        <div>
          {inputState ? <div> 
                          <DealerSelection 
                            gameStartButton={gameStartButton}
                            onClickingDealer={onClickingDealer}
                            gameRangeButtons={gameRangeButtons}
                            />
                        </div>
                      : <TeamNameInputs 
                          enteringTeamNames={enteringTeamNames} 
                          onEnteringTeamsButton={onEnteringTeamsButton} /> 
              }
             
        </div>
        }
      
      <CreatedBy 
        restartGame = {restartGame}
      />
     
    </div>
)
}


export default App;
