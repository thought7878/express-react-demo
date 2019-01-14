import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'
import { API_SERVER } from '../constants/ApiConstants'

class Home extends Component {
  state = {
    posts: []
  }

  async componentDidMount() {
    const { data: posts } = await axios.get(`${API_SERVER}/posts`)
    this.setState({ posts })
  }

  render() {
    const { posts } = this.state
    const postList = posts.map(p => {
      return (
        <Card key={p._id}>
          <div className="title">{p.title}</div>
          <div className="actions">
            <Link className="link" to={`/post/${p._id}`}>
              查看
            </Link>
            <Link className="link" to={`/post/${p._id}/edit`}>
              编辑
            </Link>
          </div>
        </Card>
      )
    })
    return (
      <Wrap>
        <Link className="button" to="/post/new">
          写文章
        </Link>
        {postList}
      </Wrap>
    )
  }
}

export default Home

const Wrap = styled.div`
  .button {
    display: block;
    margin: 30px auto;
    width: 120px;
    height: 36px;
    line-height: 36px;
    text-align: center;
    background-color: #ff4081;
    font-size: 1em;
    color: #fff;
    text-decoration: none;
    border-radius: 20px;
  }
`
const Card = styled.div`
  position: relative;
  width: 80%;
  height: 60px;
  max-width: 600px;
  margin: 20px auto;
  background-color: #fff;
  border-radius: 5px;
  padding: 16px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;
  .title {
    font-size: 1.2em;
  }
  .actions {
    position: absolute;
    bottom: 16px;
    right: 16px;

    .link {
      display: inline-block;
      font-size: 0.9em;
      color: #00bcd4;
      opacity: 0.8;
      text-decoration: none;
      padding-left: 10px;
      padding-right: 10px;
    }
  }
`
