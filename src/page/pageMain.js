import React from "react";


import ProjectComponent from "../component/ProjectComponent";
import HeaderComponent from "../component/HeaderComponent";


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const PageMain = () => {
    return (
        <div>
       <ProjectComponent />
        <HeaderComponent />
        </div>
    );
};

export default PageMain;
