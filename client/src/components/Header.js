import React from 'react'
import styled from 'styled-components'
const Header = props => {
  return (
    <Wrap>
      <a to="/">Born To Code</a>
    </Wrap>
  )
}

export default Header

const Wrap = styled.div`
  background-color: #00bcd4;
  line-height: 64px;
  text-align: center;

  a {
    text-decoration: none;
    color: white;
  }
`
