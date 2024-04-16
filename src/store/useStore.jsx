import { create } from "zustand";

export const useStore = create((set) => ({
  username: "",
  loading: false,
  coordinates: "",
  description: "",
  actions: [
    {
      type: "",
      direction: "",
      description: "",
    },
  ],
  data: null,

  fetchData: async (userName) => {
    try {
      const response = await fetch("https://labyrinth.technigo.io/start", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: userName,
        }),
      });
      console.log("DATA", response);
      const newData = await response.json();
      set({ data: newData });
    } catch (error) {
      console.error("Error posting data:", error);
    }
  },

  setUserName: (newUsername) => set({ username: newUsername }),

  //   fetch action
  //https://labyrinth.technigo.io/action
}));
