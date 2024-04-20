import { useStore } from "../store/useStore"

export const StartGame = () => {
  const { gameInfo, setActionData, fetchActionData, loading, actionData } =
    useStore()

  const handleClick = async (actionDirection) => {
    await setActionData(actionDirection)
    await fetchActionData()
  }

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div className='start-game-container'>
      <p>{actionData ? actionData.description : gameInfo?.description}</p>
      {/* If there is actionData, show the description */}
      <div className='direction-container'>
        <p>Available Directions:</p>
        {/* If there is no actionData, show gameinfo */}
        {!actionData &&
          gameInfo?.actions?.map((action, index) => (
            <div key={index}>
              <p>{action.description}</p>
              <button onClick={() => handleClick(action.direction)}>
                Go {action.direction}
              </button>
            </div>
          ))}
      </div>
      {/* Descriptions are now displayed consistently here */}
      {actionData?.actions?.map((action, index) => (
        <div key={index}>
          <p>{action.description}</p>
          <button onClick={() => handleClick(action.direction)}>
            Go {action.direction}
          </button>
        </div>
      ))}
    </div>
  )
}
