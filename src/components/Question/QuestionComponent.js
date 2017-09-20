import React, { Component } from 'react'
import { StyleSheet, View, Text, Button, TouchableHighlight } from 'react-native'
import { withNavigation } from 'react-navigation'
import { Ionicons as Icon } from '@expo/vector-icons'

class QuestionComponent extends Component {

  handleUpvote = () => {
    this.props.onUpvote()
  }

  render() {
    const { question } = this.props
    const { navigate } = this.props.navigation
    return (
      <TouchableHighlight onPress={() => navigate('QuestionDetails', { id: question.key })}>
        <View style={styles.question}>

          <TouchableHighlight onPress={this.handleUpvote}>
            <View style={styles.upvotes}>
              <Icon name='md-arrow-dropup' size={16} style={styles.arrow}/>
              <Text style={styles.score}>
                {question.upvotes}
              </Text>
            </View>
          </TouchableHighlight>

          <View style={styles.content}>
            <Text style={styles.text}>
              {question.text}
            </Text>
            <View style={styles.info}>
              <Text>{question.author}</Text>
              <Text> | </Text>
              <Text>{question.answers && question.answers.length} answers</Text>
            </View>
          </View>

        </View>
      </TouchableHighlight>
    );
  }

}

export default withNavigation(QuestionComponent);

const styles = StyleSheet.create({
  question: {
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#e8e8e8',
    flexDirection: 'row',
    alignItems: 'center'
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
  score: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1abd80'
  },
  arrow: {
    marginLeft: -5,
    marginRight: 3,
    marginTop: 3,
  },
  content: {
    flex: 1,
    padding: 16,
    paddingLeft: 0
  },
  text: {
    fontWeight: '500'
  },
  info: {
    marginTop: 8,
    flexDirection: 'row',
    opacity: 0.5
  }
})
