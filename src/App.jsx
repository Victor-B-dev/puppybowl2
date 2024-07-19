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
    const result = await response.json();
    const singlePuppy = result.data.player
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


      { singlePuppy.name ?
        <section> 
          <h1>Meet {singlePuppy.name}</h1>
          <img src={singlePuppy.imageUrl}/>
          <p> Breed: {singlePuppy.breed} </p>
          <p> Position: {singlePuppy.status} </p>
          <p> Team: {singlePuppy.teamId} </p>
          <p> Cohort: {singlePuppy.cohortID} </p>
          <button onClick={() => {setSinglePuppy({})}}>Back to the rest of our friends</button>
        </section> :
      <ul>
      <h1>Meet our Competitors</h1>

      {allPuppies.map((puppy) => {
          return <li key={puppy.id} onClick={()=>{
            getSinglePuppyDetails(puppy.id)
          }}> {puppy.name} <img src={puppy.imageUrl} alt='image of a puppy'/>
              {
                isLoggedIn ?
                  <button>Hire Now</button> :
                  null
              }
            </li>;
        })}
      </ul>
    }
    </> 
  );
}

export default App
