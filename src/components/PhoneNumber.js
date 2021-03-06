import React from 'react'
import styled from 'styled-components'

const PhoneNumber = styled.a`
  font-size: 2em;
  text-decoration: none;
  font-style: bold;
  font-weight: 600;
  color: ${props => props.theme.colors.brand};
  text-align: center;
  @media screen and (max-width: ${props => props.theme.responsive.small}) {
    font-size: 1.5em;
  }
`

const PageCTA = () => {
  return <PhoneNumber href="tel:407-251-1314">(407)-251-1314</PhoneNumber>
}

export default PageCTA
