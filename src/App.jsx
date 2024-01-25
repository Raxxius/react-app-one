import { useEffect, useState } from 'react'
import './App.css'

function App() {
  // State function
  const [colour, setColour] = useState("green")

  console.log("App one loading")
  console.log(sessionStorage)
  console.log(colour)
  setColour(sessionStorage.currentColour)
  // Setup a listener for Session Storage changes
  useEffect(() => {
    const handleStorageChange = () => {
        setColour(sessionStorage.currentColour);
    };

    // Event listener
    window.addEventListener('storage', handleStorageChange);
    console.log("event listener engaged")

    // Cleanup
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  // Core return 
  return (
    <div style={{ backgroundColor: colour, width: '100px', height: '100px' }}></div>
  )

}



export default App
