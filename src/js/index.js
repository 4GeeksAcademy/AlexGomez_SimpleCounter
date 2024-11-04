import React from "react";
import ReactDOM from "react-dom/client";
import "../styles/index.css";
import SecondsCounter from "./component/SecondsCounter.jsx";

let seconds = 0;
let interval;
let reverseMode = false;

const handleChange = (e) => {
    seconds = Number(e.target.value) || 0;
    ReactDOM.createRoot(document.getElementById('app')).render(<App />);
};

const toggle = () => {
    if (interval) {
        clearInterval(interval);
        interval = null;
    } else {
        interval = setInterval(tick, 1000);
    }
    ReactDOM.createRoot(document.getElementById('app')).render(<App />);
};

const toggleReverse = () => {
    reverseMode = !reverseMode;
    ReactDOM.createRoot(document.getElementById('app')).render(<App />);
};

const tick = () => {
    seconds += reverseMode ? -1 : 1;
    ReactDOM.createRoot(document.getElementById('app')).render(<App />);
};


const App = () => (
    <>
    <div className="d-flex flex-column flex-wrap align-content-center justify-content-end align-content-lg-center align-items-center my-5 mx-auto w-100">
    <SecondsCounter seconds={seconds} />
        <div className="d-flex flex-column w-25 gap-2 justify-content-center align-content-center ">
            <input type="number" value={seconds} onChange={handleChange} placeholder="Set seconds" />
            <button type="button" className= {!interval ? "btn btn-primary my-0" : "btn btn-danger my-0 "} onClick={toggle}>{interval ? "Stop" : "Start"}</button>
            <button type="button" className="btn btn-success" onClick={() => { seconds = 0; ReactDOM.createRoot(document.getElementById('app')).render(<App />); }}>Reset</button>
            <button type="button" className="btn btn-secondary" onClick={toggleReverse}>{reverseMode ? "Normal" : "Reverse"}</button>
        </div>
      
    </div>
    </>
);

window.onload = () => {
    ReactDOM.createRoot(document.getElementById('app')).render(<App />);
    interval = setInterval(tick, 1000); 
};
