import React from 'react';

export function Play() {
  return (
    <main className="container-fluid">
        <div className="container-fluid" id="popup">Updates:
        <ul className="playerUpdates">
            <li className="playerUpdate">John got 34 letters in 1 minute.</li>
            <li className="playerUpdate">Peter got a score of 27.</li>
            <li className="playerUpdate">James got 13.</li>
        </ul>
        </div>

        <div className="container-fluid text-center" id="background-image">
            <div className="container-fluid" id="back">
            <p3>Logged in as <input className="form-control-sm" placeholder="Eli Farrer" /></p3>
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
    </main>
  );
}