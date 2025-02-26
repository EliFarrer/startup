import React from 'react';

import './play.css'

const GAME_TIME = 500;

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
    
    const morseMap = JSON.parse('{"a": "._","b": "_...","c": "_._.","d": "_..","e": ".","f": ".._.","g": "__.","h": "....","i": "..","j": ".___","k": "_._","l": "._..","m": "__","n": "_.","o": "___","p": ".__.","q": "__._","r": "._.","s": "...","t": "_","u": ".._","v": "..._","w": ".__","x": "_.._","y": "_.__","z": "__.."}');

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
                    <button className="btn btn-primary" type="submit" onClick={() => addChar("_")}>_</button>
                    <button className="btn btn-primary" type="submit" onClick={() => addChar(".")}>.</button>
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
    
    
    function endGame() {
        // this will reset the game and log the score
        //log the score
        reset()
    }
    
    
    function reset() {
        // resets the timer and game state, but doesn't log the score
        changeGameState('start');
        setTimer(0);
        clearInterval(timerID);
        updateUserInput("");
        updateCurrentLetter("");
    }
    
    
    function playGame() {
        // changes the state to playing and sets a timer
        changeGameState('playing');
        const timerID = createTimer(GAME_TIME, setTimer, changeGameState);
        updateTimerID(timerID);
    }
    
    
    function addChar(char) {
        updateUserInput(userInput + char);
    }

    function getNewCharacter(oldCharacter) {
        while (true) {
            const newChar = _getRandomCharacter();
            if (newChar != oldCharacter) {
                updateCurrentLetter(newChar);
                break;
            }
        }
    }


    
    // its doing the thing where it renders all at once
    // function fadeColorOut() {
    //     const colorIntervalID = setInterval(() => {
    //         console.log("start function");
    //         console.log(`old color ${backgroundColor}`);

    //         let tempColor = backgroundColor;
    //         let temp = tempColor.split(',')[3];
    //         let num = Number(temp.slice(1, temp.length-1)) - .001;
    //         if (num < 0) {
    //             num = 0;
    //             clearInterval(colorIntervalID);
    //         }
    //         const idxOfLastComma = tempColor.lastIndexOf(',');
    //         const newColor = tempColor.slice(0, idxOfLastComma+2) + String(num) + ')';
    //         console.log(`new color ${newColor}`);
    //         console.log(newColor);
    //         setBackgroundColor(newColor);
    //     }, 1000);
    // }

    function checkSubmission() {
        console.log("check submision");

        if (morseMap[currentLetter] == userInput) { // correct
            console.log(`Last letter: ${currentLetter}`);
            updateCurrentLetter(getNewCharacter(currentLetter));
            console.log(`New letter: ${currentLetter}`);
            updateScore(score + 1);
            // setBackgroundColor('rgba(101, 227, 95, 1)');
            console.log(`updated the background color green ${backgroundColor}`);
            // fadeColorOut();
        } else {    // incorrect
            // setBackgroundColor('rgba(237, 59, 59, 1)');
            console.log(`updated the background color red ${backgroundColor}`);
            // fadeColorOut();
        }
    }



    return (

        <div className="container-fluid text-center" id="background-image" style={{backgroundImage: props.imageURL}}>

        <div className="container-fluid" id="back">
        <p>Logged in as <b>{props.userName}</b></p>
        <p>Time left: {timer} seconds</p>
        <p>Score: {score}</p>
        <div>{getMainElement(gameState)}</div>

        <button className="btn btn-secondary" type="submit" onClick={() => reset()}>RESET</button>
        </div>
        </div>
    )
}