import React from 'react';
import "../style/css/aboutMeComponent.css";
import {TypeAnimation} from "react-type-animation";

const aboutMeComponent = () => {
    return (
        <div id="text_me">
            <div id="aboutmecomponent">
                <TypeAnimation
                    sequence={[
                        'I am a passionate developer who loves to learn new technologies and use DevOps tools and methods',
                        300,
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{fontSize: '1em', display: 'inline-block', paddingTop: '1.5em'}}
                    repeat={1}
                />



            </div>
        </div>
    )
}

export default aboutMeComponent;