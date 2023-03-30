import React from 'react'
import Draggable from 'react-draggable'
import Scene from './Scene'
import Word from './Word'
import Header from './Header'

const FridgeMagnets = () => {
  const [dragWord, setDragWord] = React.useState('')

  //make an array of objects with the text and position
  const [words, setWords] = React.useState([])

  //set bounds for magnets
  const viewportWidth = window.innerWidth
  const bounds = {
    left: viewportWidth * 0.025,
    top: 15,
    right: viewportWidth * 0.44,
    bottom: viewportWidth
  }

  React.useEffect(() => {
    //check if there are words in local storage
    const localStorageWords = JSON.parse(localStorage.getItem('words'))
    if (localStorageWords) {
      setWords(localStorageWords)
    } else {
      setWords([
        { text: '0', position: { x: 910, y: 210 }, id: 1 },
        { text: '0', position: { x: 310, y: 210 }, id: 2 },
        { text: '0', position: { x: 310, y: 510 }, id: 3 },
        { text: '0', position: { x: 110, y: 610 }, id: 4 },
        { text: '000', position: { x: 110, y: 650 }, id: 5 },
        { text: '000', position: { x: 120, y: 700 }, id: 6 },
        { text: 'local', position: { x: 210, y: 410 }, id: 7 },
        { text: 'the', position: { x: 310, y: 80 }, id: 8 }
      ])
    }
  }, [])

  //set the word to be moved
  const handleDrag = word => {
    setDragWord(word)
  }

  //update words array with new position for word
  const endPosition = position => {
    console.log(position.clientX, position.clientY, dragWord)
    //add new position dragWord
    const updatedWords = words.map(word => {
      if (word === dragWord) {
        return {
          ...word,
          position: { x: position.clientX, y: position.clientY }
        }
      }
      return word
    })
    setWords(updatedWords)
    //save words to local storage
    // localStorage.setItem('words', JSON.stringify(words))
  }

  //FIX: words are saving but are rendering in the wrong place, off by a few pixels

  //save words to local storage
  const handleSave = () => {
    localStorage.setItem('words', JSON.stringify(words))
    console.log('saved', words)
  }

  console.log(words)
  return (
    <Scene>
      {/* <div className="relative">
        <Header />
      </div> */}
      {words.map((word, index, id) => {
        return (
          <Draggable
            key={index}
            onDrag={() => handleDrag(word)}
            defaultPosition={word.position}
            bounds={bounds}
            onStop={position => endPosition(position)}
          >
            <div>
              <Word text={word.text} id={id} />
            </div>
          </Draggable>
        )
      })}
      <button onClick={handleSave}>save</button>
    </Scene>
  )
}

export default FridgeMagnets
