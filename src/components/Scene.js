import React from 'react'
import styled from 'styled-components'
import fridgeWhite from '../images/fridgeWhite2.png'

const StyledScene = styled.div`
  height: 100vh;
  width: 100vw;
  background: transparent;
  ${'' /* background-image: url(${fridgeWhite}); */}
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: 100%;
  background-repeat: no-repeat;
  aspect-ratio: 1/1;
  overflow: hidden;
`

const Scene = ({ children }) => {
  return <StyledScene>{children}</StyledScene>
}

export default Scene
