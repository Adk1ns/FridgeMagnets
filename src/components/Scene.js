import React from 'react'
import styled from 'styled-components'

const StyledScene = styled.div`
  height: 100vh;
  width: 100vw;
  background: transparent;
  background-size: 100%;
  overflow: hidden;
`

const Scene = ({ children }) => {
  return <StyledScene>{children}</StyledScene>
}

export default Scene
