import { useEffect, useState } from 'react'
import './App.css'

function App() {
  // State function
  const [colour, setColours] = useState("red")

  console.log("App one loading")
  // Setup a listener for Session Storage changes
  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === 'currentColour') {
        setColours(event.newValue);
        console.log('Session storage changed:', event.newValue);
      }
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
