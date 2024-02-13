import React from 'react';
import '../style/css/project-component.css';
import ProjectItem from "./project-item";
import Friendly from '../style/picture/Friendly.png';
import CGJ2022 from '../style/picture/CGJ20222.png';
import site from '../style/picture/site.png';
const ProjectComponent_2 = () => {
    const projects = [
        { title: 'Project 1', image: Friendly,  gridColumn: '1 / span 1', gridRow: '2 / span 1', colorTitle: 'white' },
        { title: 'Project 2 ', image: Friendly,  gridColumn: '2 / span 2', gridRow: '1 / span 1', colorTitle: 'white' },
        { title: 'Project 3', image: Friendly, gridColumn: '1 / span 2', gridRow: '2 / span 1', colorTitle: 'black' },
    ];

    return (
        <div className="project-container">
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
            <div id="project-title-2">Personal projects</div> {/* Titre placé à droite */}
        </div>
    );
};

export default ProjectComponent_2;