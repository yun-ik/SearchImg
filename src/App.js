import React, { Component } from 'react';
import {Box, Container} from '@material-ui/core';

import EditContainer from './container/EditContainer';
import ImgListContainer from './container/ImgListContainer';

class App extends Component {
  render() {
    return (
      <Container>
        <Box m={3}><EditContainer /></Box>
        <Box m={3}><ImgListContainer/></Box>
      </Container>

    );
  }
}

export default App;
