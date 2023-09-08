import React from "react";
import './CreatedBy.css';

const CreatedBy = ({restartGame}) => {
    return(
        <div className=''>
            <footer>
                CreatedBy @ Filip Grabovac 
                <button className = 'ml3' onClick={restartGame}>Restart!</button>
            </footer>
            
        </div>
    );
}

export default CreatedBy;