import React, { Component } from 'react';

import { inject, observer } from 'mobx-react';
import autobind from 'autobind-decorator';

import { Container } from '@material-ui/core';
import EditView from '../view/EditView';

@inject('imgSearch')
@autobind
@observer
class SearchbarContainer extends Component {

  onSetQuery(query) {
    this.props.imgSearch.setQuery(query)
  }

  onSetApi() {
    this.props.imgSearch.setApi()
  }

  render() {
    const { imgSearch } = this.props;
    return (
      <Container>
        <EditView
          query={imgSearch.query}
          onSetQuery={this.onSetQuery}
          onSetApi={this.onSetApi}
        />
      </Container>
    )
  }
}

export default SearchbarContainer;