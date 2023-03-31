import React from 'react'
import HeaderStyles from './styles/HeaderStyles'

const Header = ({ words, handleSave }) => {
  return (
    <HeaderStyles>
      <h1>Fridge Magnets</h1>
      <h5>Drag & Drop Magnetic Words On The Fridge</h5>
      <div className="">
        <button>Reset</button>
        <button>Add</button>
        <button onClick={handleSave}>Save</button>
      </div>
    </HeaderStyles>
  )
}

export default Header
