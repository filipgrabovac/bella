import React from "react";
import 'tachyons';
import './TeamNameInputs.css';

const TeamNameInputs = ({enteringTeamNames, onEnteringTeamsButton}) => {
    return (
            <div className ="inputsAndTeams">
                <h1 className="headers f1">
                    DOBRODOŠLI U NOVU BELA BLOK APLIKACIJU
                </h1>
                
                <h1 className="mt5 white teamNamesText">
                    Unesite imena timova:
                </h1> 

                <div className="flex flex-wrap Inputs mt4">
                    <input id ='mi' className = "grow br4 bn bg-dark-green fl w-30 h-25 pa3 Input" maxLength={12} onChange={enteringTeamNames} placeholder="Mi"></input>
                    <input id ='vi' className = "grow br4 bn bg-dark-green fl w-30 h-25 pa3 Input" maxLength={12} onChange={enteringTeamNames} placeholder="Vi"></input>
                </div> 

                <button className="grow br4 teamNamesButton dim" onClick={onEnteringTeamsButton}>Upiši</button>
            </div>
    );
}

export default TeamNameInputs;