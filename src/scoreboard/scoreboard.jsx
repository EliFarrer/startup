import React from 'react';

export function Scoreboard() {
  const score1 = { name:"ELI", num:'16'};
  const score2 = { name:"KPJM", num:'26'};
  const myscores = { score1, score2 };

  localStorage.setItem('scores', JSON.stringify(myscores));

  const [scores, setScores] = React.useState([]);

  setTimeout(() => {
    const text = localStorage.getItem('scores');
    console.log(text);
    if (text) { // if we have stuff
      setScores(JSON.parse(text)); // converts to a javascript object
      console.log("Scores text: " + text);

    }
  }, 5000); // only do this the first time

  
  /* this is all the code we will inject into the table */
  const scoreEntries = [];
  if (scores.length) { // if we have scores
    for(const [i, score] of scores.entries()) {
      console.log("I: " + i + " score: " + score);
      scoreEntries.push(
        "yeet"
        // <li>{score.name}: {score.num}</li>
      );
    }
  } else { // if we don't have any scores
    scoreEntries.push('No scores yet... :(');
  }


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
        <ol className="scoreboard">{scoreEntries}
            {/* <li className="playerScore">Johnathan: 34</li>
            <li className="playerScore">Peter: 18</li>
            <li className="playerScore">Eli: 1</li> */}
        </ol>
        <h3 className="loggedPlayerHighScore">Your high score: 1</h3>
        </div>
    </main>
  );
}