import React, { Component } from 'react'

import AppLayout from '../layouts/AppLayout'
import QuestionCreate from '../components/QuestionCreate/QuestionCreate'

class QuestionCreateScreen extends Component {
  render() {
    return (
      <AppLayout>
        <QuestionCreate />
      </AppLayout>
    )
  }
}

export default QuestionCreateScreen;
