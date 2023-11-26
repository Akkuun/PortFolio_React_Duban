import React, { useEffect } from 'react';
import "../style/css/header-component-style.css";
import { TypeAnimation } from "react-type-animation";
import pic from "../style/picture/picture_about_me.PNG";

const HeaderComponent = () => {
    useEffect(() => {
        const handleMouseMove = (e) => {
            document.querySelectorAll('.layer').forEach(layer => {
                const speed = layer.getAttribute('data-speed');
                const x = (window.innerWidth - e.pageX * speed) / 120;
                const y = (window.innerHeight - e.pageY * speed) / 120;
                layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
            });
        };

        document.addEventListener("mousemove", handleMouseMove);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div className="header-component">
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
                        style={{ fontSize: '1em', display: 'inline-block' }}
                        repeat={Infinity}
                    />
                </h1>
                <div id="picture_about_me">
                    <img src={pic} className={"layer"} alt="pic" id="pic" height="80%" width="80%" data-speed="2" />
                </div>
            </div>
        </div>
    );
};

export default HeaderComponent;
