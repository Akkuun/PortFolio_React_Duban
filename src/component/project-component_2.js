import React from 'react';
import '../style/css/project-component.css';
import ProjectItem from "./project-item";
import Friendly from '../style/picture/Friendly.png';
import CGJ2022 from '../style/picture/CGJ20222.png';
import site2 from '../style/picture/site_2.png';
const ProjectComponent_2 = () => {
    const projects = [
        { title: 'Summer Game Jam 2023 C#', image: Friendly,  gridColumn: '1 / span 1', gridRow: '2 / span 1', colorTitle: 'white' },
        { title: 'Code Game Jam 2022 C# ', image: CGJ2022,  gridColumn: '2 / span 2', gridRow: '1 / span 1', colorTitle: 'white' },
        { title: 'Personal portfolio React', image: site2, gridColumn: '1 / span 3', gridRow: 1, colorTitle: 'white' },
    ];

    return (
        <div className="project-container2">
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
            <div id="project-title-2">Personal <br/>projects</div> {/* Titre placé à droite */}
        </div>
    );
};

export default ProjectComponent_2;