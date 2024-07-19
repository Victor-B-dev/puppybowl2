import { useState, useEffect } from 'react';

const PuppyList = ({ isLoggedIn, setSinglePuppy }) => {
  
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

  const getSinglePuppyDetails = async(puppyId) => {
    const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2406-ftb-et-web-ft/players/${puppyId}`);
    const result = await response.json();
    const singlePuppy = result.data.player
    setSinglePuppy(singlePuppy)
  }

  return (
    <ul>   
      {
        allPuppies.map((puppy) => {
          return (
            <li key={puppy.id} onClick={()=>{getSinglePuppyDetails(puppy.id)}}>
            {puppy.name} <img src={puppy.imageUrl} alt='image of a puppy'/>
            { isLoggedIn ?
              <button> Hire Now </button> :
              null
            }
          </li>
        )
      })
    }
    </ul>
  )
}

export default PuppyList