import PageLayout from "../layout/PageLayout.jsx";
import WebAssetIcon from '@mui/icons-material/WebAsset';
import PreviousCapturesTable from "../components/PreviousCapturesTable.jsx";
function VideoAnalysisResultPage(props) {



    return (
        <PageLayout title="Video Analysis Result" pageIcon={<WebAssetIcon/>}>
            <PreviousCapturesTable />
        </PageLayout>
    );
}

export default VideoAnalysisResultPage;

