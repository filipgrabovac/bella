import React from "react";
import './BelaBlok.css';

const BelaBlok = ({enteringPoints, gameCallsButtons}) => {
        return(
            <div className='BelaBlok'>
                <ul className='gameRounds br4'>
                        
                </ul>
                <div className='inputsAndButtons flex flex-wrap'>
                    
                    <div className='flex flex-wrap gameButtons'>
                        <button id='game' className="buttonsToggle gameButton grow w-20 br4" onClick={gameCallsButtons}>Igra</button>
                        <button id='calls' className="gameButton w-20 grow br4" onClick={gameCallsButtons}>Zvanja</button>
                        <button id='enteringPoints' className='gameButton grow br4 ml5'>Upiši bodove</button>
                    </div>

                    <div className='Inputs flex flex-wrap'>
                        <input id = 'us' type = 'number' placeholder='Mi' className="tc br4 w-25 h3 f2 bn Input grow" onChange={enteringPoints}/>
                        <input id = 'them' type = 'number' placeholder ='Vi' className="tc br4 w-25 h3 f2 bn Input grow" onChange={enteringPoints}/>
                    </div>

                </div>
            </div>
        );
    
}

export default BelaBlok;