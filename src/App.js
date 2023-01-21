//import useState and useEffect from React library
import { useState, useEffect } from 'react'
//import bootstrap for css styling
import 'bootstrap/dist/css/bootstrap.min.css'
//import App.css for styling
import './App.css';

function App() {
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
    </>
  );
}

export default App;
