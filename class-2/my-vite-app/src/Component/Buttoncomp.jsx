const Button = ()=>{
    function handleClick (){
        console.log("clicked");
    }
    return (
        <button onClick={handleClick}>Click</button>
    )
}
export default Button ; 