const net = require('net');

// Connect to the server
const client = net.createConnection({ port: 8000 }, () => {
    console.log('Connected to server');
    client.write('Hello Server!');
});

// Receive data from the server
client.on('data', (data) => {
    console.log(`Received from server: ${data.toString().trim()}`);
});

// Handle disconnection
client.on('end', () => {
    console.log('Disconnected from server');
});
