// ProjectItem.js

import React from 'react';
import '../style/css/project-item.css';

const ProjectItem = ({ title, image, gridColumn, gridRow }) => {
    const boxStyle = {
        gridColumn: `span ${gridColumn}`,
        gridRow: `span ${gridRow}`,
    };

    return (
        <div className="box" style={boxStyle}>
            <img src={image} alt={title} />
            <div className="project-title">{title}</div>
        </div>
    );
};



export default ProjectItem;