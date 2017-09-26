import React, { Component } from 'react'
import { baqend } from 'react-baqend-provider'

import QuestionListComponent from './QuestionListComponent'

class QuestionList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      questions: []
    }
  }

  render() {
    return (
      <QuestionListComponent questions={this.state.questions} />
    )
  }
}

export default baqend(QuestionList);
