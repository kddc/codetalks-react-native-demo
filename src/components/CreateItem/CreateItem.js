import React, { Component } from 'react';
import { baqend } from '../../baqend'

import CreateItemComponent from './CreateItemComponent'


class CreateItem extends Component {

  handleSubmit = (data) => {
    const { db } = this.props
    const item = new db.Item({
      type: 'question',
      ...data
    })
    item.save()
  }

  render() {
    return (
      <CreateItemComponent onSubmit={this.handleSubmit} />
    )
  }

}

export default baqend(CreateItem)
