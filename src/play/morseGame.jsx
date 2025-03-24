import React, { act } from 'react';

import './play.css'

const GAME_TIME = 20;

function _getRandomCharacter() {
    const alph = "abcdefghijklmnopqrstuvwxyz";
    return alph[Math.floor(Math.random() * 27)];
}

export function MorseGame(props) {
    const [timer, setTimer] = React.useState(0);
    const [timerID, updateTimerID] = React.useState(0);
    const [gameState, changeGameState] = React.useState('start');
    const [score, updateScore] = React.useState(0);
    const [currentLetter, updateCurrentLetter] = React.useState("t");
    const [backgroundColor, setBackgroundColor] = React.useState('rgba(0, 0, 0, 0)');
    const [userInput, updateUserInput] = React.useState("");
    const [backgroundPicture, updateBackgroundPicture] = React.useState("");


    // where in the world is my picture?

    React.useEffect(() => {
        updateBackgroundPicture('https://picsum.photos/400/300');
    }, []);

    const morseMap = JSON.parse('{"a": "._","b": "_...","c": "_._.","d": "_..","e": ".","f": ".._.","g": "__.","h": "....","i": "..","j": ".___","k": "_._","l": "._..","m": "__","n": "_.","o": "___","p": ".__.","q": "__._","r": "._.","s": "...","t": "_","u": ".._","v": "..._","w": ".__","x": "_.._","y": "_.__","z": "__.."}');

    React.useEffect(() => {
        // the score is saved every time the game ends or the score changes
        if (gameState === 'end') {
            saveScore(score);
        }
    }, [score, gameState]);

    function getMainElement(gameState) {
        // this returns either the start button or the 'your letter' prompt
        if (gameState == 'start') {
            return <button className="btn btn-success start-button" type="submit" onClick={() => playGame()}>Start</button>;
        } else if (gameState == 'playing') {
            return (
            <div>
                <p>Current Letter:</p><h1 className="answerBox" style={{backgroundColor: backgroundColor}}>{currentLetter}</h1>
                <h5>Your input: <span className="userInput">{userInput}</span></h5>
                <div className="tapInput">       
                    <button className="btn btn-primary" type="submit" onClick={() => addCharacter("_")}>_</button>
                    <button className="btn btn-primary" type="submit" onClick={() => addCharacter(".")}>.</button>
                </div>
                <div><button className="btn btn-success" type="submit" onClick={() => checkSubmission()}>SUBMIT!</button></div>
            </div>
            )
        }
    }

    function createTimer(time) {
        setTimer(time);
        let actualTime = time - 1; 
        const intervalID = setInterval(() => {
            if (actualTime == 0) {
                endGame(intervalID);
            }
            setTimer(actualTime--);
        }, 1000);
        return intervalID;
    }
    
    function endGame(id) {
        changeGameState('end');
        clearInterval(id);
    }

    async function saveScore(score) {
        const newScore = { name: props.email, num: score };
    
        await fetch('/api/score', {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify(newScore),
        });
    }
    
    function reset() {
        // resets the timer and game state, but doesn't log the score
        changeGameState('start');
        setTimer(0);
        clearInterval(timerID);
        updateUserInput("");
        updateCurrentLetter(getNewCharacter(currentLetter));
        updateScore(0);
        setBackgroundColor('rgba(0, 0, 0, 0)');
    }
    
    
    function playGame() {
        // changes the state to playing and sets a timer
        changeGameState('playing');
        const timerID = createTimer(GAME_TIME, setTimer, changeGameState);
        updateTimerID(timerID);
    }
    
    
    function addCharacter(char) {
        updateUserInput(userInput + char);
    }

    function getNewCharacter(oldCharacter) {
        while (true) {
            const newChar = _getRandomCharacter();
            if (newChar != oldCharacter) {
                return newChar;
            }
        }
    }


    function checkSubmission() {
        if (morseMap[currentLetter] == userInput) { // correct answer
            correctAnswer();
            setBackgroundColor('rgba(101, 227, 95, 1)');
        } else {                                    // incorrect
            incorrectAnswer();
            setBackgroundColor('rgba(237, 59, 59, 1)');
        }
    }


    function correctAnswer() {
        updateCurrentLetter(getNewCharacter(currentLetter));
        updateScore(prevScore => prevScore + 1);
        updateUserInput("");
    }


    function incorrectAnswer() {
        updateUserInput("");
    }


    return (
        <div className="container-fluid text-center" id="background-image" style={{backgroundImage: `url(${backgroundPicture})`}}>

        <div className="container-fluid" id="back">
        <p>Logged in as <b>{props.email}</b></p>
        <p>Time left: {timer} seconds</p>
        <p>Score: {score}</p>
        <div>{getMainElement(gameState)}</div>

        <button className="btn btn-secondary" type="submit" onClick={() => reset()}>RESET</button>
        </div>
        </div>
    )
}