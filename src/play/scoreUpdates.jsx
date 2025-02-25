import React from "react";

export function ScoreUpdates() {
    const updates = [<li className="playerUpdate">John got 34 letters in 1 minute.</li>, <li className="playerUpdate">Peter got a score of 27.</li>, <li className="playerUpdate">James got 13.</li>];

    // const [events, setEvent] = React.useState(updates);

    function createMessageArray() {
        let messageArray = [];
        for (let i = 0; i < updates.length; i++) {
            messageArray.push(
                <li>{updates[i]}</li>
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