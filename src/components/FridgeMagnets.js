import React from 'react'
import Draggable from 'react-draggable'
import Scene from './Scene'
import Word from './Word'

const FridgeMagnets = () => {
  // const [position, setPosition] = React.useState({ x: 210, y: 210 })

  //make an array of objects with the text and position
  const [words, setWords] = React.useState([
    { text: 'hello', position: { x: 210, y: 210 }, id: 1 },
    { text: 'boop', position: { x: 310, y: 210 }, id: 2 },
    { text: 'fart', position: { x: 310, y: 510 }, id: 3 },
    { text: 'start', position: { x: 110, y: 610 }, id: 4 }
  ])

  const handleDrag = (e, ui) => {
    console.log(ui)
    const { x, y } = ui
    const { id } = e.target
    const newWords = words.map(word => {
      if (word.id === Number(id)) {
        return { ...word, position: { x, y } }
      }
      return word
    })
    setWords(newWords)
    localStorage.setItem('words', JSON.stringify(newWords))
  }

  //console log local storage
  //leaving off right here, issues with local storage and saving
  console.log(localStorage.getItem('words'))

  return (
    <Scene>
      <div>
        <h1>hi</h1>
      </div>
      {/* <Draggable onDrag={handleDrag} defaultPosition={position}>
        <div>
          <Word text="hello" />
        </div>
      </Draggable> */}
      {words.map((word, index, id) => {
        return (
          <Draggable
            key={index}
            onDrag={handleDrag}
            defaultPosition={word.position}
          >
            <div>
              <Word text={word.text} id={id} />
            </div>
          </Draggable>
        )
      })}
    </Scene>
  )
}

export default FridgeMagnets
