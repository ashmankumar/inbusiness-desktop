import { AccountBox, AccountCircle, ArrowDropDown, EditNote, Logout } from '@mui/icons-material';
import { Avatar, ButtonBase, ListItemIcon, ListItemText, Menu, MenuItem, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';

const Profile = () => {
    // hardcoding a name for now
    const profileInfo = {'given_name': 'Ashman', 'family_name': 'Kumar'};
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleToggle = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <ButtonBase
                aria-controls={open ? 'basic-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-label="open profile"
                aria-haspopup="true"
                onClick={handleToggle}
            >
                <Stack direction="row" alignItems="center" spacing={1.5} edge="end">
                    <Avatar alt="profile">
                        <AccountCircle />
                    </Avatar>

                    <Typography>{profileInfo.given_name + ' ' + profileInfo.family_name}</Typography>
                    <ArrowDropDown />
                </Stack>
            </ButtonBase>
            <Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose}>
                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <AccountBox />
                    </ListItemIcon>
                    <ListItemText>View Profile</ListItemText>
                </MenuItem>

                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <EditNote />
                    </ListItemIcon>
                    <ListItemText>Edit Profile</ListItemText>
                </MenuItem>

                <MenuItem>
                    <ListItemIcon>
                        <Logout />
                    </ListItemIcon>
                    <ListItemText>Log Out</ListItemText>
                </MenuItem>
            </Menu>
        </>
    );
};

export default Profile;
