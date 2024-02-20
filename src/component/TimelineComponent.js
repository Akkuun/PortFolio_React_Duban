import "../style/css/timeline-component.css";
import { Stepper, Step, StepLabel, StepConnector } from '@mui/material';
import * as React from 'react';

const TimelineComponent = () => {

    return (
        <div className="timeline-component">
            <div id="timelineTitle">
                <h1 className="PageTitle"> Studies and experiences</h1>
            </div>

            <div id="timelineBody">
            <div className="horizontal-scroll">
                <Stepper className="horizontal-stepper" alternativeLabel connector={<StepConnector />}>
                    <Step>
                        <StepLabel id="test1">Bac STI2D</StepLabel>
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
        </div>
        );
    };
    
    export default TimelineComponent;