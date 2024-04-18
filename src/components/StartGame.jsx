import { useStore } from "../store/useStore"
import { Button } from "./Button"
// import { DirectionForm } from "./DirectionForm"
// import { useState } from "react"
// import { Link } from "react-router-dom";
// import { DirectionForm } from "./DirectionForm"
// import { Button } from "./Button"
import { useState } from "react";

export const StartGame = () => {
  // const {gameInfo, isChecked, setToggleClick, setGameInfo} = useStore()
  const {
    gameInfo,
    isClicked,
    setToggleClick,
    setActionData,
    fetchActionData,
    loading,
  } = useStore();
  // const [showDetails, setShowDetails] = useState(false)
  const [actionInput, setActionInput] = useState("");

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleClick = async () => {
    setActionData(actionInput);
    await fetchActionData(actionInput);
  };
  const toggleDetails = (isClicked) => {
    setToggleClick(isClicked);
  };

  return (
    <div>
      {/* <Link to="/location" >Show Direction</Link> */}

      {/* <Button buttonName={'Show Direction'} clickFunction={setToggleClick} /> */}

      {/* <DirectionForm description={gameInfo.description} /> */}

      {!isClicked ? (
        <>
          {/* <button onClick={toggleDetails}>Show Direction</button> */}
          <Button clickFunction={toggleDetails} buttonName={"Show Direction"} />
          <p>{gameInfo.description}</p>
        </>
      ) : (
        <div>
          {/* <button>Show Location</button>  */}
          <Button buttonName={"Show Loaction"} />

          <ul>
            {gameInfo.actions?.map((action, index) => (
              <div key={index}>
                <li>
                  {/* <button>{action.direction}</button> */}
                  <Button
                    buttonName={action.direction}
                    clickFunction={handleClick}
                    onChange={(e) => {
                      setActionInput(e.target.value);
                    }}
                  />
                </li>
                <li>{action.description}</li>
              </div>
            ))}
          </ul>
          {/* <button>Go {gameInfo.actions[0].direction}</button> */}
        </div>
      )}
    </div>
  );
}





    

    


//   const handleToggle = () => {
//     if ( !isChecked) {
//         setGameInfo(setGameInfo)
//     }
//   }



   
//if press show direction, will jump to another page which will show the ditail of actions

