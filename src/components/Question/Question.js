import React, { Component } from 'react'
import { baqend } from 'react-baqend-provider'

import QuestionComponent from './QuestionComponent'

class Question extends Component {

  render() {
    const { question } = this.props
    return (
      <QuestionComponent question={question} onUpvote={this.onUpvote} />
    )
  }

}

export default Question;
