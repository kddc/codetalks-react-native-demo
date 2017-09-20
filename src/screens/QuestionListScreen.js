import React, { Component } from 'react'

import AppLayout from '../layouts/AppLayout'
import QuestionList from '../components/QuestionList/QuestionList'

class QuestionListScreen extends Component {
  render() {
    return (
      <AppLayout>
        <QuestionList />
      </AppLayout>
    )
  }
}

export default QuestionListScreen;
