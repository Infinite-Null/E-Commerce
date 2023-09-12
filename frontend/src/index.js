import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {NextUIProvider} from "@nextui-org/react";
import "../src/index.css"
import {BrowserRouter} from "react-router-dom";
import ContextState from "./Context/ContextState";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <NextUIProvider>
                <ContextState>
                    <App/>
                </ContextState>
            </NextUIProvider>
        </BrowserRouter>
    </React.StrictMode>
);

