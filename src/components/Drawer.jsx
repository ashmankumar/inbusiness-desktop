import {
    Badge,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import { styled } from "@mui/material/styles";

import { mainMenu } from "../constants/menuItems.jsx";
import { useNavigate, useLocation } from "react-router-dom";
import DrawerHeader from "./DrawerHeader";

const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
    }),
}));

// Navigation drawer component
const MainDrawer = ({ open }) => {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const location = pathname.split("/")[1];
    const current = location === "" ? "/" : "/" + location;

    const onMenuItemClicked = (e) => {
        navigate(e);
    };

    return (
        <Drawer
            variant="permanent"
            anchor="left"
            PaperProps={{
                sx: {
                    width: 250,
                    backgroundColor: "inherit",
                    flexShrink: 0,
                    "& .MuiDrawer-paper": {
                        width: 250,
                        boxSizing: "border-box",
                    },
                },
            }}
            open={open}
        >
            <DrawerHeader open={open} />
            <List>
                {mainMenu.map((item) => {
                    return (
                        <ListItem key={item.title} disablePadding sx={{ display: "block" }}>
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? "initial" : "center",
                                    px: 2.5,
                                    color: "#ffffff",
                                    "&.Mui-selected": {
                                        backgroundColor: "#ffffff",
                                        color: "black",
                                        ":hover": {
                                            backgroundColor: "#fbf9f9",
                                            color: "black",
                                        },
                                    },
                                    ":hover": {
                                        backgroundColor: "inherit",
                                    },
                                }}
                                key={item.title}
                                onClick={() => onMenuItemClicked(item.link)}
                                selected={current === item.link}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : "auto",
                                        justifyContent: "center",
                                        color: current === item.link ? "#000" : "#FFF",
                                    }}
                                >
                                    {item.icon}
                                </ListItemIcon>

                                <ListItemText
                                    primary={item.title}
                                    disableTypography
                                    sx={{ opacity: open ? 1 : 0 }}
                                />
                                {item.title === "Alerts" && (
                                    <Badge color="error" badgeContent={4}></Badge>
                                )}
                            </ListItemButton>
                        </ListItem>
                    );
                })}
            </List>
        </Drawer>
    );
};

export default MainDrawer;
