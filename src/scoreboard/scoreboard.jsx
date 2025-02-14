import React from 'react';

export function Scoreboard() {
  return (
    <main className="container-fluid">
        <div className="container-fluid" id="popup">Updates:
            <ul className="playerUpdates">
                <li className="playerUpdate">John got 34 letters in 1 minute.</li>
                <li className="playerUpdate">Peter got a score of 27.</li>
                <li className="playerUpdate">James got 13.</li>
            </ul>
        </div>

        <h3>Logged in as <input type="text" className="form-control-lg" placeholder="Eli Farrer" /></h3>
        <div className="container-fluid" id="popup">
        <h1 className="scoreboardTitle"> Scoreboard</h1> 
        <ol className="scoreboard">
            <li className="playerScore">Johnathan: 34</li>
            <li className="playerScore">Peter: 18</li>
            <li className="playerScore">Eli: 1</li>
        </ol>
        <h3 className="loggedPlayerHighScore">Your high score: 1</h3>
        </div>
    </main>
  );
}