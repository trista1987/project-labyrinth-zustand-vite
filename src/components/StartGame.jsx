import { useStore } from "../store/useStore"
import { useState } from "react"

export const StartGame = () => {
  const {
    gameInfo,
    isClicked,
    setToggleClick,
    setActionData,
    fetchActionData,
    loading,
    actionData,
  } = useStore()

  const [showDirections, setShowDirections] = useState(false)

  const handleClick = async (actionDirection) => {
    await setActionData(actionDirection)
    await fetchActionData()
  }

  const toggleDetails = () => {
    setToggleClick()
    setShowDirections(!showDirections) // Toggle showDirections state
  }

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div className='start-game-container'>
      {!isClicked ? (
        <>
          <button onClick={toggleDetails}>
            {isClicked ? "Show Location" : "Show Direction"}
          </button>
          <p>{gameInfo?.description}</p>
        </>
      ) : (
        <div>
          <button onClick={toggleDetails}>
            {isClicked ? "Show Location" : "Show Direction"}
          </button>
          {showDirections && (
            <div>
              <p>Available Directions:</p>
              {gameInfo?.actions?.map((action, index) => (
                <div key={index}>
                  <button onClick={() => handleClick(action.direction)}>
                    Go {action.direction}
                  </button>
                  <p>{action.description}</p>
                </div>
              ))}
            </div>
          )}
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
      )}
    </div>
  )
}
