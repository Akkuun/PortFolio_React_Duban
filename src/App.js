import React, { useEffect } from 'react';
import './style/App.css';
import PageMain from "./page/pageMain";

function App() {
    useEffect(() => {
        const cursorDot = document.querySelector("[data-cursor-dot]");
        const cursorOutline = document.querySelector("[data-cursor-outline]");
        let prevX = 0;
        let prevY = 0;
        let prevTime = Date.now();
        const handleMouseMove = (e) => {
            const posX = e.clientX;
            const posY = e.clientY;
            const currentTime = Date.now();
            const distanceX = posX - prevX;
            const distanceY = posY - prevY;
            const deltaTime = currentTime - prevTime;
            const speedX = Math.abs(distanceX) / deltaTime;
            const speedY = Math.abs(distanceY) / deltaTime;
            const sensitivity = 0.2; // Ajustez la sensibilité selon votre préférence
            if (cursorDot) {
                cursorDot.style.left = `${posX}px`;
                cursorDot.style.top = `${posY}px`;
            }
            if (cursorOutline) {
                const adjustedPosX = posX + distanceX * speedX * sensitivity;
                const adjustedPosY = posY + distanceY * speedY * sensitivity;
                cursorOutline.style.left = `${adjustedPosX}px`;
                cursorOutline.style.top = `${adjustedPosY}px`;
            }
            prevX = posX;
            prevY = posY;
            prevTime = currentTime;
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []); // Empty dependency array ensures this runs only once after initial render
    return (
        <div className="App">
            <body>
            <div className="cursor-dot" data-cursor-dot></div>
            <div className="cursor-outline" data-cursor-outline></div>
            <PageMain />
            </body>
        </div>
    );
}

export default App;
