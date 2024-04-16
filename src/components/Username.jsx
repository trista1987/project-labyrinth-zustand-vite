
// import { useState } from "react"
// import { useEffect } from "react";

// export const Username = () => {
//   const { userName, setUserName, loading, error,fetchData } = useStore();

//   useEffect( () => {
//     fetchData ()
//   }, [fetchData]
//   )

//   if(loading) {
//     return <div>Loading...</div>
//   }

//   if(error) {
//     return <div> Error : {error}</div>
//   }

//   const handleSubmit = e => {
//     e.preventDefault();
//     fetchData()
//  console.log("Username:", userName)
//   }
   
//   const handleChange = (event) => setUserName(event.target.value);

//   return (
//     <>
//       <p>Type in your username</p>
//       <form onSubmit={handleSubmit}>
//         <input type="text" value={userName} onChange={handleChange} />
//         <button type="submit">Enter</button>
//       </form>
//     </>
//   );
// }
// import { useStore } from "../store/useStore";

import {useStore} from "../store/useStore"; // Import the Zustand store
import { useState } from "react";

export const Username = () => {
  const [usernameInput, setUsernameInput] = useState('')
  const { setUsername, fetchData, loading, error} = useStore();

  const handleSubmit = async () => {
    setUsername(usernameInput)
    await fetchData (usernameInput)
  }

  if (loading) {
    return <div>Loading...</div>
  }

  if(error) {
    return <div>Error: {error}</div>
  }

  return(
    <>
      <div>
        <h1>THE MAZE</h1>
        <p>Enter the labyrinth on your own risk.</p><br />
        <p>Can you find a way out of the maze?</p>

      </div>
      <form onSubmit={handleSubmit}>
        <label> Enter your username: </label>
      <input type='text' value={usernameInput} onChange={e=>setUsernameInput(e.target.value)} />
      <button type='submit'>Submit</button>
    </form>
    </>
    
  )



  // useEffect(() => {
  //   setUsername("YourUniqueUsername"); // Set your desired username
  // }, [setUsername]); // Call setUsername only once when the component mounts

//   return (
//     <div>
//       <p>{description}</p>
//       <ul>
//         {actions.map((action, index) => (
//           <li key={index}>
//             <button>{action.description}</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// 
};



