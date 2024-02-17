import React, { useEffect } from 'react';
import './style/css/App.css';
import PageMain from "./page/pageMain";

function App() {
    useEffect(() => {
        const cursorDot = document.querySelector("[data-cursor-dot]");
        const cursorOutline = document.querySelector("[data-cursor-outline]");

        let prevX = 0;
        let prevY = 0;
        let prevTime = Date.now();
        const currentTime = Date.now();


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
        const handleLinkHover = (e) => {
            if (cursorOutline) {
                cursorOutline.classList.add('large'); // Changer la taille du cercle lorsque la souris survole un lien
            }
        };
        const handleLinkLeave = (e) => {
            if (cursorOutline) {
                cursorOutline.classList.remove('large'); // Réinitialiser la taille du cercle lorsque la souris quitte le lien
            }
        };

        window.addEventListener("mousemove", handleMouseMove);

        document.querySelectorAll('a').forEach(link => {
            link.addEventListener('mouseenter', handleLinkHover);
            link.addEventListener('mouseleave', handleLinkLeave);
        });



        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            document.querySelectorAll('a').forEach(link => {
                link.removeEventListener('mouseenter', handleLinkHover);
                link.removeEventListener('mouseleave', handleLinkLeave);
            });
        };
    }, []); // Empty dependency array ensures this runs only once after initial render

    return (

        <div className="App">

            <div className="cursor-dot" data-cursor-dot></div>
            <div className="cursor-outline" data-cursor-outline></div>

            <PageMain />

        </div>
    );
}

export default App;
