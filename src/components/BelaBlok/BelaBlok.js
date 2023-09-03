import React from "react";
import './BelaBlok.css';

const BelaBlok = ({displayingPoints, gameCallsButtons, enteringRoundPoints}) => {
        return(
            <div className='BelaBlok'>
                <ul className='gameRounds br4'>
                        
                </ul>
                <div className='inputsAndButtons flex flex-wrap'>
                    
                    <div className='flex flex-wrap gameButtons'>
                        <button id='game' className="buttonsToggle gameButton grow w-20 br4" onClick={gameCallsButtons}>Igra</button>
                        <button id='calls' className="gameButton w-20 grow br4" onClick={gameCallsButtons}>Zvanja</button>
                        <button id='enteringPoints' className='gameButton grow br4 ml5' onClick={enteringRoundPoints}>Upiši bodove</button>
                    </div>

                    <div className='Inputs flex flex-wrap'>
                        <input id = 'roundPointsUs' type = 'number' placeholder='Mi' className="tc br4 w-25 h3 f2 bn Input grow" onChange={displayingPoints}/>
                        <input id = 'roundPointsThem' type = 'number' placeholder ='Vi' className="tc br4 w-25 h3 f2 bn Input grow" onChange={displayingPoints}/>
                    </div>

                </div>
            </div>
        );
    
}

export default BelaBlok;