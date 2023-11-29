import React from "react";
import ProgressBar from "react-scroll-progress-bar";
import HeaderComponent from "../component/HeaderComponent";

import ProjectComponent from "../component/ProjectComponent";


const PageMain = () => {
    return (

        <div id="top-of-page">
            <ProgressBar bgcolor="white" duration="1"/>
            <HeaderComponent/>

            <ProjectComponent />
        </div>
    );
};


export default PageMain;
