import React from "react";
import {
    Box,
    Link,
    Typography,
  } from "@material-ui/core";

function Copyright() {
    return (
        <Box mt={8}>
            <Typography variant="body2" color="textSecondary" align="center">
                {"Copyright © "}
                <Link color="inherit" href="#">
                <strong>Yowl</strong>
                </Link>{" "}
                {new Date().getFullYear()}
                {"."}
            </Typography>
        </Box>
    );
}

export default Copyright;