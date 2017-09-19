import React, { Component } from 'react'
import { View, Text, TextInput, Button } from 'react-native'

class CreateItemComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.onSubmit(this.state)
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <View>
        <Text>Create New Item</Text>
        <TextInput
          multiline={true}
          numberOfLines={4}
          editable={true}
          style={{height: 40, borderColor: 'gray', backgroundColor: 'white', borderWidth: 1}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <Button title='Submit' onPress={this.handleSubmit}/>
      </View>
    );
  }

}

export default CreateItemComponent;
