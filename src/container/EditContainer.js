import React, { Component } from 'react';

import { inject, observer } from 'mobx-react';
import autobind from 'autobind-decorator';

import { Container } from '@material-ui/core';
import EditView from '../view/EditView';

@inject('imgSearch')
@autobind
@observer
class SearchbarContainer extends Component {

  onSetQuery(value) {
    this.props.imgSearch.setQuery(value)
    //console.log(this.props.imgSearch.query)
  }

  onSetApi() {
    this.props.imgSearch.setApi()
    console.log(this.props.imgSearch.documents)
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