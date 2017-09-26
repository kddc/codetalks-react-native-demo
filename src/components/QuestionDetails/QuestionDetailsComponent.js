import React, { Component } from 'react'
import { StyleSheet, ScrollView, View, Text, Button, TextInput, TouchableHighlight } from 'react-native'
import { Ionicons as Icon } from '@expo/vector-icons'

import Form from '../Form/Form'
import Question from '../Question/Question'

class QuestionDetailsComponent extends Component {

  handleUpvoteAnswer = (answer) => {
    this.props.onUpvoteAnswer(answer)
  }

  render() {
    const { question, answers } = this.props
    return (
      <View>
        <Question question={question} />
        <View style={styles.answers}>

          <Form onSubmit={this.props.onSubmitAnswer} />

          <View>
            <Text style={styles.headline}>
              {question.answers && question.answers.length} Answers
            </Text>
            {this.props.answers.map((answer) => (
              <View key={answer.key} style={styles.answer}>

                <TouchableHighlight onPress={() => this.handleUpvoteAnswer(answer)} underlayColor="#e8e8e8">
                  <View style={styles.upvotes}>
                    <Text style={styles.score}>{answer.upvotes}</Text>
                  </View>
                </TouchableHighlight>

                <View style={styles.content}>
                  <View style={styles.answerHeader}>
                    <Text>{answer.author} Some moments ago</Text>
                  </View>
                  <Text>{answer.text}</Text>
                </View>
              </View>
            ))}
          </View>

        </View>
      </View>
    )
  }

}

export default QuestionDetailsComponent;

const styles = StyleSheet.create({
  headline: {
    fontWeight: '500',
    marginTop: 8,
    marginBottom: 8
  },
  answers: {
    marginTop: 8,
    marginBottom: 8,
    padding: 16,
    paddingBottom: 0,
    backgroundColor: 'white'
  },
  answer: {
    borderTopColor: '#e8e8e8',
    borderTopWidth: 1,
    flexDirection: 'row'
  },
  upvotes: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    flexDirection: 'row',
    padding: 16,
    width: 64,
    flex: 1
  },
  arrow: {
    marginLeft: -5,
    marginRight: 3,
    marginTop: 3,
  },
  answerHeader: {
    opacity: 0.5,
    marginBottom: 8
  },
  content: {
    paddingBottom: 16,
    paddingTop: 16,
    flexShrink: 1
  }
})
