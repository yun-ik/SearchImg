import React, { Component } from 'react';

import { inject, observer } from 'mobx-react';
import autobind from 'autobind-decorator';
import { Container } from '@material-ui/core';

import PageNationView from '../view/PageNationView';

@inject('imgSearch')
@autobind
@observer
class PageNationContainer extends Component {

    OnNextpageNation() {
        this.props.imgSearch.NextpageNation()
    }

    OnPrepageNation() {
        this.props.imgSearch.PrepageNation()
    }

    OnsetNowPage(page) {
        this.props.imgSearch.setNowPage(page)
    }

    render() {
        const { imgSearch } = this.props;
        return (
            <Container>
                <PageNationView
                    page={imgSearch._pageCount.page}
                    nowpage={imgSearch.nowpage}
                    NextpageNation={this.OnNextpageNation}
                    PrepageNation={this.OnPrepageNation}
                    setNowPage={this.OnsetNowPage}
                />
            </Container>
        )
    }
}

export default PageNationContainer;