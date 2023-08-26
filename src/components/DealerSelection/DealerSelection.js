import React from "react";
import './DealerSelection.css';
import personIcon from './personIcon.png';

const DealerSelection = ({nameOfTeamUS, nameOfTeamTHEM}) => {
    console.log(nameOfTeamTHEM);
    return(
        <div className='mainDiv'>
            <div className='teamNames bg-dark-red'>
                <h1 className='mh3 teamUsAnimation white'> {nameOfTeamUS}</h1>
                <h1 className='mh3 vsAnimation white'> VS </h1>
                <h1 className='mh3 teamThemAnimation white'> {nameOfTeamTHEM}</h1>
            </div>

            <div>
                <button className="grow pa4 br4 w-25 gameStartButton">Započni igru!</button>
            </div>
            
        </div>
    );
}

export default DealerSelection;