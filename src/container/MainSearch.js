import React, { Component } from 'react';
import { Container } from '@material-ui/core';

import EditContainer from './EditContainer';
import ImgListContainer from './ImgListContainer';
import PageNationContainer from './PageNationContainer';

import '../css/imgListView.css';

class MainSearch extends Component {
    render() {
        return (
            <Container>
                <EditContainer />
                <ImgListContainer />
                <PageNationContainer />
            </Container>
        );
    }
}

export default MainSearch;
