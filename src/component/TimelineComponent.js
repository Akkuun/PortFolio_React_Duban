import "../style/css/timeline-component.css";
import { Stepper, Step, StepLabel, StepConnector} from '@mui/material';
import * as React from 'react';
import TimeLineArrow from "./TimeLineArrow";

const TimelineComponent = () => {
    const steps = [
        { title: 'Bac STI2D  - Specialized in Technological Innovation and Sustainable Development Option Numeric Sysem ', date: '2017/2019', description: 'Lycée Pierre Rouge', position: "stepLabelBottom", positionTop: false, topLabel: '', topDate: '', topDescription: '', heightPercentage: 0},
        { title: 'B.T.S - Specialized in Numeric Systems : Electronics & Communication', date: '2019/2021', description: 'Lycée Pierre Rouge', position: "stepLabelBottom", positionTop: true, topLabel: 'Electronics technician | Development of an energy control and management application for boaters. Creation of electronic cards, primarily using C programming', topDate: '2019/2021', topDescription: 'DataComSys', heightPercentage: 0},
        { title: 'D.U.T - Specialized in Computer Sciences', date: '2021/2022', description: 'I.U.T Montpellier ', position: "stepLabelBottom", positionTop: true, topLabel: 'Software Developer |  Development of C++ algorithms for optimizing industrial research software. Implementing embedded system solutions and managing electronics Linux systems. Creating camera libraries with Qt in C++.', topDate: '2021/2022', topDescription: 'Kloé France', heightPercentage: 0},
        { title: 'Engineer\'s Degree in Data Engineering in apprenticeship ', date: '2022/2023', description: 'TELECOM Saint-Etienne', position: "stepLabelBottom", positionTop: true, topLabel: 'Data Engineer Junior | Development of React project for managing data across multiple Microsoft Azure clouds. Conducted monitoring & statistical analysis of time-series data with InfluxDB & Grafana.                         ', topDate: '2022/2023', topDescription: 'Watts Electronics', heightPercentage: 0},
        { title: 'Licence 3 - Specialized in Computer Sciences ', date: '2023/2024', description: 'Facultés des Sciences de Montpellier', position: "stepLabelBottom", positionTop: false, topLabel: ' ', topDate: '', topDescription: '', heightPercentage: 0},
        { title: 'Master\'s Degree in Computer Sciences - IMAGINE', date: '2024/2025', description: 'Facultés des Sciences de Montpellier', position: "stepLabelBottom", positionTop: false, topLabel: ' ', topDate: '', topDescription: '', heightPercentage: 0},

    ];
    const [scrollPosition, setScrollPosition] = React.useState(0);

    const handleScroll = (scrollOffset) => {
        const newPosition = scrollPosition + scrollOffset;
        setScrollPosition(newPosition);
        const container = document.getElementById('timelineScrollContainer');
        container.scrollTo({
            left: newPosition,
            behavior: 'smooth'
        });
    };
    const calculateStepHeights = () => {
        const windowHeight = window.innerHeight;
        steps.forEach((step, index) => {
            const element = document.getElementById(`step-${index}`);
            if (element) {
                const height = element.offsetHeight;
                const heightPercentage = (height / windowHeight) * 100;
                steps[index].heightPercentage = heightPercentage;
                if (heightPercentage > 22) {
                    element.classList.add('large-height');
                } else {
                    element.classList.remove('large-height');
                }
            }
        });
    };

    React.useEffect(() => {
        calculateStepHeights();
        window.addEventListener('resize', calculateStepHeights);
        return () => {
            window.removeEventListener('resize', calculateStepHeights);
        };
    }, []);

    return (
        <div className="timeline-component">

            <div id="timelineTitle">
                <h1 className="PageTitle"> Studies and experiences</h1>
            </div>

            <div className="horizontal-scroll" id="timelineScrollContainer">
                <Stepper className="horizontal-stepper" alternativeLabel activeStep={0} connector={<StepConnector />}>
                    {steps.map((step, index) => (
                        <Step key={index} id={`step-${index}`}>
                            <StepLabel>
                                <div className={step.position}>
                                    <h4 className="stepTitle">{step.title}</h4>
                                    <h4 className="stepDate">{step.date}</h4>
                                    <h4 className="stepDescription">{step.description}</h4>
                                </div>
                                {step.positionTop && (
                                    <div className="stepLabelTop">
                                        <h4 className="stepTitle">{step.topLabel}</h4>
                                        <h4 className="stepDate">{step.topDate}</h4>
                                        <h4 className="stepDescription">{step.topDescription}</h4>
                                    </div>
                                )}
                            </StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </div>
            <div className="scroll-buttons">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a onClick={() => handleScroll(-500)}> <TimeLineArrow  idArrow={"gauche"}/></a>

                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a onClick={() => handleScroll(500)}><TimeLineArrow  idArrow={"droite"}/></a>

            </div>
        </div>
    );
};

export default TimelineComponent;