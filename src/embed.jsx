// src/embed.js
import React from "react";
import ReactDOM from "react-dom/client";
import ChatWidget from "./ChatWidget";
import "./ChatWidget.css";

// Avoid duplicate render
if (!document.getElementById("my-chat-root")) {
  const container = document.createElement("div");
  container.id = "my-chat-root";
  document.body.appendChild(container);

  ReactDOM.createRoot(container).render(<ChatWidget />);
}
