import React, {useEffect, useState} from 'react';
import "../style/css/header-component-style.css";
import {TypeAnimation} from "react-type-animation";
import pic from "../style/picture/picture_about_me.PNG";
import github from "../style/picture/github.png";
import linkedin from "../style/picture/linkedin.png";
import github_hover from "../style/picture/githubHover.png";
import linkedin_hover from "../style/picture/linkedinHover.png";
import mail from "../style/picture/mail.png";
import mailHover from "../style/picture/mailHover.png";
import back_to_top_button from "../style/picture/back-to-top_button.svg"
const HeaderComponent = () => {
    useEffect(() => {
        const handleMouseMove = (e) => {
            document.querySelectorAll('.layer').forEach(layer => {
                const speed = layer.getAttribute('data-speed');
                const x = (window.innerWidth - e.pageX * speed) / 50;
                const y = (window.innerHeight - e.pageY * speed) / 50;
                layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
            });
        };

        document.addEventListener("mousemove", handleMouseMove);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    const [isGithubHovered, setIsGithubHovered] = useState(true);
    const [isLinkedinHovered, setIsLinkedinHovered] = useState(true);
    const [isMailHovered, setIsMailHovered] = useState(true);
    const handleGithubHover = () => {
        setIsGithubHovered(true);
    };

    const handleGithubLeave = () => {
        setIsGithubHovered(false);
    };
    const handleLinkedinHover = () => {
        setIsLinkedinHovered(true);
    }
    const handleLinkedinLeave = () => {
        setIsLinkedinHovered(false);
    }
    const handleMailHover = () => {
        setIsMailHovered(true);
    }
    const handleMailLeave = () => {
        setIsMailHovered(false);
    }

    return (
        <div className="header-component">
            <div id="back-to-top-section" >
                <a href="#top-of-page">
                <img   src={back_to_top_button} alt="back-to-top" id="back-to-top-button" />
                </a>
            </div>
            <div className="Name">
                <h4 id="Hi"> Hi, my name is </h4>
                <h1 id="Mathis"> Mathis Duban</h1>
                <h1 id="Texte_animation">
                    <TypeAnimation
                        sequence={[
                            'I build websites with React',
                            1000,
                            'I create software with web services',
                            1000,
                            'I am a passionate developer',
                            1000,
                        ]}
                        wrapper="span"
                        speed={50}
                        style={{fontSize: '1em', display: 'inline-block'}}
                        repeat={Infinity}
                    />
                </h1>
                <div id="picture_about_me">
                    <img src={pic} className={"layer"} alt="pic" id="pic" height="80%" width="80%" data-speed="2"/>
                </div>

            </div>
            <div id="social">
                <a href={"https://github.com/Akkuun"} target="_blank">
                    <img src={isGithubHovered ? github : github_hover} onMouseEnter={handleGithubLeave}
                         onMouseLeave={handleGithubHover} alt="github" id="github-logo" height="25px" width="25px"/>
                </a>
                <a href={"https://www.linkedin.com/in/mathis-duban-b15957236/"} target="_blank">
                    <img src={isLinkedinHovered ? linkedin : linkedin_hover} onMouseEnter={handleLinkedinLeave}
                         onMouseLeave={handleLinkedinHover} alt="github" id="linkin-logo" height="25px" width="25px"/>
                </a>
                <a href={"mailto:mathisduban.pro@gmail.fr"} target="_blank">
                    <img src={isMailHovered? mail : mailHover} onMouseEnter={handleMailLeave}
                         onMouseLeave={handleMailHover} alt="github" id="linkin-logo" height="25px" width="25px"/>
                </a>
            </div>


        </div>
    );
};

export default HeaderComponent;
