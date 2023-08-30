import React from "react";
import './BelaBlok.css';

const BelaBlok = () => {
        return(
            <div className='BelaBlok'>
                <div className='inputsAndButtons'>
                    <div className='flex flex-wrap gameButtons'>
                        <button className="gameButton grow mh2 w-20 br4">Igra</button>
                        <button className="gameButton grow mh2 w-20 br4">Zvanja</button>
                    </div>

                    <div className='Inputs flex flex-wrap'>
                        <input placeholder ='Mi' className="tc br4 w-25 h3 f2 bn Input grow"/>
                        <input placeholder ='Vi' className="tc br4 w-25 h3 f2 bn Input grow"/>
                    </div>
                </div>
            </div>
        );
    
}

export default BelaBlok;