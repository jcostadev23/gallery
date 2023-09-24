import PropTypes from "prop-types";
import "./usercard.css"

function UserCard({ users }) {
    const listUsers = users

    return (
        <div className="users_card">
            {listUsers?.map((user) => (<div className="user" key={user.id}>
                <p>{user.user.first_name} {user.user.last_name}</p>
                <img alt="profile image" src={user.user.profile_image.large} />
            </div>))}
        </div>
    )
}
UserCard.propTypes = {
    users: PropTypes.array.isRequired
}

export { UserCard };
