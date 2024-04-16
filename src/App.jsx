import {Username} from "./components/Username";
import { useStore } from "./store/useStore";
import { StartGame } from "./components/startGame";
// import { BrowserRouter, Routes} from "react-router-dom";
// import { routes } from "./routes/routes";

export const App = () => {
  const {username} = useStore()

  return (
  <>
  {/* <BrowserRouter> */}
  <div>
    {!username && <Username />}
    {username && <StartGame />}
  </div>
  
    Labyrinth Project 
  {/* <Routes>{routes}</Routes>
  </BrowserRouter> */}
  
  </>
  );
};
