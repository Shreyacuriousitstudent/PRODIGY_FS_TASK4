const net = require('net');

// Create a TCP Server
const server = net.createServer((socket) => {
    console.log('Client connected.');

    const welcomeMsg = 'Hello, client!\n';
    socket.write(welcomeMsg);
    console.log(`Sent to client: ${welcomeMsg.trim()}`);

    socket.on('data', (data) => {
        console.log(`Received from client: ${data.toString().trim()}`);

        // Optional: Echo back the received data
        const reply = `Server received: ${data.toString()}`;
        socket.write(reply);
        console.log(`Sent to client: ${reply.trim()}`);
    });

    socket.on('end', () => {
        console.log('Client disconnected.');
    });

    socket.on('error', (err) => {
        console.error(`Socket error: ${err.message}`);
    });
});

server.listen(8000, () => {
    console.log('Server is listening on port 8000...');
});
