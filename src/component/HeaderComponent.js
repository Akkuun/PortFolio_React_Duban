import React from 'react';
import "..//style//header-component-style.css";
import {TypeAnimation} from "react-type-animation";


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

            </div>

        </div>
    )
}

export default HeaderComponent;