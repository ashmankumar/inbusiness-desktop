import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ThemeProvider } from '@mui/material/styles';  // Import ThemeProvider
import theme from './themes/theme.jsx'              // Import your custom theme


import MainRoutes from "./routes/MainRoutes.jsx";
import {createHashRouter, RouterProvider} from "react-router-dom";

const router = createHashRouter([MainRoutes]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
        <RouterProvider router={router}/>
        </ThemeProvider>
    </React.StrictMode>
);

postMessage({payload: 'removeLoading'}, '*')
