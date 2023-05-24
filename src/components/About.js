import React from 'react'
import AboutStyles from './styles/AboutStyles'
import html2canvas from 'html2canvas'

const About = () => {
  // image capture only works correctly when another window is open, I'm not sure why, it looks faded
  //FIX: add a button to open a new window, then take the screenshot
  //write a better fix:
  // 1. add a button to open a new window
  // 2. take the screenshot
  // 3. close the window
  // 4. display the screenshot in the About component
  // 5. add a button to download the screenshot
  // 6. add a button to close the About component

  // function downloadScreenshot() {
  //   const targetElement = document.documentElement

  //   window.open()

  //   // Introduce a delay before capturing the screenshot
  //   setTimeout(() => {
  //     html2canvas(targetElement, {
  //       windowWidth: window.innerWidth,
  //       windowHeight: window.innerHeight,
  //       scale: window.devicePixelRatio,
  //       backgroundColor: '#000', // Set desired background color here
  //       useCORS: true
  //     }).then(function (canvas) {
  //       // Get the desired crop dimensions
  //       const cropX = 0
  //       const cropY = 20
  //       const cropWidth = canvas.width
  //       const cropHeight = canvas.height / 2

  //       // Create a new canvas to hold the cropped image
  //       const croppedCanvas = document.createElement('canvas')
  //       croppedCanvas.width = cropWidth
  //       croppedCanvas.height = cropHeight

  //       // Crop the image
  //       const ctx = croppedCanvas.getContext('2d')
  //       ctx.drawImage(
  //         canvas,
  //         cropX,
  //         cropY,
  //         cropWidth,
  //         cropHeight,
  //         0,
  //         0,
  //         cropWidth,
  //         cropHeight
  //       )

  //       // Convert cropped canvas to image data URL
  //       const dataURL = croppedCanvas.toDataURL('image/png')

  //       // Create a temporary link element
  //       const link = document.createElement('a')
  //       link.href = dataURL
  //       link.download = 'screenshot.png'

  //       // Trigger the download
  //       link.click()
  //     })
  //   }, 10) // Adjust the delay time as needed (in milliseconds)
  // }

  // Usage
  // downloadScreenshot()

  return (
    <AboutStyles>
      <h2>Fridge Magnets</h2>
      <h4>
        Experience the magic of fridge magnets on your computer. Drag and drop
        words to create your own poetry.
      </h4>
      <h4>
        For custom web products just like this one contact:{' '}
        <span>jeredkins@gmail.com</span>{' '}
      </h4>
      <h4>
        Or visit{' '}
        <a href="https://adk1ns.com/" target="_blank" rel="noreferrer">
          <span>Adk1ns.com</span>
        </a>
      </h4>
      {/* <button onClick={downloadScreenshot}>capture</button> */}
    </AboutStyles>
  )
}

export default About
