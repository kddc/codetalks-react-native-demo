import React, { Component } from 'react'
import { StyleSheet, View, Text, TextInput, Button } from 'react-native'
import { withNavigation } from 'react-navigation'

import Form from '../Form/Form'

class QuestionCreateComponent extends Component {

  onSubmit = (data) => {
    const { goBack } = this.props.navigation
    this.props.onSubmit(data).then(() => {
      goBack()
    })
  }

  render() {
    return (
      <View style={styles.questionCreate}>
        <Form onSubmit={this.onSubmit} />
      </View>
    );
  }

}

export default withNavigation(QuestionCreateComponent);

const styles = StyleSheet.create({
  questionCreate: {
    padding: 16,
    paddingBottom: 8,
    backgroundColor: 'white'
  }
})
