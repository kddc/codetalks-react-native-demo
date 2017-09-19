import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';
import { StyleSheet, Text, ScrollView, View, Button } from 'react-native';

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
