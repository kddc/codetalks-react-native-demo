import React, { Component } from 'react';

import AppLayout from '../layouts/AppLayout'
import QuestionDetails from '../components/QuestionDetails/QuestionDetails'

class QuestionDetailsScreen extends Component {
  render() {
    const { params } = this.props.navigation.state;
    return (
      <AppLayout>
        <QuestionDetails match={this.props.navigation.state}/>
      </AppLayout>
    )
  }
}

export default QuestionDetailsScreen;
