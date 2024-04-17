// import { useStore } from "../../store/useStore"


// export const DirectionPage = () => {
//   const {gameInfo} = useStore()

//   return (
//     <div>
//         <button>Show Location</button> 
//         <p>{gameInfo.actions[0].description}</p>
//         <button>Go {gameInfo.actions[0].direction}</button>
//     </div>
//   )
// }

export const DirectionForm = ({description}) => {
    return (
        <div>
            <p>{description}</p>
        </div>
    )
}
