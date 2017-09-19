import React, { Component } from 'react';
import AppLayout from '../layouts/AppLayout'
import CreateItem from '../components/CreateItem/CreateItem'

class CreateItemScreen extends Component {
  render() {
    return (
      <AppLayout>
        <CreateItem />
      </AppLayout>
    )
  }
}

export default CreateItemScreen;
