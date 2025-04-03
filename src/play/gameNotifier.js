class GameEventNotifier {
    events = [];
    handlers = [];

    constructor() {
        let port = window.location.port;
        const protocol = window.location.protocol === "http:" ? "ws" : "wss";
        // we will use /ws for all of the websocket requests
        this.socket = new WebSocket(`${protocol}://${window.location.hostname}:${port}/ws`);

        this.socket.onmessage = async (message) => {
            try {
                const event = JSON.parse(await message.data.text());
                this.receiveEvent(event);
            } catch {}
        };
    }

    addHandler(handler) {
        this.handlers.push(handler);
    }

    removeHandler(handler) {
        this.handlers.filter((h) => h !== handler);
    }

    broadcastScore(score) {
        this.socket.send(JSON.stringify(score));
    }
    
    // receives some kind of event (an EventMessage)
    receiveEvent(event) {
        this.events.push(event);

        this.events.forEach((event) => {
            this.handlers.forEach((handler) => {
                // call the handler on the current event, this will update the list on the frontend
                handler(event);
            });
        });
    }
}

const GameNotifier = new GameEventNotifier();
export { GameNotifier }