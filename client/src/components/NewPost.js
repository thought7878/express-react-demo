import React, { Component } from 'react'
import Form from './Form'
import axios from 'axios'
import { API_SERVER } from '../constants/ApiConstants'
class NewPost extends Component {
  newPost = async data => {
    await axios.post(`${API_SERVER}/post`, data)
    this.props.history.push('/')
  }

  render() {
    return (
      <div>
        <Form submit={this.newPost} />
      </div>
    )
  }
}

export default NewPost
