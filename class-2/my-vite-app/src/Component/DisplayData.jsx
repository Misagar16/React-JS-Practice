import PropTypes from "prop-types"

const DisplayData = ({fruits, person})=>{
    return (
        <>
            <h2>Fruit List</h2>
            <ul>
                {
                   fruits.map((fruit, index) => (
                        <li key = {index}>{fruit}</li>
                   ))
                }
            </ul>
            <h2>Person Info</h2>
            <p>Name : {person.name}</p>
            <p>Age : {person.age}</p>
        </>
    );

};
export default DisplayData

DisplayData.propTypes = {
    fruits:PropTypes.array,
    person:PropTypes.object
}