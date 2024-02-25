
import "../style/css/form-component.css";
import github from "../style/picture/github.png";
import linkedin from "../style/picture/linkedin.png";
import github_hover from "../style/picture/githubHover.png";
import linkedin_hover from "../style/picture/linkedinHover.png";
import React, {useState} from 'react';
import qrcode from "../style/picture/QRcode.png";
import { Player } from '@lottiefiles/react-lottie-player';
import animatedArrow from '../style/gif/Animation_arrow.json';

const FormComponent = () => {

    const [isGithubHovered_contact, setIsGithubHovered_contact] = useState(true);
    const [isLinkedinHovered_contact, setIsLinkedinHovered_contact] = useState(true);
    const handleGithubHover_contact = () => {
        setIsGithubHovered_contact(true);
    };

    const handleGithubLeave_contact = () => {
        setIsGithubHovered_contact(false);
    };
    const handleLinkedinHover_contact = () => {
        setIsLinkedinHovered_contact(true);
    }
    const handleLinkedinLeave_contact = () => {
        setIsLinkedinHovered_contact(false);
    }

    return (
        <div className="form-component">

            <div id="contactAndSocial">
                <div id="contact">
                    <h1 className="PageTitle"> Contact</h1>
                    <h4 id="Touch">Get in touch</h4>
                </div>

                <div id="emailAdress">
                    <h4 id="WhiteH4Title">Email adress</h4>
                    <h5 id="GreyH5Text">mathisduban.pro@gmail.com</h5>
                </div>

                <div id="phoneNumber">
                    <h4 className="WhiteH4Title">Phone number</h4>
                    <h5 className="GreyH5Text">+0600000000</h5>
                </div>

                <div>
                <div id="socialIcons">
                <a href={"https://github.com/Akkuun"} target="_blank">
                    <img src={isGithubHovered_contact ? github : github_hover} onMouseEnter={handleGithubLeave_contact}
                         onMouseLeave={handleGithubHover_contact} alt="github" id="github-logo" height="50px" width="50px"/>
                </a>
                <a href={"https://www.linkedin.com/in/mathis-duban-b15957236/"} target="_blank">
                    <img src={isLinkedinHovered_contact ? linkedin : linkedin_hover} onMouseEnter={handleLinkedinLeave_contact}
                         onMouseLeave={handleLinkedinHover_contact} alt="github" id="linkin-logo" height="50px" width="50px"/>
                </a>
                </div>
                </div>
            </div>
        
            <div id="cv">
                <h4 className="WhiteH4Title">CV</h4>

                <div id="cvContent">
                    <h5 id="LittleSubtitle">Scan the QR code to download my CV : </h5>
                    <img src={qrcode} alt="qrcode" id="qrcode"/>
                </div>

                <div id="cvContent">
                    <h5 id="LittleSubtitle">Or clic on the link to download it here : </h5>
                    <h5 className="GreyH5Text">linkpdf.pdf</h5>
                </div>

            </div>

            <div id="playerAnimation">
                <Player
                    loop autoplay  src={animatedArrow}
                    className="player" id="animationArrow" speed={0.75}
                />
            </div>
            
        </div>
    );
};

export default FormComponent;