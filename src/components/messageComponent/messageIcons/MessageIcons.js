import React from "react";
import "./MessageIcons.css";
import { Link } from "react-router-dom";



function MessageIcons({ active, text, Icon, path }) {
  return (
    <div className={`MessageIcons ${active && "MessageIcons--active"}`}>
      <MessageIcons />
      <Link to={path}>{text}</Link>
    </div>
  );
}




export default MessageIcons;