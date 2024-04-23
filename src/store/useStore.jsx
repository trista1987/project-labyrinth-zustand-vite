import { create } from "zustand"

export const useStore = create((set, get) => ({
  //initial setting
  username: null,
  loading: false,
  error: null,
  actionData: null,


  //fetch data for starting, post username and get data by posting username
  fetchStartData: async (username) => {
    set({ loading: true })
    try {
      const res = await fetch("https://labyrinth.technigo.io/start", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username }),
      })
      if (!res.ok) {
        throw new Error("Fetching data is not working")
      }
      const data = await res.json()
      set({ username, actionData:data })
    } catch (error) {
      console.error("Error:", error)
      set({ error: error })
    } finally {
      set({ loading: false })
    }
  },

  // fetch data for action
  fetchActionData: async (direction) => {
    const username = get().username
    set({ loading: true })
    try {
      const res = await fetch("https://labyrinth.technigo.io/action", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          type: "move",
          direction: direction, // Pass the selected direction
        }),
      })
      if (!res.ok) {
        throw new Error("Fetching data is not working")
      }
      const newData = await res.json()
      set({ actionData: newData })
    } catch (error) {
      console.error("Error:", error)
      set({ error: error })
    } finally {
      set({ loading: false })
    }
  },


  startGame: async(username) => {
    await get().fetchStartData(username)}
}))
