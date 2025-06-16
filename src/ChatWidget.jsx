import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";


const ChatWidget = () => {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ position: "fixed", bottom: "20px", right: "20px", zIndex: 9999 }}>
      {open && (
        <div style={{ width: 300, height: 400, background: "#fff", border: "1px solid #ccc", borderRadius: 8 }}>
          <p style={{ padding: 10 }}>Hello! How can I help you?</p>
        </div>
      )}
      <button
        onClick={() => setOpen(!open)}
        style={{ padding: "10px", borderRadius: "50%", background: "#007bff", color: "#fff", border: "none" }}
      >
       Click Me
      </button>
    </div>
  );
};

// Expose the init function globally
window.initMyChatWidget = (containerId = "my-chat-root") => {
  const container = document.getElementById(containerId) || document.body;
  const el = document.createElement("div");
  el.id = "chat-widget-container";
  container.appendChild(el);

  ReactDOM.createRoot(el).render(<ChatWidget />);
};
