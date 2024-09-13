// material-ui
import { Stack } from "@mui/material";
// project import
import logo from "../assets/logo.png";
import DrawerHeaderStyled from "./DrawerHeaderStyled";

const DrawerHeader = ({ open }) => {
    return (
        <DrawerHeaderStyled>
            <Stack direction="row" alignItems="center">
                <img src={logo} style={{ width: 120, opacity: open ? 1 : 0 }} />
            </Stack>
        </DrawerHeaderStyled>
    );
};

export default DrawerHeader;
