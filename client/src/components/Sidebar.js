import React from "react";
import "../index.css"
import { SidebarData } from "./SidebarData";
import logo from "./logo.png";

function Sidebar() {
    return <div className="sidebar">
        <img src={logo} alt="Logo" className="logo"/>
        <ul className="List">
            {SidebarData.map((val, key) => {
                return(
                    <li 
                        key={key} 
                        className="row"
                        onClick={() => {window.location.pathname = val.link}}>
                        <div className="iconSide">{val.icon}</div>
                        <div>
                            {val.title}
                        </div>
                    </li>
                );
            })}
        </ul>
    </div>
}

export default Sidebar;