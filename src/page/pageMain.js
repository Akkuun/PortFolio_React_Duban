import React, {useState} from "react";
import HeaderComponent from "../component/HeaderComponent";
import "../style/css/pageMain.css";
import ReactPageScroller from "react-page-scroller";
import AboutMeComponent from "../component/about-me-component";
import ProjectComponent from "../component/project-component";
import FormComponent  from "../component/FormComponent";
import ProjectComponent_2 from "../component/project-component_2";


const PageMain = () => {
    const [currentPage, setCurrentPage] = useState(0);

    const handlePageChange = (number) => {
        setCurrentPage(number);
    };

    const handleBeforePageChange = (number) => {
        console.log(number); // Vous pouvez effectuer des actions avant le changement de page si nécessaire
    };

    return (

        <div id="pageMain">
            <ReactPageScroller
                pageOnChange={handlePageChange}
                onBeforePageScroll={handleBeforePageChange}
                customPageNumber={currentPage}
            >
                <div>
                    <HeaderComponent/>
                </div>
                <div>
                    <AboutMeComponent/>
                </div>
                <div>
                    <ProjectComponent/>
                </div>
                <div>

                    <ProjectComponent_2/>
                </div>
                <div>
                    <FormComponent/>
                </div>

            </ReactPageScroller>
        </div>
    )
        ;
};

export default PageMain;
