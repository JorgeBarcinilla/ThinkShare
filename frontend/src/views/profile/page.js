import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

function Page(props){
    return(
        <Container component="main" maxWidth="xl">
            <CssBaseline />
            <Grid container spacing={2}>
                <Grid item xs={12}>
                <h1>
                    Profile
                </h1>
                </Grid>
            </Grid>
        </Container>
        
    );
}

export default Page;