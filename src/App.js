import { Component } from 'react';
import './App.css';

import TeamNameInputs from './components/TeamNameInputs/TeamNameInputs';
import CreatedBy from './components/CreatedBy/CreatedBy';
import DealerSelection from './components/DealerSelection/DealerSelection';

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
    this.setState({inputState:true})
  }

  render(){
  return (
    <div>
      {this.state.gameStart === true ? <h1>this will be the game</h1> : 
        this.state.inputState === true ? 
          <DealerSelection 
            nameOfTeamTHEM = {this.state.nameOfTeamTHEM}
            nameOfTeamUS = {this.state.nameOfTeamUS}
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
