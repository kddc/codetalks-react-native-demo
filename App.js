import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AppContainer from './src/App'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AppContainer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
