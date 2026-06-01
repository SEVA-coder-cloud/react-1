import PropTypes from "prop-types";

export default function User({ name, age, city }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>age: {age}</p>
      <p>city: {city}</p>
    </div>
  );
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
};
