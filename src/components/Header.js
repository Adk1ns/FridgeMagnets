import React from 'react'
import HeaderStyles from './styles/HeaderStyles'

const Header = ({
  handleSave,
  handleReset,
  setInputValue,
  inputValue,
  handleAdd
}) => {
  //if user presses the enter key, add the word to the fridge
  const handleEnter = e => {
    if (e.key === 'Enter') {
      handleAdd()
    }
  }

  //add event listener to listen for enter key
  window.addEventListener('keydown', handleEnter)

  return (
    <HeaderStyles>
      <h1>Fridge Magnets</h1>
      <h5>Drag & Drop Magnetic Words On The Fridge</h5>
      <div className="">
        <button onClick={handleSave}>Save</button>
        <button onClick={handleReset}>Reset</button>
        <>
          <input
            type="text"
            label="Add"
            placeholder="Add"
            onChange={e => setInputValue(e.target.value)}
            maxLength={13}
            value={inputValue}
          />
          <button onClick={handleAdd}>+</button>
        </>
      </div>
    </HeaderStyles>
  )
}

export default Header
