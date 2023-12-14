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
                            <span className={navOpen ? "lineTop2 spin" : "lineTop2"}></span>
                            <span className={navOpen ? "lineTop spin" : "lineTop"}></span>
                            <span className={navOpen? "lineBottom spin" : "lineBottom"}></span>
                        </div>
                    </div>

                </div>
                <div className="nav-overlay" style={{
                    top: navOpen ? "0" : "-100%",
                    transitionDelay: navOpen ? "0ms" : "300ms",
                    background : navOpen ?  " rgba(48, 46, 48, 0.7)" : "transparent",
                }}>


                    <a href="#map"> toto</a>


                </div>
            </div>
        </div>
    );
}
export default NavComponent;