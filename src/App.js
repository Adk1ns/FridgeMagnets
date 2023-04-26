import FridgeMagnets from './components/FridgeMagnets'
import GlobalStyles from './components/styles/GlobalStyles'
import fridgeWhite from './images/fridgeWhite2.png'
import React from 'react'
import fridgeWhite3 from './images/fridgeWhite3.png'
import Warning from './components/Warning'
import './App.css'

function App() {
  const viewportWidth =
    window.innerWidth || document.documentElement.clientWidth

  return (
    <div className="border">
      {viewportWidth > 400 && (
        <GlobalStyles>
          {viewportWidth > 800 ? (
            <img src={fridgeWhite} className="background" />
          ) : (
            <img src={fridgeWhite3} className="background" />
          )}
          <FridgeMagnets />
        </GlobalStyles>
      )}
      {viewportWidth <= 400 && <Warning />}
    </div>
  )
}

export default App
