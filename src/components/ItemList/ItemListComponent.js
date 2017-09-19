import React, { Component } from 'react';
import { View, Text } from 'react-native'

import ItemListEntry from '../ItemListEntry/ItemListEntry'

class ItemListComponent extends Component {

  render() {
    return (
      <View>
        <Text>Items</Text>
        {this.props.items.map(item => (
          <ItemListEntry key={item.key} item={item} />
        ))}
      </View>
    );
  }

}

export default ItemListComponent;
