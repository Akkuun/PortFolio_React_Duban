import React from 'react';
import "../style/css/aboutMeComponent.css";
import {TypeAnimation} from "react-type-animation";

const aboutMeComponent = () => {
    return (
        <div id="text_me">
            <div id="aboutmecomponent">
                <TypeAnimation
                    sequence={[
                        'I am a passionate developer who loves learning new technologies, working on various projects and crossing fields of application.',
                        300,

                    ]}
                    wrapper="span"
                    speed={50}
                    style={{fontSize: '1em', display: 'inline-block', paddingTop: '1.5em'}}
                    repeat={Infinity}
                />



            </div>
        </div>
    )
}

export default aboutMeComponent;