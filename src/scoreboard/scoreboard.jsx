import React from 'react';

export function Scoreboard() {
  const [scores, setScores] = React.useState([]);

  React.useEffect(() => {
    // fetch the scores and parse them and set them
    fetch('/api/scores').then((response) => {
      return response.json();
    }).then((scores) => {
      setScores(scores);
    });
  }, []); // only do this the first time

  
  /* this is all the code we will inject into the table */
  const scoreEntries = [];
  if (scores.length) { // if we have scores
    for(const [i, score] of scores.entries()) {
      scoreEntries.push(
        <li>{score.name}: {score.num}</li>
      );
    }
  } else { // if we don't have any scores
    scoreEntries.push('No scores yet... :(');
  }

  const userHighScore = findUserHighScore(scores);
  // const userHighScore = 'hello';

  return (
    <main className="container-fluid">
        <div className="container-fluid" id="popup">
        <h1 className="scoreboardTitle"> Scoreboard</h1> 
        <ol className="scoreboard">{scoreEntries}</ol>
        <h3 className="loggedPlayerHighScore">Your high score: {userHighScore}</h3>
        </div>
        <h3>Logged in as <input type="text" className="form-control-lg" placeholder="Eli Farrer" /></h3>
    </main>
  );
}

function findUserHighScore(scores) {
  const email = localStorage.getItem('email');
  var highestScore = 0;
  for (const [i, score] of scores.entries()) {
    if (score.name == email) {
      if (score.num > highestScore) {
        highestScore = score.num;
      }
    }
  }
  return highestScore == 0 ? 'No score yet...' : highestScore;
}