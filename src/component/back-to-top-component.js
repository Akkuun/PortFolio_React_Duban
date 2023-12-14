import React, { useState } from 'react';
import back_to_top_button_hover from "../style/picture/back-to-top_button_hover.svg";
import back_to_top_button from "../style/picture/back-to-top_button.svg";
import "../style/css/back-to-top-component.css";

const BackToTopComponent = () => {
    const [isBackToTopHovered, setIsBackToTopHovered] = useState(false);

    const handleBackToTopHover = () => {
        setIsBackToTopHovered(true);
    }

    const handleBackToTopLeave = () => {
        setIsBackToTopHovered(false);
    }

    const handleClick = () => {
        // Redirection vers la section #top-of-page
        window.location.href = '#top-of-page';
    }

    return (
        <div id="back-to-top-section">

            <img
                 style={{
                     transform: isBackToTopHovered ? 'none' : 'rotate(180deg)',
                     transition: 'transform 0.3s ease-in-out', // Ajoutez une transition pour un effet fluide
                 }}

                onMouseLeave={handleBackToTopLeave}
                onMouseEnter={handleBackToTopHover}
                onClick={handleClick}
                src={isBackToTopHovered ? back_to_top_button_hover : back_to_top_button}
                alt="back-to-top"
                id="back-to-top-button"
            />
        </div>
    );
}

export default BackToTopComponent;