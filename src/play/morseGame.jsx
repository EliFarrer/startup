import React from 'react';

import './play.css'

export function MorseGame(props) {
    return (

        <div className="container-fluid text-center" id="background-image" style={{backgroundImage: props.imageURL}}>

        <div className="container-fluid" id="back">
        <p3>Logged in as {props.userName}</p3>
        <label className="timeRemaining">Time left: <input className="form-control-sm" placeholder="30 seconds" /></label>
        <label className="score">Score: <input className="form-control-sm" placeholder="20" /></label>
        <h1> M </h1> 
        <h5>Your input:<input className="form-control-sm" placeholder="_ _" /></h5>
        <div className="tapInput">       
            <button className="btn btn-primary" type="submit">_</button>
            <button className="btn btn-primary" type="submit">.</button>
        </div>
            <button className="btn btn-secondary" type="submit">RESET</button>
        </div>

        </div>
    )
}