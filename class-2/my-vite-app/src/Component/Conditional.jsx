import PropTypes from "prop-types";
const Conditional = ({isLogging ,username})=> {
    return (
        <div>
            {
                isLogging ? (<h1> Welcome, {username}</h1>) : (<h1>Please Login to continue</h1>)
            }
        </div>

    );
}
export default Conditional
Conditional.propTypes = {
    isLogging : PropTypes.bool,
    username:PropTypes.string 
}