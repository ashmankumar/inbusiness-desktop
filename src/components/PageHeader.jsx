import { Grid, Stack, Avatar, Typography } from "@mui/material";

const PageHeader = (props) => {
    return (
        <Grid container>
            <Grid item xs={12} sm container>
                <Stack direction="row" alignItems="center" spacing={1.5}>
                    <Avatar sx={{ bgcolor: "#c68592" }} variant="rounded">
                        {props.icon}
                    </Avatar>
                    <Stack direction="column" spacing={-0.5}>
                        <Typography variant="h5">{props.title}</Typography>
                        <Typography variant="caption">{props.subtitle}</Typography>
                    </Stack>
                </Stack>
            </Grid>
        </Grid>
    );
};

export default PageHeader;
