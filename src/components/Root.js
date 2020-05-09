import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";

import reducers from "reducers";

const Root = ({ children, initialState = {} }) => (
    <Provider store={createStore(reducers, initialState, applyMiddleware(reduxThunk))}>
        {children}
    </Provider>
);

export default Root;