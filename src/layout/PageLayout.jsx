import { Box, Card, Container } from "@mui/material";
import React from "react";
import PageHeader from "../components/PageHeader";

const PageLayout = (props) => {
    return (
        <Container maxWidth="xl">
            <PageHeader
                title={props.title}
                icon={props.pageIcon}
                routes={props.routes}
            />
            <Card sx={{ p: 2, mt: 2, minHeight: "80vh", display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start'  }}>{props.children}</Card>
        </Container>
    );
};

export default PageLayout;
