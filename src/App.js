import React, { Component } from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import {
  StyleSheet,
  View,
  Text,
  Image,
  StatusBar,
  TouchableHighlight,
  Platform
} from 'react-native';

import { Ionicons as Icon } from '@expo/vector-icons'

// workaround as Symbol polyfill is missing on android
// use require instead of import as import is asynchronous
// import "babel-polyfill";
// import { db } from 'baqend/realtime'
require("babel-polyfill");
const { db } = require('baqend/realtime')

import { BaqendProvider } from './baqend'

import QuestionCreateScreen from './screens/QuestionCreateScreen'
import QuestionListScreen from './screens/QuestionListScreen'
import QuestionDetailsScreen from './screens/QuestionDetailsScreen'

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

const CreateItemButton = (props) => {
  return (
    <TouchableHighlight underlayColor={'transparent'} activeOpacity={0.5} onPress={props.onPress}>
      <Icon name='ios-create-outline' size={26} color="white" style={{marginRight: 12}}/>
    </TouchableHighlight>
  )
}

// const ItemListNavigator = TabNavigator({
//   Top: {
//     screen: ItemListScreen,
//   },
//   Latest: {
//     screen: ItemListScreen,
//   },
// }, {
//   tabBarPosition: 'top',
//   animationEnabled: true,
//   tabBarOptions: {
//     activeTintColor: '#e91e63',
//   },
// });

const Navigator = StackNavigator({
  QuestionList: {
    screen: QuestionListScreen,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <Image source={Logo} style={{width: 40, height: 24, resizeMode: Image.resizeMode.contain, margin: 8 }} />,
      headerTitle: 'Ask code.talks',
      headerRight: <CreateItemButton onPress={() => navigation.navigate('QuestionCreate', {})} />,
      ...headerOptions
    })
  },
  QuestionDetails: {
    screen: QuestionDetailsScreen,
    navigationOptions: ({navigation}) => ({
      headerTitle: 'Item',
      ...headerOptions
    })
  },
  QuestionCreate: {
    screen: QuestionCreateScreen,
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
