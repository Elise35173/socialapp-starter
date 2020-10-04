import React from "react";
import "./MenuIcons.css"
import { Link } from "react-router-dom";


function MenuIcons({ active, text, Icon, path }) {
  return (
    
    <div className={`MenuIcons ${active && "MenuIcons--active"}`}>
      
      <Icon />

      <Link to={path}>{text}</Link>
    </div>
  );
}

export default MenuIcons;
