import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default ({ isShown, close }) => {
  return (
    <Wrap isShown={isShown}>
      <div className="dialog">
        确认删除吗？
        <div className="actions">
          <Link to="" onClick={() => close(false)} className="action">
            确定
          </Link>
          <Link to="" onClick={() => close(true)} className="action">
            取消
          </Link>
        </div>
      </div>
    </Wrap>
  )
}

const Wrap = styled.div`
  display: ${props => (props.isShown ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  justify-content: center;
  align-items: center;
  z-index: 999;

  .dialog {
    width: 300px;
    height: 100px;
    margin: 0 auto;
    padding: 16px;
    background-color: #fff;
    top: 50%;
    margin-top: -50px;
    border: 1px solid #ddd;
    border-radius: 5px;
    position: relative;
    color: #f44336;
  }
  .actions {
    position: absolute;
    bottom: 16px;
    right: 16px;
  }
  .action {
    display: inline-block;
    padding-left: 10px;
    padding-right: 10px;
    color: #00bcd4;
    font-size: 0.9em;
    text-decoration: none;
  }
  .action:hover {
    cursor: pointer;
  }
`
