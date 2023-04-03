import FridgeMagnets from './components/FridgeMagnets'
import GlobalStyles from './components/styles/GlobalStyles'
import fridgeWhite from './images/fridgeWhite2.png'
import './App.css'

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
