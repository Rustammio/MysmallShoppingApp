import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter} from "react-router-dom";
import AppFunc from "./App";
import {Provider} from "react-redux";

import store from "./store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <AppFunc/>
        </Provider>
    </BrowserRouter>
);

