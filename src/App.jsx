import { useState } from 'react'
import PuppyDetails from "./PuppyDetails";
import PuppyList from "./PuppyList";

const App = () => {
  const [singlePuppy, setSinglePuppy] = useState ({})
  const [isLoggedIn, setLoggedIn] = useState (false)

  return (
    <>
      <nav>
        { isLoggedIn ? 
          <>
          <button>My Account</button>
          <button onClick={()=>{setLoggedIn(false)}}> Log Out </button>
          </>:
          <button onClick={()=>{setLoggedIn(true)}}> Log In </button>
        }
      </nav>

      <h1>Meet our Competitors</h1>

      {
        singlePuppy.name ?
          <PuppyDetails singlePuppy={singlePuppy} setSinglePuppy={setSinglePuppy}/>:
          <PuppyList isLoggedIn={isLoggedIn} setSinglePuppy={setSinglePuppy}/>
      }
      
    </> 
  );
}

export default App
