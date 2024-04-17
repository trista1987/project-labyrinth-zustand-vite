import { create } from "zustand";

export const useStore = create ((set, get) => ({
  //initial setting
  username: null,
  loading: false,
  error: null,
  gameInfo : { },
  actionData: null,
  direction: null,
  isClicked: false,


  //fetch data for starting, post username and get data by posting username
  fetchStartData: async (username) => {
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
      console.log(data.actions[0].description)
      set({username, gameInfo: data}) // set is to update data we store in different components, so we don't need to fetch all the time. 
    } catch (error) {
      console.error('Error:', error)
      set({error: error})
    } finally{
      set({loading: false})
    }
},

// fetch data for action
fetchActionData: async(type, direction) => {
  const {username} = get()
  set({loading: true})
  try{
    const res = await fetch('https://labyrinth.technigo.io/action', {
      method:'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({username, type, direction})
    });
    if(!res.ok) {
      throw new Error ("Fetching data is not working")
    }
    const newData = await res.json();
    console.log(newData)
    set({actionData: newData})
  } catch(error) {
    console.error('Error:', error)
    set({error: error})
  } finally{
    set({loading: false})
  }
},


  //for updating 
  setUsername: (username) => set({username}),
  setGameInfo : (data) => set({gameInfo:data}),
  setActionData: (newData) => set({actionData:newData}),
  setToggleClick: () => set((state) => ({isClicked: !state.isClicked}))

}
))