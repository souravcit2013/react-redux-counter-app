import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css"
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from 'redux'
import RootReduxer from "./redux/store";

const store = createStore(RootReduxer)

const appEL = ReactDOM.createRoot(document.getElementById('app'))
appEL.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
)