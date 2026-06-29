import React from "react";
import "../style/css/project-component.css";
import ProjectItem from "./project-item";
import pixop from "../style/picture/pixop.png";
import raytracing from "../style/picture/multiBoule.png";
import plant from "../style/picture/plantclim.png";

const ProjectComponent_3 = () => {
  const projects = [
    {
      title: "Real time raytracing engine on GPU, C++ & OpenCL",
      image: raytracing,
      gridColumn: "2 / span 2",
      gridRow: "1 / span 1",
      colorTitle: "white",
      url: "https://github.com/Akkuun/M1_RayTracing_Duban",
    },
    {
      title: "Procedural climbing plants Three.js",
      image: plant,
      gridColumn: "1 / span 1",
      gridRow: "1 / span 2",
      colorTitle: "black",
      url: "https://github.com/Akkuun/MinerFabriquer",
    },
    {
      title: "Image processing game made with Godot",
      image: pixop,
      gridColumn: "2 / span 1",
      gridRow: "2 / span 1",
      colorTitle: "black",
      url: "https://github.com/Akkuun/Super-Pixel-Project",
    },
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

      <div
        id="project-title-3"
        style={{
          gridColumn: "2 / span 1",
          gridRow: "2 / span 1",
        }}
      >
        Personal <br />
        projects
      </div>
    </div>
  );
};

export default ProjectComponent_3;
