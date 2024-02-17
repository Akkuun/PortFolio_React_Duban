import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AnimatedCursor from "react-animated-cursor";

const root = ReactDOM.createRoot(document.getElementById('root'));

const Component = () => {
    const buttonRef = useRef(null);

    useEffect(() => {
        if (buttonRef.current) {
            buttonRef.current.click();

        }
    }, []);

    return (
        <div className="App">
            <AnimatedCursor
                innerSize={20}
                outerSize={50}
                color='255, 255, 255'
                outerAlpha={0.1}
                innerScale={0.7}
                outerScale={3}

                clickables={[
                    'a',
                    'input[type="text"]',
                    'input[type="email"]',
                    'input[type="number"]',
                    'input[type="submit"]',
                    'input[type="image"]',
                    'label[for]',
                    'select',
                    'textarea',
                    'button',
                    '.link',
                    '.box'
                ]}
            />

            <App />
            <button ref={buttonRef} style={{ display: 'none' }} onClick={() => console.log('Click event triggered!')} />
        </div>
    );
};

root.render(
    <React.StrictMode>
        <Component />
    </React.StrictMode>
);

reportWebVitals();
