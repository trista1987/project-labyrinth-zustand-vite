import Lottie from "lottie-react"
import { useStore } from "../store/useStore"
import { useState } from "react"
import "../styles/Username.css"
import Loading from "../assets/loading.json"

export const Username = () => {
  const [usernameInput, setUsernameInput] = useState("") //this is local value, not the global one. the hook is for updating username
  const { setUsername, fetchStartData, loading, error } = useStore() //import variable from globle state

  //fetch data by using the fetch funcion from global state
  const handleSubmit = async () => {
    setUsername(usernameInput)
    await fetchStartData(usernameInput)
  }

  if (loading) {
    return (
      <Lottie
        animationData={Loading}
        loop={true}
      />
    )
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <div className='start-background'>
      <div className='main-container'>
        <h1>THE MAZE</h1>
        <p>Can you find a way out of the maze?</p>
        <p>Enter the labyrinth at your own risk.</p>
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
