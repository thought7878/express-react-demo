import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

class Form extends Component {
  render() {
    return (
      <Wrap>
        <div>
          <label>分类</label>
          <input type="text" />
        </div>
        <div>
          <label>标题</label>
          <input type="text" />
        </div>
        <div>
          <label>内容</label>
          <textarea name="" cols="30" rows="20" />
        </div>
        <div className="actions">
          <button type="submit">提交</button>
          <Link to="/" className="link">
            取消
          </Link>
        </div>
      </Wrap>
    )
  }
}

export default Form

const Wrap = styled.div`
  padding: 20px 40px;
  div {
    margin-bottom: 10px;
  }
  label {
    display: block;
    font-size: 0.9em;
    color: rgba(0, 0, 0, 0.6);
    padding-bottom: 10px;
  }
  textarea,
  input {
    width: 100%;
    height: 48px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 1em;
    padding: 10px;
    box-sizing: border-box;
  }
  textarea {
    height: 100%;
  }
  textarea:focus,
  input:focus {
    border: 1px solid #00bcd4;
    outline: none;
  }
  .actions {
    text-align: center;
  }
  button {
    width: 120px;
    height: 36px;
    border: none;
    background-color: #ff4081;
    font-size: 1em;
    color: #fff;
    display: inline-block;
    margin: 20px auto 0;
    border-radius: 20px;
  }
  button:hover {
    cursor: pointer;
  }
  button:focus {
    outline: none;
  }
  .link {
    display: inline-block;
    margin-left: 15px;
    font-size: 1em;
    color: #00bcd4;
    opacity: 0.8;
    text-decoration: none;
  }
`
