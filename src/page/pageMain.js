import React, { useState } from "react";
import HeaderComponent from "../component/HeaderComponent";
import ProjectComponent from "../component/ProjectComponent";
import NavComponent from "../component/nav-component";
import "../style/css/pageMain.css";

const PageMain = () => {


    return (
        <div id="pageMain">
                <div>
                    <NavComponent />
                    <HeaderComponent/>
                </div>
                <div>
                    <ProjectComponent />
                </div>
        </div>
    );
};

export default PageMain;
