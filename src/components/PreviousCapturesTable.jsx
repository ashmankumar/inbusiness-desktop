import React from 'react';
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material';

function PreviousCapturesTable() {

    const sampleData = [
        {
            time: '2024-08-30 14:30',
            user: 'John Doe',
            category: 'Development',
            tags: ['React', 'Electron'],
            taskName: 'Setup Electron App'
        },
        {
            time: '2024-08-29 10:15',
            user: 'Jane Smith',
            category: 'Testing',
            tags: ['Python', 'Automation'],
            taskName: 'Test Python Scripts'
        },
        {
            time: '2024-08-28 16:45',
            user: 'Alice Johnson',
            category: 'Documentation',
            tags: ['Markdown', 'GitHub'],
            taskName: 'Write README'
        }];

    return (
        <TableContainer component={Paper}>
            <Table sx={{minWidth: 650}} aria-label="previous captures table">
                <TableHead style={{fontWeight: 'bold'}}>
                    <TableRow>
                        <TableCell style={{fontWeight: 'bold'}}>Time</TableCell>
                        <TableCell style={{fontWeight: 'bold'}}>User</TableCell>
                        <TableCell style={{fontWeight: 'bold'}}>Category</TableCell>
                        <TableCell style={{fontWeight: 'bold'}}>Tags</TableCell>
                        <TableCell style={{fontWeight: 'bold'}}>Task Name</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {sampleData.map((row, index) => (
                        <TableRow key={index}>
                            <TableCell>{row.time}</TableCell>
                            <TableCell>{row.user}</TableCell>
                            <TableCell>{row.category}</TableCell>
                            <TableCell>{row.tags.join(', ')}</TableCell>
                            <TableCell>{row.taskName}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default PreviousCapturesTable;