const { WebSocketServer } = require('ws');

function peerProxy(server) {
    socketServer = new WebSocketServer({server});

    socketServer.on('connection', (socket) => {
        socket.isAlive = true;

        // this handles messages
        socket.on('message', function message(data) {
            // the clients are all of the people connected to the ws
            socketServer.clients.forEach((client) => {
                if (client != socket && client.readyState === WebSocket.OPEN) {
                    client.send(data);
                }
            });
        });

        socket.on('pong', () => {
            socket.isAlive = true;
        });
    })

    setInterval(() => {
        socketServer.clients.forEach(function each(client) {
            // if the client is dead, then kill it
            if (client.isAlive === false) {
                return client.terminate();
            }

            // go through and set every client to false
            // then when we ping again, it will be set back to true
            // if we come back around and it is still false get rid of it
            client.isAlive = false;
            client.ping();
        });
    }, 10000)
}