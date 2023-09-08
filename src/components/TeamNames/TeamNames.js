import React from "react";
import './TeamNames.css';

const TeamNames = ({nameOfTeamUS, nameOfTeamTHEM, totalPointsUs, totalPointsThem}) => {
    return(
        <div className='teamNames'>
            <h1 id='totalPointsUs' className='teamUsAnimation white f1 mh5'> {totalPointsUs} </h1>
            <h1 className='mh3 teamUsAnimation white'> {nameOfTeamUS} </h1>
            <h1 className='vsAnimation white'> VS </h1>
            <h1 className='mh3 teamThemAnimation white'> {nameOfTeamTHEM} </h1>
            <h1 id='totalPointsUs' className='teamThemAnimation white f1 mh5'> {totalPointsThem} </h1>
        </div>
    );
}

export default TeamNames;