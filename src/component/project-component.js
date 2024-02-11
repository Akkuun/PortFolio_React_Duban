import React from 'react';
import '../style/css/project-component.css';
import ProjectItem from "./project-item";
import repartition from '../style/picture/repartition.png';
import plante from '../style/picture/plante.jpg';
import CDG2024 from '../style/picture/CGJ2024.png';

const ProjectComponent = () => {
    const projects = [
        { title: 'Project 1', image: CDG2024, gridColumn: 1, gridRow: 1, colorTitle: 'white' },
        { title: 'Project 2 ', image: plante, gridColumn: 1, gridRow: 3, colorTitle: 'white' },
        { title: 'Project 3', image: repartition, gridColumn: 2, gridRow: 3, colorTitle: 'black' },
    ];

    return (
        <div className="project-container">
            <div id="project-title">Personal projects</div>
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