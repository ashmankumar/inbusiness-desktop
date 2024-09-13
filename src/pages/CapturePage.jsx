import React, { useState, useEffect } from 'react';
import PageLayout from "../layout/PageLayout.jsx";
import WebAssetIcon from '@mui/icons-material/WebAsset';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import VideoAnalysisDisplay from "@/components/VideoAnalysisDisplay.jsx";

function VideoAnalysisRecordingPage() {
    const [isRecording, setIsRecording] = useState(false);
    const [taskTitle, setTaskTitle] = useState("");
    const [isRecordingStopped, setIsRecordingStopped] = useState(false);
    const [analysisData, setAnalysisData] = useState(""); // State to hold analysis data

    const handleRecordingToggle = () => {
        if (isRecording) {
            console.log(`Stopped recording for task: ${taskTitle}`);
            window.ipcRenderer.send("stop-recording");
            setIsRecordingStopped(true);
        } else {
            console.log(`Sending recording task to backend : ${taskTitle}`);
            window.ipcRenderer.send("start-recording", taskTitle);
            setIsRecordingStopped(false);
        }
        setIsRecording(!isRecording);
    };

    const handleTitleChange = (event) => {
        setTaskTitle(event.target.value);
    };

    const handleAnalysis = () => {
        console.log(`Analyzing recording for task: ${taskTitle}`);
        window.ipcRenderer.send("analyse-recording", taskTitle);
    };

    useEffect(() => {
        // Listen for analysis data from the main process
        window.ipcRenderer.on('analyse-recording-data', (event, response) => {
            if (response.success) {
                try {
                    const parsedData = JSON.parse(response.data); // Parse the JSON data
                    setAnalysisData(parsedData); // Set the parsed data
                    console.log('Json parsed data: ', parsedData);
                } catch (error) {
                    console.error('Error parsing JSON:', error);
                }
            } else {
                console.error('Error receiving data:', response.error);
            }
        });

        // Clean up the listeners when the component is unmounted
        return () => {
        };
    }, []);

    return (
        <PageLayout title="Start Video Analysis" pageIcon={<WebAssetIcon />}>
            <div style={{ marginBottom: "20px" }}>
                <TextField
                    label="Task Title"
                    variant="outlined"
                    fullWidth
                    value={taskTitle}
                    onChange={handleTitleChange}
                />
            </div>
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                border={1}
                borderColor="grey.500"
                borderRadius={2}
                padding={2}
                width="500px"
                maxWidth="500px"
                margin="0 auto"
                boxShadow={3}
            >
                <Button
                    variant="contained"
                    color={isRecording ? "secondary" : "primary"}
                    onClick={handleRecordingToggle}
                    disabled={!taskTitle}
                    fullWidth
                    style={{ marginBottom: "10px" }}
                >
                    {isRecording ? "Stop Recording" : "Start Recording"}
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleAnalysis}
                    disabled={!isRecordingStopped}
                    fullWidth
                >
                    Analyze
                </Button>
            </Box>
            {analysisData && (
                <Box
                    mt={7}
                    p={2}
                    border={1}
                    borderColor="grey.300"
                    borderRadius={4}
                    maxWidth="500px"
                    margin="0 auto"
                    boxShadow={1}
                >
                    <h3>Analysis Result</h3>
                    <VideoAnalysisDisplay data={analysisData.steps}
                                          style={{ marginTop: '2px'}} />
                </Box>
            )}
        </PageLayout>
    );
}

export default VideoAnalysisRecordingPage;