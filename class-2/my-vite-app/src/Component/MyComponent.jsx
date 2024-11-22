import PropTypes from "prop-types";

const MyComponent = ({ message }) => {
    return (
        <h1>{message}</h1>
    );
};
MyComponent.propTypes = {
    message:PropTypes.string
}
export default MyComponent;