import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Thinks from '../../components/thinks';

const Page = () => {
    return(
        <Container component="main" maxWidth="xl">
            <CssBaseline />
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={2}>
                        <Grid key="1" item>
                            <Thinks/>
                        </Grid>
                        <Grid key="2" item>
                            <Thinks/>
                        </Grid>
                        <Grid key="3" item>
                            <Thinks/>
                        </Grid>
                        <Grid key="4" item>
                            <Thinks/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Page;