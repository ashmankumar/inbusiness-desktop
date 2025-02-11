import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, List, ListItem, ListItemText } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function VideoAnalysisDisplay({ data }) {
    return (
        <div>
            {data.map((action) => (
                <Accordion key={action.step} sx={{width: '100%', boxShadow: 'none'}}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="h6">Step {action.step}: {action.title}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography paragraph>{action.description}</Typography>
                        <Typography variant="h7" >Steps:</Typography>
                        <List>
                            {action.tasks.map((task) => (
                                <React.Fragment key={task.task_id}>
                                    <ListItem>
                                        <ListItemText
                                            primary={<Typography variant="h8">{`${task.task_id}. ${task.task}`}</Typography>}
                                        />
                                    </ListItem>
                                    {task.subtasks.map((subtask, index) => (
                                        <ListItem key={index} style={{ paddingLeft: '20px' }}>
                                            <ListItemText primary={`- ${subtask.description}`} />
                                        </ListItem>
                                    ))}
                                </React.Fragment>
                            ))}
                        </List>
                    </AccordionDetails>
                </Accordion>
            ))}
        </div>
    );
}

export default VideoAnalysisDisplay;