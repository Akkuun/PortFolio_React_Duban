import "../style/css/timeline-component.css";
import { Stepper, Step, StepLabel, StepConnector} from '@mui/material';
import * as React from 'react';
import TimeLineArrow from "./TimeLineArrow";

const TimelineComponent = () => {
    const steps = [
        { title: 'Step 1', date: '01/01/2022', description: 'Description de l\'étape 1', position: "stepLabelBottom"},
        { title: 'Step 2', date: '02/01/2022', description: 'Description de l\'étape 2', position: "stepLabelTop"},
        { title: 'Step 3', date: '03/01/2022', description: 'Description de l\'étape 3', position: "stepLabelTop"},
        { title: 'Step 4', date: '04/01/2022', description: 'Description de l\'étape 4', position: "stepLabelBottom"}
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

    return (
        <div className="timeline-component">

            <div id="timelineTitle">
                <h1 className="PageTitle"> Studies and experiences</h1>
            </div>

            <div className="horizontal-scroll" id="timelineScrollContainer">
                <Stepper className="horizontal-stepper" alternativeLabel activeStep={0} connector={<StepConnector />}>
                    {steps.map((step, index) => (
                        <Step key={index}>
                            <StepLabel>
                                <div className={step.position}>
                                    <h4 className="stepTitle">{step.title}</h4>
                                    <h4 className="stepDate">{step.date}</h4>
                                    <h4 className="stepDescription">{step.description}</h4>
                                </div>
                            </StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </div>
            <div className="scroll-buttons">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a onClick={() => handleScroll(-450)}> <TimeLineArrow  idArrow={"gauche"}/></a>

                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a onClick={() => handleScroll(450)}><TimeLineArrow  idArrow={"droite"}/></a>

            </div>
        </div>
    );
};

export default TimelineComponent;