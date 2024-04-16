import { create } from "zustand";

export const useStore = create (set => ({
  // coordinateds: "",
  // description: "",
  // actions: [],
  username: "",
  loading: false,
  error: null,
  gameInfo : {},

  setUsername: (username) => ({username}),
  setGameInfo : (data) => set({gameData:data}),

  fetchData: async (username) => {
    set({loading:true})
    try{
      const res = await fetch('https://labyrinth.technigo.io/start', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({username})
      });
      if(!res.ok){
        throw new Error ("Fetching data is not working")
      }
      const data = await res.json();
      console.log(data)
      // set({username,coordinates: data.coordinates, description: data.description, actions: data.actions })
      set({username, gameInfo: data})
    } catch (error) {
      console.error('Error:', error)
      set({error: error})
    } finally{
      set({loading: false})
    }
},
// setUserName: (newUsername) => set({ userName: newUsername }),
}
))

// const useStore = create((set) => ({
//   coordinates: "",
//   description: "",
//   actions: [],
//   setUsername: async (username) => {
//     try {
//       const response = await fetch('https://labyrinth.technigo.io/start', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ username })
//       });

//       const data = await response.json();
//       set({ coordinates: data.coordinates, description: data.description, actions: data.actions });
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   }
// }));

// export default useStore;






// }))


// export const useStore = create((set) => ({
//   loading: false,
//   error: null,
//   userData: null,

//   fetchData: async (username) => {
//     try {
//       set({ loading: true });

//       const response = await fetch("https://labyrinth.technigo.io/start", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           username: username,
//         }),
//       });

//       if (!response.ok) {
//         throw new Error("Failed to fetch data");
//       }

//       const responseData = await response.json();

//       // Extract relevant data from response
//       const { coordinates, description, actions } = responseData;

//       // Update application state with extracted data
//       set({ coordinates, description, actions, loading: false });
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       set({ error: error.message, loading: false });
//     }
//   },

//   setUserName: (newUsername) => set({ userName: newUsername }),
// }));
























// export const useStore = create((set) => ({
//   username: null,
//   loading: false,
//   error: null,
//   userData: null,

  // fetchData: async (userName) => {
  //   try {
  //     const response = await fetch("https://labyrinth.technigo.io/start", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         username: userName,
  //       }),
  //     });

  //     if(!response.ok) {
  //       throw new Error("Failed to fetch data")
  //     }
  //     const data = await response.json()
  //     console.log(data)
  //     set({userData: data})
  //     console.log("DATA", response);

  //   } catch (error) {
  //     console.error("Error posting data:", error);
  //     set({error: error})
  //   } finally {
  //     set({loading: false})
  //   }
  // },

  // setUserName: (newUsername) => set({ username: newUsername }),

  //   fetch action
  //https://labyrinth.technigo.io/action
// }));
