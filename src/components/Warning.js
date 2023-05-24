import React from 'react'
import styled from 'styled-components'

const WarningStyles = styled.div`
  padding: 1rem;
  height: 95vh;
  width: 90vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2em;
  text-align: center;
`

const Warning = () => {
  return (
    <WarningStyles>
      <p>
        This app is not supported on mobile devices. Please use a desktop or
        laptop computer.
      </p>
    </WarningStyles>
  )
}

export default Warning
