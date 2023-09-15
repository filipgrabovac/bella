import React from "react";
import './GameEnd.css'
const GameEnd = ({nameOfTeamUS,nameOfTeamTHEM, totalPointsUs, totalPointsThem, onGameRestart})=> {
    return (
        <div className='gameEnd br4'>
            <h1 className='bg-dark-green white br4 pa4 mb0 grow'>
                Igra je gotova! 
                <br /> 
                Rezultat: 
                <br />
                <h1 className="f1 underline">{`${nameOfTeamUS}: ${totalPointsUs} ${nameOfTeamTHEM}: ${totalPointsThem}`}</h1> 
            </h1>

            <div className='flex flex-column h-50'>
                <h1 className='w-100 h-25 f1 white mb2'>Promjeniti imena timova?</h1>
                <div className='flex' >
                    <button id='changeTeams' className='grow endButton bg-dark-green bn' onClick={onGameRestart}>Promjeni</button>
                    <button id='dontChangeTeams' className='grow endButton bg-dark-green bn' onClick={onGameRestart}>Revanš!</button>
                </div>
            </div>
        </div>
    );
}

export default GameEnd;