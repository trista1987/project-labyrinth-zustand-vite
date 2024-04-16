import { useStore } from "../store/useStore"
// import { Link } from "react-router-dom";


export const StartGame = () => {
    const {gameInfo, loading, error} = useStore()

    if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

    return(
        <div>
            {/* <Link to="/location" >Show Direction</Link> */}
            <button>Show Direction</button>
            <p>{gameInfo.description}</p>
        </div>

    )
}

//if press show direction, will jump to another page which will show the ditail of actions