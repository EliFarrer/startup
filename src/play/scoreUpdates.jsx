import React from "react";

export function ScoreUpdates() {
    // const updates = [<li className="playerUpdate">John got 34 letters in 1 minute.</li>, <li className="playerUpdate">Peter got a score of 27.</li>, <li className="playerUpdate">James got 13.</li>];
    const updates = ['John got 34 letters in 1 minute.', 'Peter got a score of 27.', 'James got 13.'];
    const names = ['Peter', 'James', 'John', 'Timothy', 'Russell', 'Dallin', 'Gerritt'];

    const [messages, updateMessages] = React.useState([]);

    function getNewMessage() {
        const nameIdx = Math.floor(Math.random() * names.length);
        const randomScore = Math.floor(Math.random() * 40);
        return names[nameIdx] + " scored " + randomScore;
    }


    function createMessageArray() {
        // only show top 3 entries

        let messageArray = [];


        setInterval(() => {
            let newMessages = [];
            const newMessage = getNewMessage();
            if (messages.length > 2) {
                newMessages = [...messages.slice(1), newMessage];
            } else {
                newMessages = [...messages, newMessage]
            }
            // console.log(`new messages ${newMessages}`); something weird may be happening here
            updateMessages(newMessages);
        }, 5000);

        for (const [i, message] of messages.entries()) {
            messageArray.push(
                <li key={i} className="playerUpdate">{message}</li>
            );
        }
        return messageArray;
    }

    return (
        <div className="container-fluid" id="popup">Updates:
        <ul className="playerUpdates">{createMessageArray()}</ul>
        </div>
    )
}