import React, { Component } from 'react'
import { baqend } from 'react-baqend-provider'

import QuestionDetailsComponent from './QuestionDetailsComponent'

class QuestionDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      question: {},
      answers: []
    }
  }

  render() {
    return (
      <QuestionDetailsComponent
        question={this.state.question}
        answers={this.state.answers}
        onUpvoteAnswer={this.onUpvoteAnswer}
        onSubmitAnswer={this.onSubmitAnswer} />
    )
  }

}

export default baqend(QuestionDetails)
