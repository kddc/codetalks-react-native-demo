import React, { Component } from 'react';
import { baqend } from '../../baqend'

import QuestionListComponent from './QuestionListComponent'

class QuestionList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      questions: []
    }
  }

  componentWillMount() {
    const { db } = this.props

    this.subscription = db.Question
      .find()
      .resultStream()
        .subscribe(async (questions) => {
          this.setState({ questions })
        })
  }

  componentWillUnmount() {
    this.subscription.unsubscribe()
  }

  render() {
    return (
      <QuestionListComponent questions={this.state.questions} />
    )
  }
}

export default baqend(QuestionList);
