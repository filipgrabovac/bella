import React from "react";
import './DealerSelection.css';
import './DealerSelectionAnimations.css'
import personIcon from './personIcon.png';

const DealerSelection = ({nameOfTeamUS, nameOfTeamTHEM, gameStartButton, onClickingDealer}) => {
    return(
        <div className='mainDiv'>

            <div className='teamNames'>
                <h1 className='mh3 teamUsAnimation white f1'> {nameOfTeamUS}</h1>
                <h1 className='mh5 vsAnimation white'> VS </h1>
                <h1 className='mh3 teamThemAnimation white f1'> {nameOfTeamTHEM}</h1>
            </div>

            <div className='dealerIcons mt4' onClick={onClickingDealer}>
            
                <img src={personIcon} className='personIcon grow top_bottomIconMargin bg-dark-green' id='1'></img>
                <img src={personIcon} className='personIcon grow middleIconMargin' id='2'></img>
                <img src={personIcon} className='personIcon grow middleIconMargin' id='3'></img>
                <img src={personIcon} className='personIcon grow top_bottomIconMargin' id='4'></img>

                <button className="grow pa4 br4 w-50 gameStartButton mv4" onClick = {gameStartButton}>Započni igru!</button>
            </div>
            
            <div>
               
            </div>
            
        </div>
    );
}

export default DealerSelection;