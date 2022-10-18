import React from 'react';
import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import "./styles/globals.css"
import "./styles/bootstrap.css"
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Layout from "./containers/layout";
import {BrowserRouter} from "react-router-dom";

const container = document.getElementById('root')!;
const root = createRoot(container);
serviceWorkerRegistration.register();


root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Layout>
                    <App/>
                </Layout>
                <ToastContainer/>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);


reportWebVitals();
