import React, { useState, useEffect } from "react";
import "../style/css/project-component.css";

const ProjectComponent = ({ Valeur_Parametre1, Valeur_Parametre2 }) => {
    const [count, setCount] = useState(0);
    const [value, setValue] = useState(Valeur_Parametre1);
    console.log(Valeur_Parametre1);
    useEffect(() => {
        const timer = setTimeout(() => {
            const element = document.querySelector(".project-component");
            console.log("fefff+" + Valeur_Parametre1)
            if (element && Valeur_Parametre1===2) {
                element.style.backgroundColor = "red";
                element.style.color = "white";
            }
            if (element && Valeur_Parametre1===1) {
                element.style.backgroundColor = "blue";
                element.style.color = "black";
            }
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    function setCount2() {
        setCount(count + 1);
    }

    return (
        <div className="project-component">
            <p>lea est super belle !</p>
            <div>je suis Léa et je suis cool et bientot avec un stage</div>
            <div> {Valeur_Parametre1}</div>
            <div> {Valeur_Parametre2}</div>
            <div>
                <p>You clicked {count} times</p>
                <button onClick={() => setCount2()}>Click me</button>
            </div>
            <div>mathis le beu goss</div>
        </div>
    );
};

export default ProjectComponent;
