import React from "react";
import { GameNotifier } from "./gameNotifier";

export function ScoreUpdates() {
    // const updates = [<li className="playerUpdate">John got 34 letters in 1 minute.</li>, <li className="playerUpdate">Peter got a score of 27.</li>, <li className="playerUpdate">James got 13.</li>];
    // const updates = ['John got 34 letters in 1 minute.', 'Peter got a score of 27.', 'James got 13.'];
    // const names = ['Peter', 'James', 'John', 'Timothy', 'Russell', 'Dallin', 'Gerritt'];

    const [messages, updateMessages] = React.useState([]);

    React.useEffect(() => {
        GameNotifier.addHandler(handleMessage);

        return () => {
            GameNotifier.removeHandler(handleMessage);
        };
    });

    function handleMessage(newMessage) {
        updateMessages([...messages, newMessage]);
    }

    // function getNewMessage() {
    //     const nameIdx = Math.floor(Math.random() * names.length);
    //     const randomScore = Math.floor(Math.random() * 40);
    //     return names[nameIdx] + " scored " + randomScore;
    // }


    function createMessageArray() {
        let messageArray = [];


        // setInterval(() => {
        //     let newMessages = [];
        //     const newMessage = getNewMessage();
        //     if (messages.length > 2) {
        //         newMessages = [...messages.slice(1), newMessage];
        //     } else {
        //         newMessages = [...messages, newMessage]
        //     }
        //     updateMessages(newMessages);
        // }, 5000);

        for (const [i, message] of messages.entries()) {
            messageArray.push(
                <li key={i} className="playerUpdate">{message.name} scored {message.score}</li>
            );
        }
        
        return messageArray.length < 4 ? messageArray : messageArray.slice(-3);
    }

    return (
        <div className="container-fluid" id="popup">Updates:
        <ul className="playerUpdates">{createMessageArray()}</ul>
        </div>
    )
}