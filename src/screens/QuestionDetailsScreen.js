import React, { Component } from 'react';

import AppLayout from '../layouts/AppLayout'
import QuestionDetails from '../components/QuestionDetails/QuestionDetails'

class QuestionDetailsScreen extends Component {
  render() {
    const { params } = this.props.navigation.state;
    return (
      <AppLayout>
        <QuestionDetails id={params.id}/>
      </AppLayout>
    )
  }
}

export default QuestionDetailsScreen;
