import { useEffect, useState } from 'react'
import './App.css'

import { Users } from './components/FetchUsers'

function App() {
  const [users, setUsers] = useState(JSON.parse(localStorage.getItem("users")) || [])

  useEffect(() => {
    if (users.length === 0) {
      Users()
        .then(users => {
          setUsers(users)
        })
    }
  }, [])

  console.log("users", users
  )

  return (
    <>
      <h1>Gallery</h1>
      <div className="card">
        {users?.map((user) => (<div key={user.id}>First Name: {user.user.first_name} Last Name: {user.user.last_name}
          <img alt="profile image" src={user.user.profile_image.small} />
        </div>))}
      </div>
    </>
  )
}

export default App
