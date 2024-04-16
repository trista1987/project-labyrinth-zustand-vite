import {Username} from "./components/Username";
import { useStore } from "./store/useStore";
import { StartGame } from "./components/startGame";


export const App = () => {
  const {username} = useStore()

  return (
  <>
  <div>
    {!username && <Username />}
    {username && <StartGame />}
  </div>
  
    Labyrinth Project 
  </>
  );
};
