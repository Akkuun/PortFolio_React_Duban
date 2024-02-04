import React from 'react';
import '../style/css/project-component.css';
import ProjectItem from "./project-item";
import repartitoon from '../style/picture/repartition.png';

const ProjectComponent = () => {
    const projects = [
        { title: 'Project 1', image: repartitoon, gridColumn: 1, gridRow: 1 },
        { title: 'Project 2', image: 'url_image_projet2.jpg', gridColumn: 1, gridRow: 3 },
        { title: 'Project 3', image: 'url_image_projet3.jpg', gridColumn: 2, gridRow: 3 },
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
                />
            ))}
        </div>
    );
};

export default ProjectComponent;