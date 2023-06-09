import React from 'react'
import Draggable from 'react-draggable'
import Scene from './Scene'
import Word from './Word'
import Header from './Header'
import wordlist from '../data/wordlist'
import About from './About'

const FridgeMagnets = () => {
  const [dragWord, setDragWord] = React.useState('')
  const [words, setWords] = React.useState([])
  const [inputValue, setInputValue] = React.useState('')
  const [about, toggleAbout] = React.useState(false)

  //set bounds for magnets
  //update bounds on window resize, small screen have wider bounds
  const viewportWidth = window.innerWidth
  let bounds

  if (viewportWidth < 968) {
    bounds = {
      left: viewportWidth * 0.025,
      top: 15,
      right: viewportWidth * 0.9,
      bottom: viewportWidth * 1.5
    }
  } else {
    bounds = {
      left: viewportWidth * 0.025,
      top: 15,
      right: viewportWidth * 0.44,
      bottom: viewportWidth
    }
  }

  //check if there are words in local storage
  React.useEffect(() => {
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
  }

  //reset words to original state
  const handleReset = () => {
    const resetWords = words.map(word => {
      return {
        ...word,
        position: {
          x: 0,
          y: 0
        }
      }
    })
    setWords(resetWords)

    localStorage.removeItem('words')
    window.location.reload()
  }

  //add new word to words array
  const handleAdd = e => {
    if (e.key === 'Enter') {
      const newWord = {
        text: inputValue,
        position: {
          x: 10,
          y: 10
        },
        id: Math.floor(Math.random() * 100000)
      }
      setWords([...words, newWord])
      setInputValue('')
    }
  }

  //delete word from words array
  const handleDelete = e => {
    if (e.key === 'Delete') {
      words.map(word => {
        if (word === dragWord) {
          const updatedWords = words.filter(word => word !== dragWord)
          setWords(updatedWords)
        }
      })
    }
  }

  //add event listeners for delete and add
  React.useEffect(() => {
    window.addEventListener('keydown', handleDelete)
    return () => {
      window.removeEventListener('keydown', handleDelete)
    }
  }, [dragWord])

  React.useEffect(() => {
    window.addEventListener('keydown', handleAdd)
    return () => {
      window.removeEventListener('keydown', handleAdd)
    }
  }, [inputValue])

  return (
    <Scene>
      <Header
        handleSave={handleSave}
        handleReset={handleReset}
        setInputValue={setInputValue}
        inputValue={inputValue}
      />
      <h3 className="about" onClick={() => toggleAbout(!about)}>
        ?
      </h3>
      {about && <About />}
      {words.map((word, index, id) => {
        return (
          <Draggable
            key={index}
            onDrag={() => handleDrag(word)}
            defaultPosition={word.position}
            bounds={bounds}
            onStop={position => endPosition(position)}
          >
            <div onClick={() => setDragWord(word)}>
              <Word text={word.text} id={id} />
            </div>
          </Draggable>
        )
      })}
    </Scene>
  )
}

export default FridgeMagnets
