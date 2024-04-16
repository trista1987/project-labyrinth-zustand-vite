import { useStore } from "../store/useStore"

export const StartGame = () => {
    const {gameInfo, loading, error} = useStore()

    if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

    return(
        <div>
            <p>{gameInfo.description}</p>
        </div>

    )
}