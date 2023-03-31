import FridgeMagnets from './components/FridgeMagnets'
import GlobalStyles from './components/styles/GlobalStyles'
import './App.css'
import fridgeWhite from './images/fridgeWhite2.png'

function App() {
  return (
    <div className="border">
      <GlobalStyles>
        <img src={fridgeWhite} className="background" />
        <FridgeMagnets />
      </GlobalStyles>
    </div>
  )
}

export default App
