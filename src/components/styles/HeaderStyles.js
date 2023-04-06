import styled from 'styled-components'

const HeaderStyles = styled.div`
  position: absolute;
  right: 3%;
  top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.25rem;
  border: 2px solid black;
  border-radius: -1rem;
  min-height: 6rem;
  width: 45%;
  background: rgba(255, 255, 255, 0.65);
  display: flex;
  flex-direction: column;

  h1 {
    margin: 0.35rem;
    margin-top: 1rem;
  }
  h5 {
    margin: 0.35rem;
  }

  button {
    margin: 1rem;
    margin-top: 0.25rem;
    background: transparent;
    outline: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: black;

    &:active {
      transform: translateY(2px);
    }
    &:hover {
      font-style: italic;
      text-decoration: underline #8e6900;
    }
  }

  input {
    background: none;
    border: none;
    font-size: 1.5rem;
    width: 7rem;
    text-align: center;
    color: black;
    outline: none;
    &:hover {
      font-style: italic;
      text-decoration: underline;
      color: #8e6900;
    }
  }

  input::-webkit-input-placeholder {
    color: black;
  }

  input:focus {
    outline-color: #8e6900;
    outline-style: dashed;
    outline-width: 2px;
  }

  @media (max-width: 968px) {
    top: 84vh;
    width: 97.55%;
    right: 1%;
  }
`

export default HeaderStyles
