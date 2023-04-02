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
    console.log(
      position.clientX - position.offsetX,
      position.clientY - position.offsetY
    )
    //add new position dragWord, subtract offset to get correct position
    const updatedWords = words.map(word => {
      if (word === dragWord) {
        return {
          ...word,
          position: {
            x: position.clientX - position.offsetX,
            y: position.clientY - position.offsetY
          }
        }
      }
      return word
    })
    setWords(updatedWords)
  }

  //save words to local storage
  const handleSave = () => {
    localStorage.setItem('words', JSON.stringify(words))
    console.log('saved', words)
  }

  const handleReset = () => {
    console.log('reset')
    //not working
    setWords(wordlist)
  }

  // console.log(words)
  return (
    <Scene>
      <div className="relative">
        <Header handleSave={handleSave} handleReset={handleReset} />
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
