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
  const [currentLocation, setCurrentLocation] = useState(null) // Track location

  const handleClick = async (actionDirection) => {
    await setActionData(actionDirection)
    await fetchActionData()
    console.log("actionData:", actionData)
    if (actionData?.description) {
      // Update location if description exists
      setCurrentLocation({
        coordinates: actionData.coordinates,
        description: actionData.description,
      })
    }
    setShowDirections(false) // Reset showDirections after action click
  }

  const toggleDetails = () => {
    setToggleClick()
    setShowDirections(!showDirections)
  }

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div className='game-container'>
      {!isClicked && !showDirections ? ( // Reset showDirections on initial state */}
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
          {showDirections && ( // Show "Available Directions" text always when true */}
            <p>Available Directions:</p>
          )}
          {showDirections &&
            actionData && ( // Show direction buttons only when clicked */}
              <div>
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
          {isClicked &&
            !showDirections && ( // Show location description based on currentLocation */}
              <p>
                {currentLocation?.description &&
                  `Current Location: ${currentLocation.coordinates} - ${currentLocation.description}`}
              </p>
            )}
        </div>
      )}
    </div>
  )
}
