import { create } from "zustand"

export const useStore = create((set, get) => ({
  //initial setting
  username: null,
  loading: false,
  error: null,
  gameInfo: {},
  actionData: null,
  isClicked: false,

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
      set({ username, gameInfo: data })
    } catch (error) {
      console.error("Error:", error)
      set({ error: error })
    } finally {
      set({ loading: false })
    }
  },

  // fetch data for action
  fetchActionData: async () => {
    const username = get().username
    const direction = get().actionData // Get the selected direction
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
      set({ username, actionData: newData })
    } catch (error) {
      console.error("Error:", error)
      set({ error: error })
    } finally {
      set({ loading: false })
    }
  },

  setUsername: (username) => set({ username }),
  setGameInfo: (data) => set({ gameInfo: data }),
  setToggleClick: () => {
    console.log("clicked ") //just testing
    set((state) => ({ isClicked: !state.isClicked }))
  },
  setActionData: (actionDirection) => set({ actionData: actionDirection }), // Set actionData with the direction
}))
