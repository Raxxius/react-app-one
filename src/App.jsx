import { useEffect, useState } from 'react'
import './App.css'

function App() {
  // State function
  const [colour, setColour] = useState("green")

  console.log("App one loading")
  console.log(sessionStorage.currentColour)
  console.log(colour)

  // Setup a listener for Session Storage changes
  useEffect(() => {
    setColour(sessionStorage.currentColour)
    const handleStorageChange = () => {
        setColour(sessionStorage.currentColour);
        console.log("storage changed")
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
