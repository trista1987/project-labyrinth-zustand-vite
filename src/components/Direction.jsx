// import {useStore} from '../store/useStore'

// export const Direction = () => {
//     const {gameInfo, fetchActionData, isClicked, setToggleClick} = useStore()

//     const handleDirection = (action) => {
//         fetchActionData(action.type, action.direction)
//         setToggleClick(!isClicked)
//     }

//     return (
//         <div>
//             {gameInfo.actions && gameInfo.actions.map((action, index) => (
//                 <div key={index}>
//                    {action.direction === 'North' && (
//                     <button onClick={()=> handleDirection(action)}></button>)}
//                 </div>
//             ))}
//             {gameInfo.actions && gameInfo.actions.map((action, index) => (
//                 <div key={index}>
//                    {action.direction === 'South' && (
//                     <button onClick={()=> handleDirection(action)}></button>)}
//                 </div>
//             ))}
//             {gameInfo.actions && gameInfo.actions.map((action, index) => (
//                 <div key={index}>
//                    {action.direction === 'East' && (
//                     <button onClick={()=> handleDirection(action)}></button>)}
//                 </div>
//             ))}
//             {gameInfo.actions && gameInfo.actions.map((action, index) => (
//                 <div key={index}>
//                    {action.direction === 'West' && (
//                     <button onClick={()=> handleDirection(action)}></button>)}
//                     <p>{gameInfo.description}</p>
//                 </div>
//             ))}
//         </div>
//     )
// }