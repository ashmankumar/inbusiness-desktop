// import {ipcMain} from "electron";
// import path from "node:path";
// import { spawn } from 'child_process';
//
// let pythonProcess;
// const pythonExecutable = '/Users/AshmanLocal/dev/inbusiness/backend/RecorderServices/dist/ScreenRecorderModel';
//
// ipcMain.on('start-recording', (event, taskTitle) => {
//     try {
//         console.log(`Starting recording for task: ${taskTitle}`);
//
//         // Path to your Python executable (adjust this path as needed)
//         //const pythonExecutable = path.join(__dirname, 'dist', 'ScreenRecorderModel', 'ScreenRecorderModel');
//
//         // Start the Python process
//         pythonProcess = spawn(pythonExecutable, ['--start'], {
//             stdio: 'pipe', // Inherit stdio to see output in the console, or 'ignore' if not needed
//         });
//
//         pythonProcess.stdout.on('data', (data) => {
//             console.log(`stdout: ${data}`);
//         });
//
//         pythonProcess.stderr.on('data', (data) => {
//             console.error(`stderr: ${data}`);
//         });
//
//         pythonProcess.on('close', (code) => {
//             console.log(`Python process exited with code ${code}`);
//         });
//
//         event.sender.send('recording-started', { success: true });
//     } catch (error) {
//         event.sender.send('recording-started', { success: false, error: error.message });
//     }
// });
//
// ipcMain.on('stop-recording', (event) => {
//     try {
//         console.log(`Stopping recording`);
//
//         if (pythonProcess) {
//             // Send a stop signal to the Python process
//             pythonProcess.kill('SIGINT'); // Or use another signal if appropriate
//             pythonProcess = null;
//             event.sender.send('recording-stopped', { success: true });
//         } else {
//             event.sender.send('recording-stopped', { success: false, error: "Python process not running" });
//         }
//     } catch (error) {
//         event.sender.send('recording-stopped', { success: false, error: error.message });
//     }
// });