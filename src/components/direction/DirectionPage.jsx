// import { useRef, useEffect, useState} from "react"
import { useStore } from "../../store/useStore"


export const DirectionPage = () => {
  const {gameInfo} = useStore()

  return (
    <div>
        <button>Show Location</button> 
        <p>{gameInfo.actions[0].description}</p>
        <button>Go {gameInfo.actions[0].direction}</button>
    </div>
  )
}

//data is correct, but haven't show on the page by click the button in startGame component