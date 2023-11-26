import * as React from "react";
import {useState} from "react";
import "../style/project-component.css";

const ProjectComponent = ({Valeur_Parametre1,Valeur_Parametre2}) => {

    const [count, setCount] = useState(0);

    function setCount2() {
        setCount(count + 1);
    }
    function countMinus() {
        setCount(count - 1);
    }
    return (
        <div className="project-component">
            <p> lea est super belle !</p>
            <div>je suis Léa et je suis cool et bientot avec un stage</div>
            <div> {Valeur_Parametre1}</div>
            <div> {Valeur_Parametre2}</div>
            <div>
                <p>You clicked {count} times</p>
                <button onClick={() => setCount2()}>
                    Click me
                </button>
            </div>
            <div>
                mathis le beu goss

            </div>
        </div>

    )

}
export default ProjectComponent