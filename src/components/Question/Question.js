import React, { Component } from 'react';
import { baqend } from '../../baqend'

import QuestionComponent from './QuestionComponent'

class Question extends Component {

  onUpvote = () => {
    const { question } = this.props
    question.upvotes++
    question.save()
  }

  render() {
    const { question } = this.props
    return (
      <QuestionComponent question={question} onUpvote={this.onUpvote} />
    )
  }

}

export default baqend(Question);
