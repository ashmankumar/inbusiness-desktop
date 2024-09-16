import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function Header({ open, toggleNavigationDrawer }) {


    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton
                        size="large"
                        color="#000"
                        aria-label="open drawer"
                        sx={{ marginLeft: open ? '240px' : 5 }}
                        onClick={toggleNavigationDrawer}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Box sx={{ flexGrow: 1 }} />
                </Toolbar>

            </AppBar>
        </Box>
    );
}
