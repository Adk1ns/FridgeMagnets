import styled from 'styled-components'

const WordStyles = styled.div`
  background-color: white;
  color: black;
  cursor: grab;
  border: 1px solid black;
  width: ${props => props.wide}px};
  height: 1.55rem;
  position: absolute;
  padding-left: 0.25rem;
  padding-right: 0.25rem;
  padding-top: 0.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.25rem;
    &:active {
        cursor: grabbing;
    }
`

export default WordStyles
