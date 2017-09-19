import React, { Component } from 'react';

import { baqend } from '../../baqend'

import ItemListComponent from './ItemListComponent'

class ItemList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: []
    }
  }

  componentWillMount() {
    const { db } = this.props
    this.subscription = db.Item.find().notEqual('type', 'comment').resultStream().subscribe(async (items) => {
      this.setState({ items })
    })
  }

  componentWillUnmount() {
    this.subscription.unsubscribe()
  }

  render() {
    return (
      <ItemListComponent items={this.state.items} />
    )
  }
}

export default baqend(ItemList);
