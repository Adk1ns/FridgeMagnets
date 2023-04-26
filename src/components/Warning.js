import React from 'react'
import styled from 'styled-components'

const WarningStyles = styled.div`
  padding: 1rem;
  height: 95vh;
  width: 90vw;
`

const Warning = () => {
  return (
    <WarningStyles>
      <p>
        This app is not supported on devices less than 400px wide, please try
        again on a larger screen
      </p>
    </WarningStyles>
  )
}

export default Warning
