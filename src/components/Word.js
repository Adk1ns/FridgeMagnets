import React from 'react'
import WordStyles from './styles/WordStyles'

const Word = ({ text, id }) => {
  const [width, setWidth] = React.useState(4)

  React.useEffect(() => {
    setWidth(text.length * 10)
  }, [text])

  return (
    <div>
      <WordStyles wide={width}>{text}</WordStyles>
    </div>
  )
}

export default Word
