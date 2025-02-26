import React from 'react';

import './play.css'

const GAME_TIME = 30;




function createTimer(time, setTimer, changeGameState) {
    setTimer(time);
    let actualTime = time - 1; 
    const intervalID = setInterval(() => {
        if (actualTime == 0) {
            endGame(changeGameState, setTimer, intervalID);
        }
        setTimer(actualTime--);
    }, 1000);
    return intervalID;
}


function endGame(changeGameState, setTimer, timerID) {
    // this will reset the game and log the score
    //log the score
    reset(changeGameState, setTimer, timerID)
}


function reset(changeGameState, setTimer, timerID, updateUserInput, updateCurrentLetter) {
    // resets the timer and game state, but doesn't log the score
    changeGameState('start');
    setTimer(0);
    clearInterval(timerID);
    updateUserInput("");
    updateCurrentLetter("");
}


function playGame(changeGameState, setTimer, updateTimerID) {
    // changes the state to playing and sets a timer
    changeGameState('playing');
    const timerID = createTimer(GAME_TIME, setTimer, changeGameState);
    updateTimerID(timerID);
}


function addChar(char, userInput, updateUserInput) {
    let input = userInput;
    input += char;
    updateUserInput(input);
}

function getRandomCharacter() {
    const alph = "abcdefghijklmnopqrstuvwxyz";
    return alph[Math.floor(Math.random() * 27)];
}

export function MorseGame(props) {
    const [timer, setTimer] = React.useState(0);
    const [timerID, updateTimerID] = React.useState(0);
    const [gameState, changeGameState] = React.useState('start');
    const [score, updateScore] = React.useState(0);
    const [currentLetter, updateCurrentLetter] = React.useState(getRandomCharacter());
    const [userInput, updateUserInput] = React.useState("");
    const morseMap = JSON.parse('{"a": "._","b": "_...","c": "_._.","d": "_..","e": ".","f": ".._.","g": "__.","h": "....","i": "..","j": ".___","k": "_._","l": "._..","m": "__","n": "_.","o": "___","p": ".__.","q": "__._","r": "._.","s": "...","t": "_","u": ".._","v": "..._","w": ".__","x": "_.._","y": "_.__","z": "__.."}');

    function getMainElement(gameState) {
        // this returns either the start button or the 'your letter' prompt
        if (gameState == 'start') {
            return <button className="btn btn-success start-button" type="submit" onClick={() => playGame(changeGameState, setTimer, updateTimerID)}>Start</button>;
        } else if (gameState == 'playing') {
            return (
            <div>
                <p>Current Letter:</p><h1>{currentLetter}</h1>
                <h5>Your input: <span className="userInput">{userInput}</span></h5>
                <div className="tapInput">       
                    <button className="btn btn-primary" type="submit" onClick={() => addChar("_", userInput, updateUserInput)}>_</button>
                    <button className="btn btn-primary" type="submit" onClick={() => addChar(".", userInput, updateUserInput)}>.</button>
                </div>
                <div><button className="btn btn-success" type="submit" onClick={() => checkSubmission(userInput, currentLetter, updateCurrentLetter)}>SUBMIT!</button></div>
            </div>
            )
        }
    }

    function checkSubmission(userInput, currentLetter, updateCurrentLetter) {
        if (morseMap[currentLetter] == userInput) {
            while (true) {
                const newChar = getRandomCharacter();
                if (newChar != currentLetter) {
                    updateCurrentLetter(newChar);
                    break;
                }
            }
        }
    } // need an else statement here to say that something is wrong
    // have it change the background color if you got it right or not.



    return (

        <div className="container-fluid text-center" id="background-image" style={{backgroundImage: props.imageURL}}>

        <div className="container-fluid" id="back">
        <p>Logged in as <b>{props.userName}</b></p>
        <p>Time left: {timer} seconds</p>
        <p>Score: {score}</p>
        <div>{getMainElement(gameState)}</div>

        <button className="btn btn-secondary" type="submit" onClick={() => reset(changeGameState, setTimer, timerID, updateUserInput, updateCurrentLetter)}>RESET</button>
        </div>
        </div>
    )
}