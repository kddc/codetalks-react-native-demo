import React, { Component } from 'react';
import { baqend } from '../../baqend'

import ItemComponent from './ItemComponent'

class Item extends Component {
  constructor(props) {
    super(props)
    this.state = {
      item: {},
      comments: []
    }
  }

  onUpvote = (entity) => {
    entity.score++
    entity.save()
  }

  onComment = (data) => {
    const { db } = this.props
    const { item } = this.state
    item.children.push(db.Item({
      type: 'comment',
      parent: item,
      ...data
    }))
    item.save({depth: 1})
  }

  componentDidMount() {
    const { db } = this.props
    this.subscription = db.Item.find().equal('id', '/db/Item/' + this.props.id).eventStream().subscribe((event) => {
      this.setState({ item: event.data })
    })
    this.commentSubscription = db.Item.find().equal('parent', '/db/Item/' + this.props.id).resultStream().subscribe((comments) => {
      this.setState({ comments })
    })
  }

  componentWillUnmount() {
    this.subscription.unsubscribe()
    this.commentSubscription.unsubscribe()
  }

  render() {
    return (
      <ItemComponent
        item={this.state.item}
        comments={this.state.comments}
        onUpvote={this.onUpvote}
        onSubmitComment={this.onComment} />
    )
  }

}

export default baqend(Item);
