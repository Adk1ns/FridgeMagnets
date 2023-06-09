import styled from 'styled-components'

const GlobalStyles = styled.div`
  animation: fadeIn 0.5s ease-in-out;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  .background {
    width: 99.9%;
    z-index: -1;
    position: absolute;
    object-fit: contain;
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
