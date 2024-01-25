import { useEffect, useState } from 'react'
import './App.css'

function App() {
  // State function
  const [colour, setColours] = useState("red")

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
