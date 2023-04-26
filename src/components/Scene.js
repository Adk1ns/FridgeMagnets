import styled from 'styled-components'

const Scene = styled.div`
  height: 100vh;
  width: 100vw;
  background: transparent;
  background-size: 100%;
  overflow: hidden;
  position: relative;

  h3 {
    position: absolute;
    right: 0;
    bottom: 0;
    margin: 1rem;
    margin-right: 1.5rem;
    padding-bottom: 0.2rem;
    padding-top: -0.2rem;
    font-size: 1.5rem;
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.45);
    border: 2px solid black;
    border-radius: 50%;
    height: 2.25rem;
    width: 2.3rem;
    display: flex;
    justify-content: center;
    align-items: end;
    text-align: center;
    &:hover {
      color: #8e6900;
    }
    @media (max-width: 968px) {
      bottom: 20%;
  }

`

export default Scene
