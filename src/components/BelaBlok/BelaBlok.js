import React from "react";
import './BelaBlok.css';
import personIcon from './personIcon.png';

const BelaBlok = ({displayingPoints, gameCallsButtons, enteringRoundPoints,checkingDealer}) => {
        
        return(     
            <div className='flex master'>
                <div id = 'BelaBlok' className='BelaBlok flex flex-wrap'>
                
                    <ul id='rounds' className='gameRounds br4 mt0'></ul>

                    <div className='inputsAndButtons flex flex-wrap'>
                        
                        <div className='flex flex-wrap gameButtons'>
                            <button id='game' className="buttonsToggle gameButton grow w-20 br4 mh3" onClick={gameCallsButtons}>Igra</button>
                            <button id='calls' className="gameButton w-20 grow br4 mh3" onClick={gameCallsButtons}>Zvanja</button>
                            <button id='enteringPoints' className='gameButton grow br4 ml5' onClick={enteringRoundPoints}>Upiši bodove</button>
                        </div>

                        <div id='inputs' className='Inputs flex flex-wrap'>
                            <input id = 'roundPointsUs' type = 'number' placeholder='0' className="tc br4 w-25 h3 f2 bn Input grow" onChange={displayingPoints}/>
                            <input id = 'roundPointsThem' type = 'number' placeholder ='0' className="tc br4 w-25 h3 f2 bn Input grow" onChange={displayingPoints}/>
                        </div>

                    </div>
                </div>

                <div id='icons' className="flex flex-wrap w-100 dealerIcons">
                    <img src={personIcon} className='personIcon top_bottomIconMargin' id='0' onLoad={checkingDealer}></img>
                    <img src={personIcon} className='personIcon middleIconMargin' id='3' onLoad={checkingDealer}></img>
                    <img src={personIcon} className='personIcon middleIconMargin' id='1' onLoad={checkingDealer}></img>
                    <img src={personIcon} className='personIcon top_bottomIconMargin' id='2' onLoad={checkingDealer}></img>
                </div>

            </div>
        );
}

export default BelaBlok;