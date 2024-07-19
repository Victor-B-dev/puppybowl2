import { useState, useEffect } from 'react'

const App = () => {
  const [allPuppies, setAllPuppies] = useState([])

  useEffect(() => {
     const fetchPuppies = async() => {
      try {
        const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2406-ftb-et-web-ft/players`)
        const result = await response.json();
        const puppies = result.data.players;
        setAllPuppies(puppies);
      } catch (error) {
        console.log(error);
      }
    }
    fetchPuppies();
    }, [])

    
  return (
    <>
      <nav>
        <button>Log In</button>
        <button>My Account</button>

      </nav>
      <h1>Meet our Competitors</h1>
      <ul>
      {allPuppies.map((puppy) => {
          return <li key={puppy.id}> {puppy.name} 
          <button>ADOPT NOW</button>
            </li>;
        })}
        </ul>
    </> 
  );
}

export default App
