import React from "react";
import ReactDOM from "react-dom";

import logo from './images/react-logo.png'

import './styles/main.scss';

const App = () => {
    return (
        <div className="container">
            <h1>React Starter Pack</h1>
            <h4>React JS, React Router v4, Webpack and SASS</h4>
            <img className="logo" src={logo} alt="" />
            <p className="copyright">&copy;2020 Simphiwe Tebe</p>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector("#root"));