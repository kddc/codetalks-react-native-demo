import React, { Component } from 'react';
import { baqend } from '../../baqend'

import QuestionCreateComponent from './QuestionCreateComponent'

class QuestionCreate extends Component {

  onSubmit = (data) => {
    const { db } = this.props
    const question = new db.Question({
      ...data
    })
    return question.save()
  }

  render() {
    return (
      <QuestionCreateComponent onSubmit={this.onSubmit} />
    )
  }

}

export default baqend(QuestionCreate)
