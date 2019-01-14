import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { API_SERVER } from '../constants/ApiConstants'

class Post extends Component {
  state = {
    post: {}
  }

  async componentDidMount() {
    const { id } = this.props.match.params
    const { data: post } = await axios.get(`${API_SERVER}/post/${id}`)
    this.setState({ post })
  }

  render() {
    const { post } = this.state
    return (
      <Wrap>
        <div className="category">{post.category}</div>
        <div className="title">{post.title}</div>
        <div className="body">{post.body}</div>
      </Wrap>
    )
  }
}

export default Post

const Wrap = styled.div`
  position: relative;
  width: 80%;
  min-height: 200px;
  max-width: 600px;
  margin: 30px auto;
  background-color: #fff;
  border-radius: 5px;
  padding: 16px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;

  .category {
    position: absolute;
    top: 0;
    right: 0;
    padding: 4px 6px;
    color: #fff;
    font-size: 0.8em;
    background-color: #ed5a5a;
  }
  .title {
    font-size: 1.3em;
    padding-top: 10px;
    padding-bottom: 20px;
    text-align: center;
  }
  .content {
    font-size: 1em;
    color: rgba(0, 0, 0, 0.8);
  }
`
