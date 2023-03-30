import React from 'react'
import Draggable from 'react-draggable'
import Scene from './Scene'
import Word from './Word'
import Header from './Header'

const FridgeMagnets = () => {
  // const [position, setPosition] = React.useState({ x: 210, y: 210 })

  //make an array of objects with the text and position
  const [words, setWords] = React.useState([
    { text: 'hello', position: { x: 210, y: 210 }, id: 1 },
    { text: 'boop', position: { x: 310, y: 210 }, id: 2 },
    { text: 'chicken', position: { x: 310, y: 510 }, id: 3 },
    { text: 'successfully', position: { x: 110, y: 610 }, id: 4 },
    { text: 'saved', position: { x: 110, y: 650 }, id: 5 },
    { text: 'to', position: { x: 120, y: 700 }, id: 6 },
    { text: 'local', position: { x: 210, y: 410 }, id: 7 },
    { text: 'the', position: { x: 310, y: 80 }, id: 8 }
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

  //set bounds for magnets
  const viewportWidth = window.innerWidth // get the viewport width in pixels
  const bounds = {
    left: viewportWidth * 0.025,
    top: 15,
    right: viewportWidth * 0.44,
    bottom: viewportWidth
  }

  return (
    <Scene>
      <div className="relative">
        <Header />
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
            bounds={bounds}
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
