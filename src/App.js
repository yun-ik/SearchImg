import React, { Component } from 'react';
import { Container } from '@material-ui/core';

import MainSearch from './container/MainSearch';
import { Route, Switch } from 'react-router';

import './css/imgListView.css';

class App extends Component {
  render() {
    return (
      <Container>
        {/* <EditContainer />
        <ImgListContainer/>
        <PageNationContainer /> */}
        <Switch>
          <Route exact path='/' component={MainSearch}></Route>
          <Route path='/search' component={MainSearch}></Route>
          <Route component={() => <h2>Not Found!</h2>}></Route>
        </Switch>
      </Container>



    );
  }
}

export default App;
