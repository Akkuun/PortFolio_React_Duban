import React from "react";

import HeaderComponent from "../component/HeaderComponent";


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import Lea from "../component/Lea";
import ProjectComponent from "../component/ProjectComponent";


const PageMain = () => {
    return (
        <div id="top-of-page">
        <HeaderComponent />
            <ProjectComponent />
        </div>
    );
};


const pageMain = () => {
    return(

        <Lea/>  )
}

export default PageMain;
