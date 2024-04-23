import { useStore } from "../store/useStore"
import { useState } from "react"

export const StartGame = () => {
  const {

    fetchActionData,
    loading,
    actionData,
  } = useStore()

  const [showDirections, setShowDirections] = useState(false)

  const handleClick = async (direction) => {
  
    await fetchActionData(direction)
    setShowDirections(false)
  }

  const toggleDetails = () => {
    setShowDirections(!showDirections) // Toggle showDirections state
  }

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div className='start-game-container'>
      startGame
      <button onClick={toggleDetails}>
            {showDirections ? "Show Location" : "Show Direction"}
          </button>
           <p>{actionData?.description}</p>
      
        <div>
          
          {/* Descriptions are now displayed consistently here */}
          {actionData?.actions?.map((action, index) => (
            <div key={index}>
              <button onClick={() => handleClick(action.direction)}>
                Go {action.direction}
              </button>
              <p>{action.description}</p>
            </div>
          ))}
        </div>
      
    </div>
  )
}
