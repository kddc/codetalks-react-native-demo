import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { StyleSheet, Text, ScrollView, View, Button, Image, StatusBar, TouchableHighlight } from 'react-native';
import { Ionicons as Icon } from '@expo/vector-icons'

import { db } from 'baqend/realtime'
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
  headerTintColor: 'white'
}

const HeaderLogoTitle = (props) => {
  return (
    <Image source={Logo} style={{width: 120, height: 40, resizeMode: Image.resizeMode.contain, marginBottom: 8 }} />
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
        <StatusBar barStyle="light-content"/>
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
});
