import { useStore } from "../store/useStore"

import { useState } from "react";


export const StartGame = () => {
  const {
    gameInfo,
    isClicked,
    setToggleClick,
    setActionData,
    fetchActionData,
    loading,
    actionData
  } = useStore();
  // const [showDetails, setShowDetails] = useState(false)
  const [actionInput, setActionInput] = useState("");
  const [isActionShowed, setActionShowed] = useState(false)

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleClick = async () => {
    setActionData(actionInput);
    await fetchActionData(actionInput);
    setActionShowed(true)
  };
  const toggleDetails = () => {
    setToggleClick();
  };

  return (
    <div>
      {!isClicked ? (
        <>
          <button onClick={toggleDetails}>{"Show Direction"}</button> 
          <p>{gameInfo.description}</p>
        </>
      ) : (
        <div>
          <button onClick={toggleDetails}>{"Show Loaction"}</button> 
            {gameInfo.actions?.map((action, index) => (
              <div key={index}>
                  <button onChange={(e) => {
                      setActionShowed(e.target.value)
                    }}onClick={{handleClick}}>{action.direction}</button>
                {isActionShowed && (<p>{actionData?.description}</p>) }
                <p>{action.description}</p>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}







