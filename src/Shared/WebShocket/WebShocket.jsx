import React, { useState, useCallback, useEffect } from 'react';
import io from 'socket.io-client';

export const WebSocket = () => {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const socket = io('http://localhost:8000/socket.io'); // Replace with your server URL
  
    useEffect(() => {
      // Listen for incoming messages from the server
      socket.on('message', (data) => {
        setMessages((prevMessages) => [...prevMessages, data]);
      });
    }, []);
  
    const handleSendMessage = () => {
      if (message.trim() !== '') {
        socket.emit('message', message);
        setMessage('');
      }
    };


    return (
        <div>
            <h1>Socket.io Chat</h1>
            <div className="messages">
                {messages.map((msg, index) => (
                    <div key={index} className="message">
                        {msg}
                    </div>
                ))}
            </div>
            <div className="input-container">
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type a message..."
                />
                <button onClick={handleSendMessage}>Send</button>
            </div>
        </div>
    );
};