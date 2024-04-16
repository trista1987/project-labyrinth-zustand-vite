import {useStore} from "../store/useStore"; 
import { useState } from "react";

export const Username = () => {
  const [usernameInput, setUsernameInput] = useState('')  //this is local value, not the global one. the hook is for updating username
  const { setUsername, fetchStartData, loading, error} = useStore(); //import variable from globle state
  
  //fetch data by using the fetch funcion from global state
  const handleSubmit = async () => {
    setUsername(usernameInput)
    await fetchStartData (usernameInput)
  }

  if (loading) {
    return <div>Loading...</div>
  }

  if(error) {
    return <div>Error: {error}</div>
  }

  return(
    <>
      <div>
        <h1>THE MAZE</h1>
        <p>Enter the labyrinth on your own risk.</p><br />
        <p>Can you find a way out of the maze?</p>

      </div>
      <form onSubmit={handleSubmit}>
        <label> Enter your username: </label>
      <input type='text' value={usernameInput} onChange={e=>setUsernameInput(e.target.value)} />
      <button type='submit'>Submit</button>
    </form>
    </>
    
  )}
