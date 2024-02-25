// ProjectItem.js

import React from 'react';
import '../style/css/project-item.css';

const ProjectItem = ({ title, image, gridColumn, gridRow,colorTitle, url }) => {
    const boxStyle = {
        gridColumn: `span ${gridColumn}`,
        gridRow: `span ${gridRow}`,
    };

    return (
        <div className="box" style={boxStyle}>
            <a href={url} target="_blank" rel="noreferrer">
                <img src={image} alt={title}/>

                <div className="project-title" style={{color: colorTitle}}>{title}</div>
            </a>
        </div>
    );
};


export default ProjectItem;