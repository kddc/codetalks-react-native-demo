import React, { Component } from 'react';
import { baqend } from '../../baqend'

import QuestionDetailsComponent from './QuestionDetailsComponent'

class QuestionDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      question: {},
      answers: []
    }
  }

  onUpvoteAnswer = (answer) => {
    answer.upvotes++
    answer.save()
  }

  onSubmitAnswer = (data) => {
    const { db } = this.props
    const { question } = this.state
    const answer = new db.Answer({
      ...data,
      question
    })
    question.answers.push(answer)
    question.save({ depth: 1 })
  }

  componentDidMount() {
    const { db } = this.props

    this.questionSubscription = db.Question
      .find()
        .equal('id', '/db/Question/' + this.props.id)
      .eventStream()
        .subscribe((event) => {
          const question = event.data
          this.setState({ question })
        })

    this.answersSubscription = db.Answer
      .find()
        .equal('question', '/db/Question/' + this.props.id)
      .resultStream()
        .subscribe((answers) => {
          this.setState({ answers })
        })
  }

  componentWillUnmount() {
    this.questionSubscription.unsubscribe()
    this.answersSubscription.unsubscribe()
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

export default baqend(QuestionDetails);
