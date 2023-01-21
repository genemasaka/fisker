//import useState and useEffect from React library
import { useState, useEffect } from 'react'
//import bootstrap for css styling
import 'bootstrap/dist/css/bootstrap.min.css'
//import App.css for styling
import './App.css';

function App() {
 const url = 
  function Fisker({imageUrl}) {
    const [image, setImage] = useState(null)
    useEffect(() => {
      async function getImage() {
        const response = await fetch(imageUrl)
        const blob = await response.blob()
        const img = URL.createObjectURL(blob)
        setImage(img)
      }
      getImage()
    }, [imageUrl])

    return (
      <>
      <div class="main">
      <div class="card">
        <img src={image} class="card-img-top" alt="..." />
      <div class="card-body">
        <p class="card-text">Fisker Ocean</p>
      </div>
      </div>
      </div>
      </>
    )
    
    }
  // Declare a state variable called width with the value of the current window width
  const [width, setWidth] = useState(window.innerWidth)
  // useEffect hook allows to synchronize a component with an external system
  // it takes a function and an array of dependencies as arguments
  useEffect(() => {
    // function that updates the width state variable with the current window width
    function handleResize() {
      setWidth(window.innerWidth);
    }
    // add an event listener to the window object that listens to the 'resize' event
    document.addEventListener('resize', handleResize)
    // The function that useEffect returns is executed when the component unmounts 
    // it allows to remove the event listener
    return () => 
    window.removeEventListener('resize', handleResize)
    // width state variable is the only dependency of this useEffect, so it will run only when the width changes
  }, [width])
  
  return (
    <>
    <div class="main">
      <div class="card">
        <div class="card-header">
         <h3>Window Resize Tracker</h3>
        </div>
        <div class="card-body mt-5">
            <h5>The current width of this window is:</h5>
            <p>{width}px</p>
        </div>
      </div>
    </div>
    <Fisker imageUrl={url} />
    </>
  );
}

export default App;
