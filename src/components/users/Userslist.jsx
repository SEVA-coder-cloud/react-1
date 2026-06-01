import User from "./User";
import PropTypes from "prop-types";

export function UserList({ users }) {
    return (<>{
        users.map((user, index) => (<User key={index} name={user.name} age={user.age} city={user.address.city} />))

    }</>)

}
UserList.propTypes = {
  users: PropTypes.array.isRequired,

};
