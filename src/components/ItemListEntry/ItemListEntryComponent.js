import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { withNavigation } from 'react-navigation';
// import { Link } from 'react-router-dom'

class ItemListEntryComponent extends Component {

  handleUpvote = () => {
    this.props.onUpvote()
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={{padding: 16}}>
        <View>
          <Button title={this.props.item.key} onPress={() => navigate('Item', { id: this.props.item.key })} />
          <Button title='Upvote' onPress={this.handleUpvote} />
        </View>
        <Text>{this.props.item.text}</Text>
        <Text>Upvotes: {this.props.item.score}</Text>
        <Text>Comments: {this.props.item.children.length}</Text>
      </View>
    );
  }

}

export default withNavigation(ItemListEntryComponent);
