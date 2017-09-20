import React, { Component } from 'react'
import { StyleSheet, View, Text, TextInput, Button } from 'react-native'

class FormComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      author: ''
    }
  }

  handleSubmit = () => {
    this.props.onSubmit(this.state)
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <View style={styles.form}>
        <TextInput
          placeholder='Your Text'
          underlineColorAndroid='transparent'
          onChangeText={(text) => this.setState({ text })}
          value={this.state.text}
          style={[ styles.input, { height: 72 } ]}
          multiline={true}
          numberOfLines={4} />
        <View style={styles.row}>
          <TextInput
            placeholder='Name'
            autoCorrect={false}
            underlineColorAndroid='transparent'
            onChangeText={(author) => this.setState({ author })}
            value={this.state.author}
            style={[ styles.input, { marginRight: 8 } ]} />
          <Button title="Submit" onPress={this.handleSubmit} />
        </View>
      </View>
    );
  }

}

export default FormComponent;

const styles = StyleSheet.create({
  form: {
    paddingBottom: 8
  },
  input: {
    textAlignVertical: 'top',
    borderColor: '#e8e8e8',
    backgroundColor: '#f8f8f8',
    borderWidth: 1,
    borderRadius: 2,
    padding: 8,
    marginBottom: 8,
    height: 36,
    fontSize: 16,
    flex: 1
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start'
  }
})
