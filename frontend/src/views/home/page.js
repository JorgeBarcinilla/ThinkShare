import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Thinks from '../../components/thinks';
import Thinks2 from '../../components/navTabs';

const Page = () => {
    return(
        <Container component="main" maxWidth="xl">
            <CssBaseline />
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={2}>
                            <Thinks2/>
                            <Thinks2/>
                            <Thinks2/>
                            <Thinks2/>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Page;