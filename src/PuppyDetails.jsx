const PuppyDetails = ( {singlePuppy, setSinglePuppy}) => {

  const { name, imageUrl, breed, status, teamId, cohortID } = singlePuppy;

  return (
    <section> 
      <h1>Meet {name}</h1>
      <img src={imageUrl}/>
      <p> Breed: {breed} </p>
      <p> Position: {status} </p>
      <p> Team: {teamId} </p>
      <p> Cohort: {cohortID} </p>
      <button onClick={() => {setSinglePuppy({})}}>Back to the rest of our friends</button>
    </section>
    
  )
}

export default PuppyDetails;