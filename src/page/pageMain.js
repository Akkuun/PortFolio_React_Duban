import React, { useState } from "react";
import ReactPageScroller from "react-page-scroller";
import HeaderComponent from "../component/HeaderComponent";
import ProjectComponent from "../component/ProjectComponent";
import NavComponent from "../component/nav-component";
import "../style/css/pageMain.css";

const PageMain = () => {
    const [currentPage, setCurrentPage] = useState(null);

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
                    {/*<NavComponent />*/}
                    <HeaderComponent />
                </div>
                <div>

                    <ProjectComponent />
                </div>
                <div>

                    <ProjectComponent />
                </div>
                <div>
                    <ProjectComponent />
                </div>
                <div id="map">
                    <ProjectComponent />
                </div>
            </ReactPageScroller>
        </div>
    );
};

export default PageMain;
