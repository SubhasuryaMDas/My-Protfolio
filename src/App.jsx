import React, { useEffect, useState } from 'react'
// https://randomuser.me/api/
import axios from "axios";



const App = () => {

  const [image ,setImage] = useState(null);
  const [Name, setName] =useState(null);
  useEffect(()=>{
    randomUser();
  },[])
  

  async function randomUser(){
    const result = await axios.get("https://randomuser.me/api/");
 
    console.log(result.data.results);
    setImage(result.data.results[0].picture.large);
    setName(result.data.results[0].name.first);
  
  }
  return (
<>
{/* <button onClick={randomUser}>Get User </button> */}
<img src={image} alt="" />
<h1>{Name}</h1>
</>
  )
}

export default App