
import "../style/css/form-component.css";
import github from "../style/picture/github.png";
import linkedin from "../style/picture/linkedin.png";
import github_hover from "../style/picture/githubHover.png";
import linkedin_hover from "../style/picture/linkedinHover.png";
import React, {useState} from 'react';

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
                    <h1 id="ContactTitle"> Contact</h1>
                    <h4 id="Touch">Get in touch</h4>
                </div>

                <div>
                <div id="social">
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

            <div id="emailAndPhone">
                <div id="emailAdress">
                    <h4 id="WhiteH4Title">Email adress</h4>
                    <h5 id="GreyH5Text">matougamer@gmail.com</h5>
                </div>

                <div id="phoneNumber">
                    <h4 id="WhiteH4Title">Phone number</h4>
                    <h5 id="GreyH5Text">+0600000000</h5>
                </div>
            </div>
        
            <div id="cv">
                <h4 id="WhiteH4Title">CV</h4>
                <h5 id="GreyH5Text">Where you can find informations about me</h5>
            </div>
            
        </div>
    );
};

export default FormComponent;