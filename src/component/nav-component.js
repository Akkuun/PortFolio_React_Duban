import React from "react";
import {useState} from "react";
import "../style/css/nav-component.css";


const NavComponent = () => {
    const [navOpen, setNavOpen] = useState(false);
    return (
        <div className="nav">
            <div className="nav-container">
                <div className="navbar">

                    <div className="menu-togle" onClick={() => setNavOpen(!navOpen)}>
                        <div className={navOpen ? "hamBox hamBoxOpen": "hamBox"}>
                            <span className={navOpen ? "lineTop spin" : "lineTop"}></span>
                            <span className={navOpen? "lineBottom spin" : "lineBottom"}></span>
                        </div>
                    </div>

                </div>
                <div className="nav-overlay" style={{
                    top: navOpen ? "0" : "-100%",
                    transitionDelay: navOpen ? "0ms" : "300ms",
                    background : navOpen ?  " rgba(128, 128, 128, 0.7)" : "transparent",
                }}></div>
            </div>
        </div>
    );
}
export default NavComponent;