import React from 'react'
import HeaderStyles from './styles/HeaderStyles'

const Header = ({
  handleSave,
  handleReset,
  setInputValue,
  inputValue,
  handleAdd
}) => {
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
            label="new word"
            placeholder="New"
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
