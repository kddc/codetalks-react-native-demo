import React, { Component } from 'react'

import AppLayout from '../layouts/AppLayout'
import ItemList from '../components/ItemList/ItemList'

class ItemListScreen extends Component {
  render() {
    return (
      <AppLayout>
        <ItemList />
      </AppLayout>
    )
  }
}

export default ItemListScreen;
