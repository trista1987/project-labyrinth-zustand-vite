import { useStore } from "../store/useStore"
import { useState } from "react"
import "../styles/Username.css"
import startImg from "/maze-entrance.jpg"

export const Username = () => {
  const [usernameInput, setUsernameInput] = useState("") //this is local value, not the global one. the hook is for updating username
  const { setUsername, fetchStartData, loading, error } = useStore() //import variable from globle state

  //fetch data by using the fetch funcion from global state
  const handleSubmit = async () => {
    setUsername(usernameInput)
    await fetchStartData(usernameInput)
  }

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }
  console.log("background image:", startImg)
  return (
    <div
      className='start-background'
      style={{
        backgroundImage: `url(${startImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}>
      <div className='main-container'>
        <h1>THE MAZE</h1>
        <p>Enter the labyrinth on your own risk.</p>
        <p>Can you find a way out of the maze?</p>
        <br />
      </div>
      <form onSubmit={handleSubmit}>
        <label> Enter your username: </label>
        <input
          type='text'
          value={usernameInput}
          onChange={(e) => setUsernameInput(e.target.value)}
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
