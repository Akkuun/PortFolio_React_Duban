import "../style/css/timeline-component.css";
import { Stepper, Step, StepLabel, StepConnector } from '@mui/material';
import * as React from 'react';

const TimelineComponent = () => {

    return (
        <div className="timeline-component">
            <div id="timelineTitle">
                <h1 className="PageTitle"> Studies and experiences</h1>
            </div>

            

            <div className="horizontal-scroll">
                <Stepper className="horizontal-stepper" alternativeLabel connector={<StepConnector />}>
                    <Step>
                        <StepLabel /*className="stepLabel"*/>
                            <h4 className = "stepTitle">Bac STI2D</h4>
                            <h5 className = "stepDate">2019</h5>
                            <h5 className = "stepText">J'ai réalisé un bac STI2D balblabalbalablablaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaouuuuuuuuuuuuuuuuuuuuu</h5>
                        </StepLabel>
                    </Step>
                    <Step>
                        <StepLabel className="stepStyle">Step 2</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel className="stepStyle">Step 3</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>Step 1</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>Step 2</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>Step 3</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>Step 1</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>Step 2</StepLabel>
                    </Step>
                </Stepper>
                </div>
        </div>
        );
    };
    
    export default TimelineComponent;