import React, { useState } from 'react';
import back_to_top_button_hover from "../style/picture/back-to-top_button_hover.svg";
import back_to_top_button from "../style/picture/back-to-top_button.svg";
import "../style/css/TimeLineArrow.css";

const TimeLineArrow = ({idArrow}) => {
    const [isBackToTopHovered, setIsBackToTopHovered] = useState(false);

    const handleBackToTopHover = () => {
        setIsBackToTopHovered(true);
    }

    const handleBackToTopLeave = () => {
        setIsBackToTopHovered(false);
    }



    return (
        <div id={idArrow}>

            <img
                style={{
                    // transform: isBackToTopHovered ? 'none' : 'rotate(180deg)',
                    transition: 'transform 0.3s ease-in-out', // Ajoutez une transition pour un effet fluide
                    cursor:'none',
                }}

                onMouseLeave={handleBackToTopLeave}
                onMouseEnter={handleBackToTopHover}

                src={isBackToTopHovered ? back_to_top_button_hover : back_to_top_button}
                alt="back-to-top"
                id={idArrow}
            />
        </div>
    );
}

export default TimeLineArrow;