import App from '../App.tsx';
import VideoAnalysisResultPage from "@/pages/VideoAnalysisResultPage.jsx";
import CapturePage from "@/pages/CapturePage.jsx";

const MainRoutes = {
    path: '/',
    element: <App/>,
    children: [
        {
            index: true,
            element: <VideoAnalysisResultPage/>
        },
        {
            path: 'capture',
            element: <CapturePage />
        }
    ]

};

export default MainRoutes;
