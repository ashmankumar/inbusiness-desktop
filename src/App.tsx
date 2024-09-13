import './App.css';
import MainLayout from "./layout/MainLayout.jsx";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import VideoAnalysisResultPage from "./pages/VideoAnalysisResultPage.jsx";
import samplePayloadData from "./sample/PayloadData.js";
import {createDispatchHook, Provider} from "react-redux";
import MainRoutes from "/routes/mainRoutes.jsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

function App() {

    return (
        <MainLayout/>
    );
}


export default App;
