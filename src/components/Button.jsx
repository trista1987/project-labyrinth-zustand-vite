export const Button = ({buttonName, clickFunction}) => {
    return (
        <button onClick={clickFunction}>{buttonName}</button>
    )
}