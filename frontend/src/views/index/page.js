import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Banner from '../../components/banner';

const Index = () => {
  
  return (
    <Container component="main" maxWidth="xl">
      <CssBaseline />
        <Banner/>
    </Container>
  );
};

export default Index;