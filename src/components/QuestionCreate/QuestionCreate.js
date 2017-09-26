import React, { Component } from 'react';
import { baqend } from 'react-baqend-provider'

import QuestionCreateComponent from './QuestionCreateComponent'

class QuestionCreate extends Component {

  render() {
    return (
      <QuestionCreateComponent onSubmit={this.onSubmit} />
    )
  }

}

export default baqend(QuestionCreate)
