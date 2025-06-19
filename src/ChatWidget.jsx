import React, { useState } from "react";

const ChatWidget = () => {
  const [message, setMessage] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && message.trim()) {
      alert(`You typed: ${message}`);
      setMessage(""); // clear the input
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        left: "10%",
        width: "80%",
        zIndex: 9999,
        background: "#fff",
        padding: "10px",
        boxShadow: "0 -2px 10px rgba(0,0,0,0.1)",
        borderTop: "1px solid #ccc",
      }}
    >
      <input
        type="text"
        placeholder="Type your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        style={{
          width: "100%",
          padding: "10px",
          fontSize: "16px",
          borderRadius: "6px",
          border: "1px solid #ccc",
        }}
      />
    </div>
  );
};

export default ChatWidget;
