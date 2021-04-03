import React, { Component } from 'react';

import { inject, observer } from 'mobx-react';
import autobind from 'autobind-decorator';
import { Container } from '@material-ui/core';

import ImgListView from '../view/ImgListView';

@inject('imgSearch')
@autobind
@observer
class SearchbarContainer extends Component {

  render() {
    const { imgSearch } = this.props;
    return (
      <Container>
        <ImgListView
          documents={imgSearch.documents}
        />
      </Container>
    )
  }
}

export default SearchbarContainer;