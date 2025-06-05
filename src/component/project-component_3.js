import React from 'react';
import '../style/css/project-component.css';
import ProjectItem from "./project-item";
import Minecraft from '../style/picture/minecraft.png';
import SLIC from '../style/picture/slic.jpg';
import ecoPLant from '../style/picture/ecoPlant.png';
import raytracing from '../style/picture/raytracing.png';
const ProjectComponent_3 = () => {
    const projects = [
        {
            title: 'Raytracing C++ & OpenGL',
            image: raytracing,
            gridColumn: '1 / span 2', // Occupe les 2 premières colonnes en haut
            gridRow: '1 / span 1', // Uniquement en haut
            colorTitle: 'white',
            url: 'https://github.com/Akkuun/M1_RayTracing_Duban'
        },
        {
            title: 'Adavanced Minecraft clone C++ & OpenGL',
            image: Minecraft,
            gridColumn: '2 / span 1',
            gridRow: '1 / span 2', // Uniquement en bas
            colorTitle: 'white',
            url: 'https://github.com/Akkuun/MinerFabriquer'
        },
        {
            title: 'Superpixels image processing C++',
            image: SLIC,
            gridColumn: '2 / span 1', // Uniquement la première colonne
            gridRow: '1 / span 1', // Uniquement en bas
            colorTitle: 'black',
            url: 'https://github.com/Akkuun/Super-Pixel-Project'
        }
    ];

    return (
        <div className="project-container3">
            {projects.map((project, index) => (
                <ProjectItem
                    key={index}
                    title={project.title}
                    image={project.image}
                    gridColumn={project.gridColumn}
                    gridRow={project.gridRow}
                    colorTitle={project.colorTitle}
                    url={project.url}
                />
            ))}
            <div id="project-title-3">Personal <br />projects</div>
        </div>
    );
};

export default ProjectComponent_3;