import React, { Component } from 'react'
import { View, Text, Button, TextInput } from 'react-native'
// import { Link } from 'react-router-dom'

class ItemListComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      text: ""
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.onSubmitComment(this.state)
  }

  handleUpvote = (entity) => {
    this.props.onUpvote(entity)
  }

  render() {
    const { item, comments } = this.props
    return (
      <View>
        <Text>Key: {item.key}</Text>
        <Text>Text: {item.text}</Text>
        <Text>Upvotes: {item.score}</Text>
        <Button title="Upvote" onPress={() => this.handleUpvote(item)}/>

        <TextInput
          multiline={true}
          numberOfLines={4}
          editable={true}
          style={{height: 40, borderColor: 'gray', backgroundColor: 'white', borderWidth: 1}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <Button title="Submit" onPress={this.handleSubmit} />

        <Text>Comments</Text>
        {this.props.comments.map((comment) => (
          <View key={comment.key} style={{marginTop: 16, paddingBottom: 16}}>
            <Button title="Upvote" onPress={() => this.handleUpvote(comment)} />
            <Text>Upvotes: {comment.score}</Text>
            <Text>{comment.text}</Text>
          </View>
        ))}
      </View>
    )
  }
  // render() {
  //   const { item } = this.props
  //   return (
  //     <div style={{padding: 16}}>
  //       <div>
  //         <Link to={"/item/" + this.props.item.key}>{this.props.item.key}</Link>
  //         Upvotes: {this.props.item.score}
  //         <button onClick={() => this.handleUpvote(item)}>Upvote</button>
  //         {this.props.item.text}
  //       </div>
  //
  //
  //       <div>
  //         <form onSubmit={this.handleSubmit}>
  //           <label>
  //             <textarea
  //               name="text"
  //               type="text"
  //               value={this.state.text}
  //               onChange={this.handleChange} />
  //           </label>
  //           <input type="submit" value="Submit" />
  //         </form>
  //       </div>
  //
  //
  //       <div>
  //         Comments
  //         {this.props.comments.map((comment) => (
  //           <div key={comment.key} style={{borderBottom: '1px solid #e8e8e8', marginTop: 16, paddingBottom: 16}}>
  //             <button onClick={() => this.handleUpvote(comment)}>Upvote</button> <br />
  //             Upvotes: {comment.score} <br />
  //             {comment.text}
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   );
  // }

}

export default ItemListComponent;
