//import { Outlet } from "react-router-dom";

// material-ui
import { Box, Toolbar } from "@mui/material";

// project import
import Header from "../components/Header.jsx";
import MainDrawer from "../components/Drawer.jsx";
import { useState } from "react";
import {Outlet} from "react-router-dom";

const MainLayout = () => {
    const [open, setOpen] = useState(true);
    const toggleNavigationDrawer = () => {
        setOpen(!open);
    };

    return (
        <Box sx={{ display: "flex" }}>
            <MainDrawer open={open} />
            <Box component="main" sx={{flexGrow: 0, p: 4}}>
                <Header open={open} toggleNavigationDrawer={toggleNavigationDrawer}/>
                <Toolbar/>
                <Outlet/>
            </Box>
        </Box>
    );
};

export default MainLayout;
