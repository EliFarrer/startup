import React from 'react';

import './play.css'

function createTimer(time, setTimer) {
    setTimer(time);
    console.log("New timer created");
    let actualTime = time
    const intervalID = setInterval(() => {
        if (actualTime == 1) {
            clearInterval(intervalID);
            // log the score and other things
        }
        console.log(`actual time: ${actualTime}, time: ${time}`);
        setTimer(--actualTime);
    }, 1000);
}



export function MorseGame(props) {
    const [timer, setTimer] = React.useState(0);


    return (

        <div className="container-fluid text-center" id="background-image" style={{backgroundImage: props.imageURL}}>

        <div className="container-fluid" id="back">
        <p>Logged in as <b>{props.userName}</b></p>
        <p>Time left: {timer} seconds</p>
        <p>Score: 27</p>
        <h3>Current Letter:</h3>
        <h1>M</h1> 
        <h5>Your input:<input className="form-control-sm" placeholder="_ _" /></h5>
        <div className="tapInput">       
            <button className="btn btn-primary" type="submit">_</button>
            <button className="btn btn-primary" type="submit">.</button>
        </div>
        <div><button className="btn btn-success" type="submit" onClick={() => createTimer(5, setTimer)}>SUBMIT!</button></div>
        <button className="btn btn-secondary" type="submit">RESET</button>
        </div>
        </div>
    )
}