import React, { Component } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';

class AppLayout extends Component {

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          {this.props.children}
        </ScrollView>
      </View>
    );
  }
}

export default AppLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
