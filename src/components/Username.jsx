import { useStore } from "../store/useStore.jsx";
// import { useState } from "react"

export const Username = () => {
  const { userName, setUserName, fetchData } = useStore();

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log("Username:", userName);

    try {
      await fetchData(userName)
    } catch (error){
      console.error("Error username:", error)
    }
  };

  const handleChange = (event) => setUserName(event.target.value);

  return (
    <>
      <p>Type in your username</p>
      <form onSubmit={handleSubmit}>
        <input type="text" value={userName} onChange={handleChange} />
        <button type="submit">Enter</button>
      </form>
    </>
  );
};
