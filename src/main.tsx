import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


import MainRoutes from "./routes/MainRoutes.jsx";
import {createHashRouter, RouterProvider} from "react-router-dom";

const router = createHashRouter([MainRoutes]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);

postMessage({payload: 'removeLoading'}, '*')
