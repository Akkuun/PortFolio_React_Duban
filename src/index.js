import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AnimatedCursor from "react-animated-cursor";

const root = ReactDOM.createRoot(document.getElementById('root'));

const Component = () => {

    return (
        <div className="App">
            <AnimatedCursor color='255,255,255' outerScale={3} innerSize={20} outerSize={50}  />
            <App />
        </div>
    );
};

root.render(
    <React.StrictMode>
        <Component />
    </React.StrictMode>
);

reportWebVitals();
