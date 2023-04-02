import styled from 'styled-components'

const AboutStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 40%;
  left: 63%;
  height: 30%;
  min-height: 9rem;
  width: 25%;
  background: rgba(255, 255, 255, 0.68);
  border: 2px solid black;
  animation: fadeIn 0.5s ease-in-out;
  padding: 1rem;
  text-align: center;

  h2,
  h4 {
    margin: 0.45rem;
  }

  span {
    color: #8e6900;
  }

  a {
    text-decoration: none;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`
export default AboutStyles
