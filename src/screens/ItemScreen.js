import React, { Component } from 'react';

import AppLayout from '../layouts/AppLayout'
import Item from '../components/Item/Item'

class ItemScreen extends Component {
  render() {
    const { params } = this.props.navigation.state;
    return (
      <AppLayout>
        <Item id={params.id}/>
      </AppLayout>
    )
  }
}

export default ItemScreen;
