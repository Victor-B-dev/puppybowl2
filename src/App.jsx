import { useState, useEffect } from 'react'

const App = () => {
  const [allPuppies, setAllPuppies] = useState([])
  const [singlePuppy, setSinglePuppy] = useState ({})
  const [isLoggedIn, setLoggedIn] = useState (false)

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
    
  const getSinglePuppyDetails = async(puppyId) => {
    const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2406-ftb-et-web-ft/players/${puppyId}`);
    const singlePuppy = await response.json();
    setSinglePuppy(singlePuppy)
  }



  return (
    <>
      <nav>
        { isLoggedIn ? 
          <>
          <button>My Account</button>

          <button onClick={()=>{
            setLoggedIn(false);
          }}>Log Out</button>
          </>:

          <button onClick={()=>{
            setLoggedIn(true);
          }}> Log In </button>
        }
      </nav>


      <h1>Meet our Competitors</h1>

      <ul>
      {allPuppies.map((puppy) => {
          return <li key={puppy.id} onClick={()=>{
            getSinglePuppyDetails(puppy.id)
          }}> {puppy.name} <img src={puppy.imageUrl} alt='image of a puppy'/>
          <button>ADOPT NOW</button>
            </li>;
        })}
      </ul>
    </> 
  );
}

export default App
