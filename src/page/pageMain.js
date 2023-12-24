import React, {useState} from "react";
import HeaderComponent from "../component/HeaderComponent";
import ProjectComponent from "../component/ProjectComponent";
import NavComponent from "../component/nav-component";
import "../style/css/pageMain.css";
import ReactPageScroller from "react-page-scroller";

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
                    <NavComponent/>
                    <HeaderComponent/>
                </div>
                <div>
                    <ProjectComponent/>
                </div>
                <div>
                    <ProjectComponent/>
                </div>
                <div>
                    <ProjectComponent/>
                </div>
                <div>
                    <ProjectComponent/>
                </div>
                <div>
                    <ProjectComponent/>
                </div>
                <div>
                    <ProjectComponent/>
                </div>
                <div>
                    <ProjectComponent/>
                </div>


            </ReactPageScroller>
        </div>
    )
        ;
};

export default PageMain;
