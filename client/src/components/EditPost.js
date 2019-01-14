import React, { Component } from 'react'
import axios from 'axios'
import Form from './Form'
import { API_SERVER } from '../constants/ApiConstants'

class EditPost extends Component {
  state = {
    post: {}
  }

  updatePost = async post => {
    const { id } = this.props.match.params
    await axios.put(`${API_SERVER}/post/${id}`, post)
    this.props.history.push('/')
  }

  async componentDidMount() {
    const { id } = this.props.match.params
    console.log(id)

    const { data: post } = await axios.get(`${API_SERVER}/post/${id}`)
    this.setState({ post })
  }

  render() {
    const { post } = this.state
    return (
      <div>
        {Object.keys(post).length !== 0 && (
          <Form submit={this.updatePost} post={post} />
        )}
      </div>
    )
  }
}

export default EditPost
