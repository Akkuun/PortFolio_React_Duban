import React from 'react';
import "../style/css/header-component-style.css";
import {TypeAnimation} from "react-type-animation";
import pic from "../style/picture/picture_about_me.PNG"

const HeaderComponent = () => {

    return (

        <div className="header-component">

            <div className="Name">
                <h4 id="Hi"> Hi , my name is </h4>
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
                    <img src={pic} alt="pic" id="pic" height="80%" width="80%"/>
                </div>



            </div>

        </div>
    )
}

export default HeaderComponent;