import React, { useEffect } from 'react';
import './style/App.css';
import PageMain from "./page/pageMain";

function App() {
    useEffect(() => {
        const cursorDot = document.querySelector("[data-cursor-dot]");
        const cursorOutline = document.querySelector("[data-cursor-outline]");

        const handleMouseMove = (e) => {
            const posX = e.clientX;
            const posY = e.clientY;

            if (cursorDot) {
                // Décalage du mouvement avec un léger délai de 50 millisecondes
                setTimeout(() => {
                    cursorDot.style.left = `${posX}px`;
                    cursorDot.style.top = `${posY}px`;
                }, 50);
            }

            if (cursorOutline) {
                // Décalage du mouvement avec un léger délai de 50 millisecondes
                setTimeout(() => {
                    cursorOutline.style.left = `${posX}px`;
                    cursorOutline.style.top = `${posY}px`;
                }, 50);
            }
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
            </body>
            <PageMain />
        </div>
    );
}

export default App;
