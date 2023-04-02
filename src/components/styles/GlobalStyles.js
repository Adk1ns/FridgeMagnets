import styled from 'styled-components'

const GlobalStyles = styled.div`
  .background {
    width: 99.9%;
    z-index: -1;
    position: absolute;
  }

  .border-bottom {
    border-bottom: 1px solid black;
    width: 60%;
  }

  .relative {
    position: relative;
  }
`

export default GlobalStyles
