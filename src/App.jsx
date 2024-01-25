import { useEffect, useState } from 'react'
import './App.css'

function App() {
  // State function
  const [colour, setColours] = useState("green")

  console.log("App one loading")
  console.log(sessionStorage)
  console.log(colour)
  // Setup a listener for Session Storage changes
  useEffect(() => {
    const handleStorageChange = () => {
        setColours(sessionStorage.currentColour);
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
