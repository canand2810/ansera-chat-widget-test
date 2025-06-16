// src/ChatWidget.jsx
import React, { useState } from 'react';
import './css/ChatWidget.css'; // Import the CSS file

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="chat-widget-container"> {/* Apply container class */}
      <button
        onClick={toggleChat}
        className="chat-toggle-button" // Apply button class
      >
        {isOpen ? 'Close Chat' : 'Open Chat'}
      </button>

      {isOpen && (
        <div className="chat-window"> {/* Apply chat window class */}
          <div className="chat-header"> {/* Apply header class */}
            Live Chat
          </div>
          <div className="chat-messages"> {/* Apply messages area class */}
            {/* Chat messages would go here */}
            <p>Welcome to our chat!</p>
            <p>How can we help you today?</p>
          </div>
          <div className="chat-input-area"> {/* Apply input area class */}
            <input
              type="text"
              placeholder="Type your message..."
              className="chat-input" // Apply input class
            />
            <button
              className="chat-send-button" // Apply send button class
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;