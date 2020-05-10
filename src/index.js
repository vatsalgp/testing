import React from "react";
import ReactDOM from "react-dom";

import App from "components/App";
import Root from "components/Root";

const comments = ["First", "Second"];

ReactDOM.render(
    <Root initialState={{ comments }} >
        <App />
    </ Root >,
    document.querySelector("#root"));