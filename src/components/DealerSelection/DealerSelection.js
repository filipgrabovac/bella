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

            <div id='dealerIconsAndRangeButtons' className='dealerIconsAndRangeButtons mt1' >

                <div className='flex flex-wrap br4 pa3 gameRangeButtons'>   
                    <button id='501' className='grow gameRangeToggle gameRangeButton br3 bn' value='501' onClick={gameRangeButtons}>501</button>
                    <button id='701' className='grow mh2 gameRangeButton br3 bn' value='701' onClick={gameRangeButtons}>701</button>
                    <button id='1001' className='grow gameRangeButton br3 bn' value='1001' onClick={gameRangeButtons}>1001</button>
                </div>
                
                <div id='icons' className="flex flex-wrap w-100" onClick={onClickingDealer}>
                    <img src={personIcon} className='personIcon grow top_bottomIconMargin bg-dark-green' id='0'></img>
                    <img src={personIcon} className='personIcon grow middleIconMargin' id='3'></img>
                    <img src={personIcon} className='personIcon grow middleIconMargin' id='1'></img>
                    <img src={personIcon} className='personIcon grow top_bottomIconMargin' id='2'></img>
                </div>
            </div>

            <div className='flex flex-wrap jc'>
                <button className="grow pa4 br4 gameStartButton mv3" onClick = {gameStartButton}>Započni igru!</button>
            </div>
        </div>
    );
}

export default DealerSelection;