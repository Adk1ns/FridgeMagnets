import React from 'react'
import HeaderStyles from './styles/HeaderStyles'
import wordlist from '../data/wordlist'

const Header = ({ handleSave, handleReset }) => {
  const [inputValue, setInputValue] = React.useState('')

  console.log(inputValue)

  return (
    <HeaderStyles>
      <h1>Fridge Magnets</h1>
      <h5>Drag & Drop Magnetic Words On The Fridge</h5>
      <div className="">
        <button onClick={handleSave}>Save</button>
        <button onClick={handleReset}>Reset</button>
        <input
          type="text"
          label="Add"
          placeholder="Add"
          onChange={e => setInputValue(e.target.value)}
          maxLength={13}
        />
      </div>
    </HeaderStyles>
  )
}

export default Header
