import React from 'react'
import Draggable from 'react-draggable'
import Scene from './Scene'
import Word from './Word'
import Header from './Header'
import wordlist from '../data/wordlist'

const FridgeMagnets = () => {
  const [dragWord, setDragWord] = React.useState('')
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
      setWords(wordlist)
    }
  }, [])

  //set the word to be moved
  const handleDrag = word => {
    setDragWord(word)
  }

  //update words array with new position for word
  const endPosition = position => {
    console.log(position, position.clientY, dragWord)
    //add new position dragWord
    const updatedWords = words.map(word => {
      if (word === dragWord) {
        return {
          ...word,
          position: { x: position.x, y: position.y }
        }
      }
      return word
    })
    setWords(updatedWords)
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
      <div className="relative">
        <Header words={words} handleSave={handleSave} />
      </div>
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
    </Scene>
  )
}

export default FridgeMagnets
