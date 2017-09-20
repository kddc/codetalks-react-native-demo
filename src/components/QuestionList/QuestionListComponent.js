import React, { Component } from 'react'
import { View, Text } from 'react-native'

import Question from '../Question/Question'

class QuestionListComponent extends Component {

  render() {
    return (
      <View>
        {this.props.questions.map(question => (
          <Question key={question.key} question={question} />
        ))}
      </View>
    );
  }

}

export default QuestionListComponent;
