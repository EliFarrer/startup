import React from 'react';

import './play.css'

export function MorseGame(props) {
    return (

        <div className="container-fluid text-center" id="background-image" style={{backgroundImage: props.imageURL}}>

        <div className="container-fluid" id="back">
        <p>Logged in as <b>{props.userName}</b></p>
        <p>Time left: 30 seconds</p>
        <p>Score: 27</p>
        <h3>Current Letter:</h3>
        <h1>M</h1> 
        <h5>Your input:<input className="form-control-sm" placeholder="_ _" /></h5>
        <div className="tapInput">       
            <button className="btn btn-primary" type="submit">_</button>
            <button className="btn btn-primary" type="submit">.</button>
        </div>
        <div><button className="btn btn-success" type="submit">SUBMIT!</button></div>
        <button className="btn btn-secondary" type="submit">RESET</button>
        </div>
        </div>
    )
}