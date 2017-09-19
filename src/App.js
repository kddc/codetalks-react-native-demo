import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { StyleSheet, Text, ScrollView, View, Button, Image, StatusBar, TouchableHighlight, Platform } from 'react-native';
import { Ionicons as Icon } from '@expo/vector-icons'

// workaround as Symbol polyfill is missing on android
// use require instead of import as import is asynchronous
// import "babel-polyfill";
// import { db } from 'baqend/realtime'
require("babel-polyfill");
const { db } = require('baqend/realtime')

import { BaqendProvider } from './baqend'

import CreateItemScreen from './screens/CreateItemScreen'
import ItemListScreen from './screens/ItemListScreen'
import ItemScreen from './screens/ItemScreen'

import Logo from './codetalks.png'

const connection = db.connect('codetalks17', true)

const headerOptions = {
  headerStyle: {
    backgroundColor: '#222'
  },
  headerTitleStyle: {
    alignSelf: 'stretch'
  },
  headerTintColor: 'white'
}

const HeaderLogoTitle = (props) => {
  return (
    <View style={{alignSelf: 'stretch', alignItems: 'center'}}>
      <Image source={Logo} style={{width: 120, height: 40, resizeMode: Image.resizeMode.contain, marginBottom: 8 }} />
    </View>
  )
}

const CreateItemButton = (props) => {
  return (
    <TouchableHighlight underlayColor={'transparent'} activeOpacity={0.5} onPress={props.onPress}>
      <Icon name='ios-create-outline' size={26} color="white" style={{marginRight: 12}}/>
    </TouchableHighlight>
  )
}

const Navigator = StackNavigator({
  Home: {
    screen: ItemListScreen,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <View style={{ paddingLeft: 56 }} />,
      headerTitle: <HeaderLogoTitle />,
      headerRight: <CreateItemButton onPress={() => navigation.navigate('Create', {})} />,
      ...headerOptions
    })
  },
  Item: {
    screen: ItemScreen,
    navigationOptions: ({navigation}) => ({
      headerTitle: 'Item',
      ...headerOptions
    })
  },
  Create: {
    screen: CreateItemScreen,
    navigationOptions: ({navigation}) => ({
      headerTitle: 'Create Item',
      ...headerOptions
    }),
  }
});

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.statusBar}>
          <StatusBar barStyle="light-content"/>
        </View>
        <BaqendProvider db={connection}>
          <Navigator/>
        </BaqendProvider>
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  statusBar: {
    height: StatusBar.currentHeight,
    backgroundColor: '#000',
  }
});
