import React, { Component } from 'react'
import FormComponent from './FormComponent'

class Form extends Component {

  onSubmit = (data) => {
    this.props.onSubmit(data)
  }

  render() {
    return (
      <FormComponent onSubmit={this.onSubmit} />
    )
  }

}

export default Form
