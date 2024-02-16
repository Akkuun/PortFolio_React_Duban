import React from 'react';
import '../style/css/project-component.css';
import ProjectItem from "./project-item";
import repartition from '../style/picture/repartition.png';
import plante from '../style/picture/plante.jpg';
import CDG2024 from '../style/picture/CGJ2024.png';

const ProjectComponent = () => {
    const projects = [
        { title: 'Code Game Jam 2024 C#', image: CDG2024, gridColumn: 1, gridRow: 1, colorTitle: 'white' },
        { title: 'Mobile App Plantes managing Kotlin ', image: plante, gridColumn: 1, gridRow: 3, colorTitle: 'white'},
        { title: 'Iot Data management project React ', image: repartition, gridColumn: 2, gridRow: 3, colorTitle: 'black' },
    ];

    return (
        <div className="project-container">
            <div id="project-title">Personal <br/> projects</div>
            {projects.map((project, index) => (
                <ProjectItem
                    key={index}
                    title={project.title}
                    image={project.image}
                    gridColumn={project.gridColumn}
                    gridRow={project.gridRow}
                    colorTitle={project.colorTitle}
                />
            ))}
        </div>
    );
};

export default ProjectComponent;