import { create } from "zustand";

export const useStore = create (set => ({
  //initial setting
  username: null,
  loading: false,
  error: null,
  gameInfo : null,
  //fetch data, post username and get data by posting username
  fetchData: async (username) => {
    set({loading:true})
    try{
      const res = await fetch('https://labyrinth.technigo.io/start', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({username}) //this username will exist in the data we post, like the one { username: "Technigostudent"} we put in the body in postman 
      });
      if(!res.ok){
        throw new Error ("Fetching data is not working")
      }
      //get data from API, after user enter username, we get this data from API
      const data = await res.json();
      console.log(data)
      set({username, gameInfo: data}) // set is to update data we store in different components, so we don't need to fetch all the time. 
    } catch (error) {
      console.error('Error:', error)
      set({error: error})
    } finally{
      set({loading: false})
    }
},

  //for updating 
  setUsername: (username) => set({username}),
  setGameInfo : (data) => set({gameData:data}),
}
))