import React, { Component } from 'react';
import { baqend } from '../../baqend'

import ItemListEntryComponent from './ItemListEntryComponent'

class ItemListEntry extends Component {

  handleUpvote = () => {
    const { item } = this.props
    item.score++
    item.save()
  }

  render() {
    return (
      <ItemListEntryComponent
        item={this.props.item}
        onUpvote={this.handleUpvote} />
    )
  }

}

export default baqend(ItemListEntry);
