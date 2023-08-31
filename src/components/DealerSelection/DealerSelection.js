import React from "react";
import './DealerSelection.css';
import './DealerSelectionAnimations.css'
import personIcon from './personIcon.png';

const DealerSelection = ({nameOfTeamUS, nameOfTeamTHEM, gameStartButton, onClickingDealer, gameRangeButtons}) => {
    return(
        <div className='mainDiv'>
            <div className='teamNames'>
                <h1 className='mh3 teamUsAnimation white'> {nameOfTeamUS}</h1>
                <h1 className='vsAnimation white'> VS </h1>
                <h1 className='mh3 teamThemAnimation white'> {nameOfTeamTHEM}</h1>
            </div>

            <div className='dealerIconsAndRangeButtons mt2' >

                <div className='flex flex-wrap gameRangeButtons'>   
                    <button id='501' className='gameRangeToggle gameRangeButton br3 bn' value='501' onClick={gameRangeButtons}>501</button>
                    <button id='701' className='gameRangeButton br3 bn' value='701' onClick={gameRangeButtons}>701</button>
                    <button id='1001' className='gameRangeButton br3 bn' value='1001' onClick={gameRangeButtons}>1001</button>
                </div>
                
                <div className="flex flex-wrap w-100" onClick={onClickingDealer}>
                    <img src={personIcon} className='personIcon grow top_bottomIconMargin bg-dark-green' id='1'></img>
                    <img src={personIcon} className='personIcon grow middleIconMargin' id='2'></img>
                    <img src={personIcon} className='personIcon grow middleIconMargin' id='3'></img>
                    <img src={personIcon} className='personIcon grow top_bottomIconMargin' id='4'></img>
                </div>
                <button className="grow pa4 br4 gameStartButton mv5" onClick = {gameStartButton}>Započni igru!</button>
            </div>
        </div>
    );
}

export default DealerSelection;