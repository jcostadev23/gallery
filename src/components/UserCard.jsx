export function UserCard(users) {
    const listUsers = [...users.users]

    return (
        <>
            {listUsers?.map((user) => (<div key={user.id}>
                First Name: {user.user.first_name}
                Last Name: {user.user.last_name }
                <img alt="profile image" src={user.user.profile_image.medium} />
            </div>))}
        </>
    )
}