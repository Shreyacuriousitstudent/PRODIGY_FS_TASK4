# 💬 Terminal Chatting Application using TCP Sockets (Node.js)

This is a **simple real-time chat application** built using **Node.js** and the built-in `net` module to establish **TCP socket communication** between a server and client. Both server and client can exchange messages, and all interactions are logged in the terminal.

This project demonstrates the **fundamentals of low-level networking in Node.js**, and serves as a great introduction to socket-based programming.

---

## 📦 Features

- 📡 TCP Server using `net.createServer()`
- 💬 Bi-directional communication between client and server
- 🧾 Message logging on both sides
- 🔌 Real-time data exchange using sockets
- 🛠️ Error handling for graceful disconnection

---

## 📁 Project Structure


---

## 💡 Technologies Used

- [Node.js](https://nodejs.org/)
- Native `net` module (no external dependencies)

---

## 🛠️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/tcp-chat-app.git
cd tcp-chat-app
Server is listening on port 8000...
Client connected.
Sent to client: Hello, client!
Received from client: Hello Server!
Sent to client: Server received: Hello Server!


Connected to server
Received from server: Hello, client!
Received from server: Server received: Hello Server!

🚀 Future Enhancements
🔁 Interactive CLI input (send messages from terminal in real time)

🧑‍🤝‍🧑 Multi-client support

🗂️ Log messages into a file

🔒 Add encryption or secure connection (TLS)


This project is licensed under the MIT License.

---

Let me know if you'd like:
- An **interactive CLI version** using `readline`
- Multiple clients to chat with each other via the server
- A version using **WebSockets** in the browser

Happy coding! 💬✨
